export class UserDto {

    id: string = ''
    fullname: string = ''
    email: string = ''
    password: string = ''
    confirmationCode: string = '' 
    role: string = ''
    active?: boolean  
    blocked?: boolean
    confirmed?: boolean
    deleted_at?: Date

    constructor(init: Partial<UserDto>) {
        Object.assign(this, init);
    }

}