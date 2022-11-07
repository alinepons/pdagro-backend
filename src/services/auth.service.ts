import { AuthDto } from "../dtos/auth-dto";
import * as jwt from "../utils/jwt";
import * as bcrypt from 'bcrypt';
import { AuthResponseDto } from "../dtos/auth-response-dto";
import DB from "../tests/db";
import { BaseService } from "./base.service";

export default class AuthService extends BaseService {

    async login(input: AuthDto): Promise<AuthResponseDto | null> {
        // Substituir pela busca no banco de dados real.
        let users = await DB.users();
        let user = users.find(x => x.email === input.username);
    
        if(user && await bcrypt.compare(input.password, user.password)) {
            let token = jwt.signToken(user.id);
            return new AuthResponseDto({token: token});
        }
    
        return null;
    }
}