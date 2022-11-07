import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { AuthDto } from '../dtos/auth-dto';
import AuthService from '../services/auth.service';

export async function login(request: Request, response: Response, next: NextFunction) {
    try {
        let service = new AuthService(request);

        let input = new AuthDto(request.body);
        let token = await service.login(input);

        if(token) {
            response.json(token);
            return;
        }

        response.status(401).send();       
    }
    catch(err) {
        next(err);
    }
}
