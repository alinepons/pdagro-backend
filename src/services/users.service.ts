
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
     * @param user UserDto
     * @returns 
     */
    async deleteUser(user: UserDto): Promise<any | Error> {

        user.deleted_at = new Date()
        user.active = false
        user.confirmed = false
        user.confirmationCode = generateCode()
        user.blocked = true

        const query = this.database("tb_user").update(user).where("id", user.id)
        try {
            const result = await query
            return result
        } catch (error) {
            return error as Error
        }
    }
}

