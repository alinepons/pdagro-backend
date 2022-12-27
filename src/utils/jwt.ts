import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'

// Tempo em que o token irá expirar.
const expiration = '24h';
// Inserir uma chave real aqui.
const secret = "KBqVj4fqebhwEIr+dNCBNI3anw2zhmbFtTn87V8D9HDrQMw+jbP2tCIb4hd6VS9WQtVBk127DGdaVqmrHpMYszCHCLQml0NxntogTGAAEngTwbhhHfZna8l1kLYHDsem41Td4GsFis5hdR0osn1L+lbAHI3k+TPajGpHZJ5v7rzFANGYsAOxYcMmgrPZFlR7SRa2owCWBiV5tJ6+SsYo4J94wqnh7HvzQEZC0HliPEjh+oygzwcfbI/ro4dEHAsehUz7T6AuojSeXkGZ0811sesFs8yW0e5o6lrXujVclT2orD5jsmoXBmmPK6ht+h4WebVqaftRDwynII5SP8nMkQ==";

/**
 * Gera um token.
 * @param userId Id do usuário que foi autenticado.
 * @returns Token gerado.
 */
export function signToken(userId: string): string {
    return jwt.sign({ userId: userId }, secret, { expiresIn: expiration });
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

        response.locals.userId = extractUserId(token)

        next();
    } catch (err) {
        response.status(401).send();
    }
}

/**
 * Extrai o userId da payload do token.
 * @param token 
 * @returns 
 */
export function extractUserId(token: string): string | null {
    let decoded = jwt.decode(token);

    if (decoded && (decoded as jwt.JwtPayload)['userId'])
        return (decoded as jwt.JwtPayload)['userId'];

    return null;
}