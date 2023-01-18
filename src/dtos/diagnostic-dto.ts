export class DiagnosticDto {

    id: string = ''
    user: string = ''
    company: string = ''
    reply: any

    constructor(init: Partial<DiagnosticDto>) {
        Object.assign(this, init);
    }

}