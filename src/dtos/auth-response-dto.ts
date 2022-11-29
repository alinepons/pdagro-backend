import { UserDto } from "./user-dto";

export class AuthResponseDto {
    token: string = '';
    user: UserDto = {} as UserDto

    constructor(init: Partial<AuthResponseDto>) {
        Object.assign(this, init);
    }
}