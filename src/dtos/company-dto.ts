export class CompanyDto {

    id: string = ''
    user: string = ''
    name: string = ''
    email: string = ''
    phone: string = ''
    cnpj: string = ''
    website?: string

    constructor(init: Partial<CompanyDto>) {
        Object.assign(this, init);
    }

}