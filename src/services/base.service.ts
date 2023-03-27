import { Request } from "express";
import { Knex } from "knex";
import * as jwt from '../utils/jwt';

/**
 * Classe base para todos os outros serviços da aplicação.
 * 
 * Serviços que herdam desta classe podem obter o userId da sessão e instância do Knex, assim pode filtrar
 * as entidades do banco de dados que dizem respeito a este usuário (tenant).
 */
export class BaseService {
    /**
     * Id do usuário autenticado. Em caso do usuário não autenticado este campo retorna null.
     */
    protected readonly userId: string | null;
    protected readonly email: string | null;
    protected readonly role: string | null;

    /**
     * Instância do Knex para conexão com banco de dados
     */
    protected database: Knex

    constructor(request: Request, database: Knex = require("../../db/knex")) {

        this.database = database;

        let token = request.headers.authorization ?? '';
        token = token.replace('Bearer ', '');

        const user = jwt.extractUser(token)

        this.userId = user ? user['userId'] : null;
        this.email = user ? user['email'] : null;
        this.role = user ? user['role'] : null;
    }
}