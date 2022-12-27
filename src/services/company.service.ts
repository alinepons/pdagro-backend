
import { CompanyDto } from "dtos/company-dto";
import { BaseService } from "./base.service";

export default class CompanyService extends BaseService {

    async createCompany(company: CompanyDto): Promise<CompanyDto | Error> {

        const query = this.database("tb_company")
            .insert(company)
            .returning('*')

        try {
            const result = await query
            return result[0]
        } catch (error) {
            return error as Error
        }
    }

}

