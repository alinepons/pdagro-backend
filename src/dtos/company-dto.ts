export class CompanyDto {

    id: string = ''
    user: string = ''
    name: string = ''
    cnpj: string = ''
    info: any

    constructor(init: Partial<CompanyDto>) {
        Object.assign(this, init);
    }

}