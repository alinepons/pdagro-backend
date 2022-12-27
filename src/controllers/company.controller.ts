
import { CompanyDto } from '../dtos/company-dto';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import CompanyService from '../services/company.service';
import { generateId } from '../utils/generator';

export async function getCompanyById(request: Request, response: Response, next: NextFunction) {

    const companyId = request.params.companyId

    try {
        response.json({ _id: companyId });
    }
    catch (err) {
        next(err);
    }
}

export async function getCompanyByUser(request: Request, response: Response, next: NextFunction) {

    const userId = response.locals.userId

    try {
        response.json({ _id: userId });
    }
    catch (err) {
        next(err);
    }
}

export async function createCompany(request: Request, response: Response, next: NextFunction) {

    try {
        const userId = response.locals.userId

        const companyService = new CompanyService(request)

        const companyModel = new CompanyDto({
            id: generateId(),
            user: userId,
            name: request.body.name.trim(),
            email: request.body.email.trim().toLowerCase(),
            phone: request.body.phone.trim(),
            cnpj: request.body.cnpj.trim(),
            website: request.body.website.trim()
        })

        const company = await companyService.createCompany(companyModel)

        response.json(company);
    }
    catch (err) {
        next(err);
    }
}

