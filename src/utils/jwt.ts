import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken'

// Tempo em que o token irá expirar.
let expiration = '24h';
// Inserir uma chave real aqui.
let secret = "CHAVE PRIVADA AQUI...";

/**
 * Gera um token.
 * @param userId Id do usuário que foi autenticado.
 * @returns Token gerado.
 */
export function signToken(userId: number): string {
    return jwt.sign({userId: userId}, secret, { expiresIn: expiration });
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
export function extractUserId(token: string): number {
    let decoded = jwt.decode(token);
    
    if(decoded && (decoded as jwt.JwtPayload)['userId'])
        return +(decoded as jwt.JwtPayload)['userId'];

    return 0;
}