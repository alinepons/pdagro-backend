export class AuthResponseDto {
    token: string = '';

    constructor(init: Partial<AuthResponseDto>) {
        Object.assign(this, init);
    }
}