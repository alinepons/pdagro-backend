import { UserDto } from '../dtos/user-dto';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import UserService from '../services/users.service';

export async function updateUser(request: Request, response: Response, next: NextFunction) {

    try {
        const service = new UserService(request);
        const userModel = new UserDto(request.body);
        const user = await service.updateUser(userModel);

        response.json(user);
    }
    catch (err) {
        next(err);
    }
}

