
import bcrypt from "bcrypt"
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import UserService from '../services/users.service';
import { AuthDto } from '../dtos/auth-dto';
import ErrorResponse from '../utils/error-response';
import { SessionDto } from '../dtos/session-dto';
import { generateCode, generateId } from '../utils/generator';
import { signToken } from '../utils/jwt';
import SessionService from '../services/session.service';
import { UserDto } from "../dtos/user-dto";
import { sendCode, sendForgotPasswordEmail, sendResetPasswordEmail, sendWelcomeEmail } from "../services/mail.service";

export async function register(request: Request, response: Response, next: NextFunction) {

    try {
        const serviceRegister = new UserService(request)

        console.log(request.body)

        const checkUser = await serviceRegister.readUser(null, request.body.email.trim().toLowerCase())

        if (checkUser instanceof Error) {
            next(new ErrorResponse(1002, checkUser.message, 500))
            return
        }

        if (checkUser) {
            next(new ErrorResponse(1002, "O email informado já está em uso por outra conta", 500))
            return
        }

        const registerModel = new UserDto({
            id: generateId(),
            fullname: request.body.fullname.trim(),
            email: request.body.email.trim().toLowerCase(),
            password: await bcrypt.hash(request.body.password.trim(), 10),
            confirmationCode: generateCode(),
            cpf: request.body.cpf.trim()
        })

        const user = await serviceRegister.createUser(registerModel)

        if (user instanceof Error) {
            next(new ErrorResponse(1002, user.message, 500))
            return
        }

        sendWelcomeEmail(user)

        // @ts-expect-error
        delete user.password
        // @ts-expect-error
        delete user.confirmationCode

        response.json(user);

    }
    catch (error: any) {
        next(new ErrorResponse(1001, error.message, 500));
    }
}

export async function login(request: Request, response: Response, next: NextFunction) {
    try {
        const serviceLogin = new UserService(request);
        const loginModel = new AuthDto(request.body);

        console.log(loginModel)
        let user = await serviceLogin.readUser(null, loginModel.email)

        if (user instanceof Error) {
            next(new ErrorResponse(1002, user.message, 500))
            return
        }

        if (!user) {
            next(new ErrorResponse(1003, "Usuário não encontrado", 401))
            return
        }

        if (user.blocked) {
            next(new ErrorResponse(1004, "Sua conta está bloqueada. Verifique seu email para maiores informações", 500))
            return
        }

        if (!user.confirmed && !loginModel.code) {
            next(new ErrorResponse(1005, "Sua conta não está ativa", 500))
            return
        }

        if (loginModel.code && user.confirmationCode !== loginModel.code) {
            next(new ErrorResponse(1006, "Código de ativação expirado ou incorreto", 500))
            return
        }

        const match = await bcrypt.compare(loginModel.password.trim(), user.password)

        if (!match) {
            next(new ErrorResponse(1006, "Senha incorreta", 401))
            return
        }

        // Criação da sessão
        const sessionModel = new SessionDto({
            id: generateId(),
            user: user.id,
            token: signToken(user.id)
        })

        const sessionService = new SessionService(request)

        await sessionService.deleteSession(sessionModel.user)

        const session = await sessionService.createSession(sessionModel)

        if (session instanceof Error) {
            next(new ErrorResponse(1007, session.message, 500))
            return
        }

        if(!user.confirmed && user.confirmationCode === loginModel.code){
            user.confirmed = true
            user.confirmationCode = generateCode()
            await updateUser(user, request)
        }

        // @ts-expect-error
        delete user.password
        // @ts-expect-error
        delete user.confirmationCode

        // Success
        response.json({
            token: session.token,
            user
        })

    } catch (error: any) {
        next(new ErrorResponse(1008, error.message, 500))
    }
}

export async function forgotPassword(request: Request, response: Response, next: NextFunction) {
    try {
        const serviceLogin = new UserService(request);

        const email = request.body.email

        const user = await serviceLogin.readUser(null, email)

        if (user instanceof Error) {
            next(new ErrorResponse(1009, user.message, 500))
            return
        }

        if (!user) {
            next(new ErrorResponse(1010, "Usuário não encontrado", 401))
            return
        }

        if (user.blocked) {
            next(new ErrorResponse(1011, "Sua conta está bloqueada. Verifique seu email para maiores informações", 500))
            return
        }

        if (!user.confirmed) {
            next(new ErrorResponse(1012, "Sua conta não está ativa", 500))
            return
        }

        user.confirmationCode = generateCode()

        const updatedUser = await updateUser(user, request)

        if (updatedUser instanceof Error) {
            next(new ErrorResponse(1013, updatedUser.message, 500))
            return
        }

        const ip = request.headers['x-forwarded-for'] as string || request.socket.remoteAddress

        sendForgotPasswordEmail(updatedUser, ip)

        // Success
        response.json({
            message: `Enviamos um email contendo as instruções para redefinir sua senha. Caso não receba em sua Caixa Principal verifique no Spam ou Lixo Eletrônico`
        })

    } catch (error: any) {
        next(new ErrorResponse(1014, error.message, 500))
    }
}

export async function changePassword(request: Request, response: Response, next: NextFunction) {
    try {
        const serviceLogin = new UserService(request);

        const email = request.body.email
        const code = request.body.code
        const password = request.body.password

        const user = await serviceLogin.readUser(null, email)

        if (user instanceof Error) {
            next(new ErrorResponse(1015, user.message, 500))
            return
        }

        if (!user) {
            next(new ErrorResponse(1016, "Usuário não encontrado", 401))
            return
        }

        if (user.confirmationCode !== code) {
            next(new ErrorResponse(1017, "Código de ativação expirado ou incorreto", 401))
            return
        }

        user.password = await bcrypt.hash(password, 10)
        user.confirmationCode = generateCode()

        const updatedUser = await updateUser(user, request)

        if (updatedUser instanceof Error) {
            next(new ErrorResponse(1013, updatedUser.message, 500))
            return
        }

        sendResetPasswordEmail(updatedUser)

        // Success
        response.json({
            message: `Senha alterada com sucesso. Faça Login`
        })

    } catch (error: any) {
        next(new ErrorResponse(1018, error.message, 500))
    }
}

/**
 * 
 * @param request 
 * @param response 
 * @param next 
 * @returns 
 */
export async function sendConfirmationCode(request: Request, response: Response, next: NextFunction) {
    try {
        const serviceLogin = new UserService(request);

        const email = request.body.email
        const operation = request.body.operation // register_code || forgot_password_code

        const user = await serviceLogin.readUser(null, email)

        if (user instanceof Error) {
            next(new ErrorResponse(1019, user.message, 500))
            return
        }

        if (!user) {
            next(new ErrorResponse(1020, "Usuário não encontrado", 401))
            return
        }

        user.confirmationCode = generateCode()

        // Envio do email
        const updatedUser = await updateUser(user, request)

        if (updatedUser instanceof Error) {
            next(new ErrorResponse(1021, updatedUser.message, 500))
            return
        }

        sendCode(updatedUser, operation)

        // Success
        response.json({
            message: `Enviamos um email contendo um novo código. Caso não receba em sua Caixa Principal verifique no Spam ou Lixo Eletrônico`
        })

    } catch (error: any) {
        next(new ErrorResponse(1022, error.message, 500))
    }
}

async function updateUser(user: UserDto, request: Request) {

    try {

        const service = new UserService(request);
        const updatedUser = await service.updateUser(user)

        return updatedUser

    } catch (error: any) {
        return error as Error
    }
}