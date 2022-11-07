import { Request } from "express";
import * as jwt from '../utils/jwt';

/**
 * Classe base para todos os outros serviços da aplicação.
 * 
 * Serviços que herdam desta classe podem obter o userId da sessão, assim pode filtrar
 * as entidades do banco de dados que dizem respeito a este usuário (tenant).
 */
export class BaseService {
    /**
     * Id do usuário autenticado. Em caso do usuário não autenticado este campo retorna 0.
     */
    protected readonly userId: number;

    constructor(request: Request) {
        let token = request.headers.authorization ?? '';
        token = token.replace('Bearer ', '');
        
        this.userId = jwt.extractUserId(token);
    }
}