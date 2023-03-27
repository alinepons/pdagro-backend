import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'
import ErrorResponse from './error-response';

// Tempo em que o token irá expirar.
const expiration = '24h';
// Inserir uma chave real aqui.
const secret = "KBqVj4fqebhwEIr+dNCBNI3anw2zhmbFtTn87V8D9HDrQMw+jbP2tCIb4hd6VS9WQtVBk127DGdaVqmrHpMYszCHCLQml0NxntogTGAAEngTwbhhHfZna8l1kLYHDsem41Td4GsFis5hdR0osn1L+lbAHI3k+TPajGpHZJ5v7rzFANGYsAOxYcMmgrPZFlR7SRa2owCWBiV5tJ6+SsYo4J94wqnh7HvzQEZC0HliPEjh+oygzwcfbI/ro4dEHAsehUz7T6AuojSeXkGZ0811sesFs8yW0e5o6lrXujVclT2orD5jsmoXBmmPK6ht+h4WebVqaftRDwynII5SP8nMkQ==";

/**
 * Gera um token.
 * @param userId Id do usuário que foi autenticado.
 * @param role Tipo do usuário que foi autenticado.
 * @param email Email do usuário que foi autenticado.
 * @returns Token gerado.
 */
export function signToken(userId: string, role: string, email: string): string {
    return jwt.sign({ userId, role, email }, secret, { expiresIn: expiration });
}

/**
 * Verifica se um token é válido ou não.
 * @param request 
 * @param response 
 * @param next 
 */
export function verifyToken(request: Request, response: Response, next: NextFunction) {
    try {
        let token = request.headers.authorization ?? '';
        token = token.replace('Bearer ', '');

        jwt.verify(token, secret);

        response.locals.userId = extractUser(token)['userId']
        response.locals.role = extractUser(token)['role']
        response.locals.email = extractUser(token)['email']

        next();
    } catch (err) {
        response.status(401).send(new ErrorResponse(1002, "Invalid token", 500))
    }
}

/**
 * Extrai as informações do usuário a partir do token.
 * @param token 
 * @returns 
 */
export function extractUser(token: string): any {
    let decoded = jwt.decode(token);

    if (decoded && (decoded as jwt.JwtPayload)['userId']) return (decoded as jwt.JwtPayload);

    return null;
}