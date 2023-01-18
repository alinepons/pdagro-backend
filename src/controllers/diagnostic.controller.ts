import { DiagnosticDto } from '../dtos/diagnostic-dto';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import DiagnosticService from '../services/diagnostic.service';
import { QUESTIONS } from '../utils/questions';
import { generateId } from '../utils/generator';


export async function getQuestions(request: Request, response: Response, next: NextFunction) {
    try {
        response.json(QUESTIONS);
    }
    catch (err) {
        next(err);
    }
}


export async function createDiagnostic(request: Request, response: Response, next: NextFunction) {

    try {
        const userId = response.locals.userId

        const diagnosticService = new DiagnosticService(request)

        const diagnosticModel = new DiagnosticDto({
            id: generateId(),
            user: userId,
            company: request.body.company,
            reply: request.body.reply
        })

             

        const diagnostic = await diagnosticService.createDiagnostic(diagnosticModel)

        response.json(diagnostic);
    }
    catch (err) {
        next(err);
    }
}

export async function getDiagnostic(request: Request, response: Response, next: NextFunction) {

    try {
        const diagnosticId = request.query.id as string
        const companyId = request.query.company as string || response.locals.userId

        const diagnosticService = new DiagnosticService(request)

        const diagnostic = await diagnosticService.getDiagnostic(diagnosticId, companyId)

        response.json(diagnostic);
    }
    catch (err) {
        next(err);
    }
}

