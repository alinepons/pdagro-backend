
import { UserDto } from "../dtos/user-dto";
import { BaseService } from "./base.service";
import { generateCode } from "../utils/generator";

export default class UserService extends BaseService {


    /**
     * Cria um novo usuário
     * @param user UserDto
     * @returns 
     */
    async createUser(user: UserDto): Promise<UserDto | Error> {

        const query = this.database("tb_user")
            .insert(user)
            .returning('*')

        try {
            const result = await query
            return result[0]
        } catch (error) {
            return error as Error
        }
    }

    /**
     * Busca um usuário que corresponda os parâmetros informados
     * @param id string
     * @param email string
     * @param code string
     * @returns
     */
    public async readUser(id?: string | null, email?: string | null): Promise<UserDto | Error> {

        const query = this.database("tb_user").first()

        if (id) query.where("id", id)
        if (email) query.where("email", email)

        try {
            const result = await query
            return result
        } catch (error) {
            return error as Error
        }
    }

    /**
     * Atualiza um usuário
     * @param user UserDto
     * @returns 
     */
    async updateUser(user: UserDto): Promise<UserDto | Error> {

        const query = this.database("tb_user")
            .where("id", user.id)
            .update(user)
            .returning('*')

        try {
            const result = await query
            return result[0]
        } catch (error) {
            return error as Error
        }
    }

    /**
     * Exclui um usuário tornando-o inativo para posterior exclusão definitiva
     * @param userId string
     * @returns 
     */
    async deleteUser(userId: string): Promise<any | Error> {

        const query = [ 
            this.database("tb_session").where("user", userId).del(),
            this.database("tb_diagnostic").where("user", userId).del(),
            this.database("tb_company").where("user", userId).del(),
            this.database("tb_user").where("id", userId).del()
        ]

        try {
            const result = await Promise.all(query)

            console.log(result)
            return result
        } catch (error) {
            return error as Error
        }
    }
}

