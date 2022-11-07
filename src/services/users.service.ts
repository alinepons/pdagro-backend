import DB from "../tests/db";
import { FullUserDto } from "../dtos/full-user-dto";
import { UserDto } from "../dtos/user-dto";
import * as bcrypt from 'bcrypt';
import { BaseService } from "./base.service";
import { MongoClient, ServerApiVersion } from "mongodb";

export default class UserService extends BaseService {

    async insert(input: FullUserDto): Promise<UserDto | null> {
        let users = await DB.users();
    
        input.id = users.length + 1;
        input.password = await bcrypt.hash(input.password, 12);
    
        users.push(input);
    
        return new UserDto({email: input.email, fullName: input.fullName, id: input.id});
    }

    async getMyUser(): Promise<UserDto | null> {
        let users = await DB.users();
    
        let user = users.find(x => x.id === this.userId);
    
        if(user)
            return new UserDto({email: user.email, fullName: user.fullName, id: user.id});
    
        throw 'Not found.';
    }

    async getUsers(): Promise<UserDto[] | null> {
        /* CONEXAO E VAI RETORNAR OS USUÁRIOS. */

        const uri = "mongodb+srv://aline:tMyulY9r5fmRbKwz@cluster.0ba8lzm.mongodb.net/?retryWrites=true&w=majority"; //"mongodb+srv://wendell93:SF8mGKx251IkZ35s@clustersaopaulo.mt1r4.mongodb.net/?retryWrites=true&w=majority";

        let client = await MongoClient.connect(uri);

        let db = client.db('pdagro'); //consulta o banco de dados

        console.log('Connected to Database');

        await db.collection<UserDto>('user').insertOne(new UserDto({email: 'usuario2@teste2', fullName:'teste2 teste2'}));

        let dbUsers = await db.collection<UserDto>('user').find().toArray();

        return dbUsers;
    }
}

