
import { BaseService } from "./base.service";
import { SessionDto } from "dtos/session-dto";

export default class SessionService extends BaseService {


    /**
     * Cria a sessão do usuário
     * @param session SessionDto
     * @returns 
     */
    async createSession(session: SessionDto): Promise<SessionDto | Error> {

        const query = this.database("tb_session").insert(session).returning("*")

        try {
            const result = await query
            return result[0]
        } catch (error) {
            return error as Error
        }
    }

    /**
     * Deleta todas as sessões ativas de um determinado usuário
     * @param userId string
     * @returns 
     */
    async deleteSession(userId: string): Promise<any> {

        const query = this.database("tb_session").where("user", userId).del()
        try {
            const result = await query
            return result
        } catch (error) {
            return error as Error
        }
    }
}

