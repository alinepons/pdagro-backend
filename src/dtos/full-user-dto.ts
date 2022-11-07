export class FullUserDto {
    id: number = 0;
    fullName: string = '';
    password: string = '';
    email: string = '';

    constructor(init: Partial<FullUserDto>) {
        Object.assign(this, init);
    }
}