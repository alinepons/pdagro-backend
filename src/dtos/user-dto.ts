export class UserDto {
    id: number = 0;
    fullName: string = '';
    email: string = '';

    constructor(init: Partial<UserDto>) {
        Object.assign(this, init);
    }
}