
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

    async getCompanyByUser(user: string): Promise<any | Error> {

        let queryCompany = await this.database("tb_company as c")
            .where("c.user", user)
            .orderBy("c.name", "asc")

        for (let i = 0; i < queryCompany.length; i++) {
            queryCompany[i]["diagnostic"] = await this.database("tb_diagnostic as d")
                .where("d.company", queryCompany[i].id)
                .select(
                    "d.id",
                    "d.reply",
                    "d.created_at"
                )

        }

        try {
            const result = queryCompany
            return result

        } catch (error) {
            return error as Error
        }
    }

    async getCompanyById(id: string): Promise<any | Error> {
        const query = this.database("tb_company as c")
            .select(
                "c.id",
                "c.user",
                "c.name",
                "c.cnpj",
                "c.info",
                "d.reply"
            )
            .where("c.id", id)
            .leftJoin("tb_diagnostic as d", "d.company", "c.id") // busca os diagnosticos da referida empresa
            .orderBy("c.name", "asc")
            .first()

        try {
            const result = await query
            return result

        } catch (error) {
            return error as Error
        }
    }

}

