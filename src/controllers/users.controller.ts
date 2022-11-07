import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { FullUserDto } from '../dtos/full-user-dto';
import UserService from '../services/users.service';

export async function insert(request: Request, response: Response, next: NextFunction) {
    try {
        let service = new UserService(request);
        let input = new FullUserDto(request.body);
        let user = await service.insert(input);

        response.json(user);
    }
    catch (err) {
        next(err);
    }
}

export async function getMyUser(request: Request, response: Response, next: NextFunction) {
    try {
        let service = new UserService(request);
        let user = await service.getMyUser();

        response.json(user);
    }
    catch (err) {
        next(err);
    }
}


export async function getUsers(request: Request, response: Response, next: NextFunction) {
    try {
        /* COMUNICAÇÃO... */
        let service = new UserService(request);

        let users = await service.getUsers();

        response.json(users);
    }
    catch (err) {
        next(err);
    }
}