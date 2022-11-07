export class AuthDto {
    username: string = '';
    password: string = '';

    constructor(init: Partial<AuthDto>) {
        Object.assign(this, init);
    }
}