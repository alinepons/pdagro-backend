export class AuthDto {
    email: string = '';
    password: string = '';
    code?: string

    constructor(init: Partial<AuthDto>) {
        Object.assign(this, init);
    }
}