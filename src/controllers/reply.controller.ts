import { NextFunction } from 'express';
import { Request, Response } from 'express';
import { QUESTIONS } from './../utils/questions';

export async function getQuestions(request: Request, response: Response, next: NextFunction) {

    try {
        response.json(QUESTIONS);
    }
    catch (err) {
        next(err);
    }
}

