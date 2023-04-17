
import { CompanyDto } from '../dtos/company-dto';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import CompanyService from '../services/company.service';
import { generateId } from '../utils/generator';


export async function getCompanyById(request: Request, response: Response, next: NextFunction) {
    try {

        const companyId = request.query.id as string

        const companyService = new CompanyService(request)
        const company = await companyService.getCompanyById(companyId)

        response.json(company);
    }
    catch (err) {
        next(err);
    }
}

export async function getCompanyByUser(request: Request, response: Response, next: NextFunction) {
    try {

        const userId = response.locals.userId

        const companyService = new CompanyService(request)
        const company = await companyService.getCompanyByUser(userId)

        response.json(company);
    }
    catch (err) {
        next(err);
    }
}

export async function getAllCompany(request: Request, response: Response, next: NextFunction) {
    try {

        const companyService = new CompanyService(request)
        const companys = await companyService.getAllCompany()

        response.json(companys);
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
            cnpj: request.body.cnpj.trim(),
            info: request.body.info
        })

        const company = await companyService.createCompany(companyModel)

        response.json(company);
    }
    catch (err) {
        next(err);
    }
}

export async function deleteCompany(request: Request, response: Response, next: NextFunction) {

    try {

        const companyService = new CompanyService(request)
        const companyId = request.query.id as string

        const company = await companyService.deleteCompany(companyId)

        response.json(company);
    }
    catch (err) {
        next(err);
    }
}