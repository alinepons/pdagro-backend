
export class SessionDto {

    id: string = ''
    user: string = ''
    token: string = ''

    constructor(init: Partial<SessionDto>) {
        Object.assign(this, init);
    }

}