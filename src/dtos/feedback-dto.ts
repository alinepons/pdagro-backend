export class FeedbackDto {

    id: string = ''
    user: string = ''
    reply: any

    constructor(init: Partial<FeedbackDto>) {
        Object.assign(this, init);
    }

}