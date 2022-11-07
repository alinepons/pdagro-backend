import { FullUserDto } from "../dtos/full-user-dto";
import * as bcrypt from 'bcrypt';
import * as timers from '../utils/timers';

export default class DB {
    private static _users: FullUserDto[] = [];

    static async users(): Promise<FullUserDto[]> {
        // Simula delay do banco de dados...
        await timers.delay(2000);

        if(this._users.length === 0) {
            let user = new FullUserDto({ email: 'teste@teste', fullName: 'teste', id: 1, password: await bcrypt.hash('teste', 12) });
            this._users.push(user);
        }

        return this._users;
    }
}