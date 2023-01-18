
import { DiagnosticDto } from "../dtos/diagnostic-dto";
import { BaseService } from "./base.service";

export default class DiagnosticService extends BaseService {

    async createDiagnostic(diagnostic: DiagnosticDto): Promise<DiagnosticDto | Error> {

        const query = this.database("tb_diagnostic")
            .insert(diagnostic)
            .returning('*')

        try {
            const result = await query
            return result[0]
        } catch (error) {
            return error as Error
        }
    }

    async getDiagnostic(id?: string, company?: string): Promise<any | Error> {

        const query = this.database("tb_diagnostic")

        if (id) query.where("id", id).first()
        if (company) query.where("company", company).first()

        if (!id && !company) query.orderBy("nome", "asc")

        try {
            const result = await query
            return result

        } catch (error) {
            return error as Error
        }
    }

}

