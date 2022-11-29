import { UserDto } from "../dtos/user-dto"
import nodemailer from "nodemailer"
import TemplateMail from "../utils/template-mail"
import SMTPTransport from "nodemailer/lib/smtp-transport"

require("dotenv").config()


export async function sendForgotPasswordEmail(user: UserDto, ip?: string): Promise<SMTPTransport.SentMessageInfo | Error> {
    try {
        const message = new TemplateMail(user.confirmationCode, user.fullname.split(' ')[0], ip)
        const send = await mail(user.email, message.forgotPassword(), "Esqueceu a senha? Sem problemas!")
        console.log("Email sent: %s", send.messageId)
        return send
    } catch (error) {
        console.log("Error sending email:", error)
        return error as Error
    }
}

export async function sendRegister(user: UserDto, ip?: string): Promise<SMTPTransport.SentMessageInfo | Error> {
    try {
        const message = new TemplateMail(user.confirmationCode, user.fullname.split(' ')[0], ip)
        const send = await mail(user.email, message.register(), "Bem vindo(a) ao PDAgro! Ative sua conta!")
        console.log("Email sent: %s", send.messageId)
        return send
    } catch (error) {
        console.log("Error sending email:", error)
        return error as Error
    }
}

export async function sendCode(user: UserDto, operation: string, ip?: string): Promise<SMTPTransport.SentMessageInfo | Error> {
    try {
        const message = new TemplateMail(user.confirmationCode, user.fullname.split(' ')[0], ip, operation)
        const send = await mail(user.email, message.sendCode(), "Novo código solicitado!")
        console.log("Email sent: %s", send.messageId)
        return send
    } catch (error) {
        console.log("Error sending email:", error)
        return error as Error
    }
}

export async function sendResetPasswordEmail(user: UserDto, ip?: string): Promise<SMTPTransport.SentMessageInfo | Error> {
    try {
        const message = new TemplateMail(user.fullname.split(' ')[0], ip)
        const send = await mail(user.email, message.changePassword(), "Senha alterada!")
        console.log("Email sent: %s", send.messageId)
        return send
    } catch (error) {
        console.log("Error sending email:", error)
        return error as Error
    }
}


export async function sendWelcomeEmail(user: UserDto, ip?: string): Promise<SMTPTransport.SentMessageInfo | Error> {
    try {
        const message = new TemplateMail(user.confirmationCode, user.fullname.split(' ')[0], ip)
        const send = await mail(user.email, message.register(), "Boas vindas ao PDAgro!")
        console.log("Email sent: %s", send.messageId)
        return send
    } catch (error) {
        console.log("Error sending email:", error)
        return error as Error
    }
}

async function mail(email: string, message: any, subject: string) {

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // const testAccount = await nodemailer.createTestAccount()

    // Create transport object by SMTP
    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true, // true 465, false outras portas
        auth: {
            user: process.env.USER_EMAIL, // usuario 
            pass: process.env.PASSWORD_EMAIL, // senha
        },
    })

    // send mail with defined transport object
    const sendMail = await transporter.sendMail({
        from: '"PDAgro" <noreply@pdagro.com>', // sender address
        to: email, // list of receivers
        subject: subject, // Subject line
        html: message
    })

    return sendMail
}
