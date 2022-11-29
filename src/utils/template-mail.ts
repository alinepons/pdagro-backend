import { format } from "date-fns"

export default class TemplateMail {

  private code?: string
  private name?: string
  private ip?: string
  private dateTime: string
  private operation?: string

  constructor(code?: string, name?: string, ip?: string, operation?: string) {
    this.code = code
    this.name = name
    this.ip = ip
    this.operation = operation
    this.dateTime = format(new Date(), 'dd/MM/yyyy HH:mm:ss')
  }

  header() {
    return `
    <!DOCTYPE html>
    <html lang="pt_BR" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="utf-8">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
        <!--[if mso]>
                <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
                <style>
                  td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
                </style>
              <![endif]-->
        <title>PDAgro</title>
        <link
            href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
            rel="stylesheet" media="screen">
        <style>
            .hover-underline:hover {
                text-decoration: underline !important;
            }
    
            @media (max-width: 600px) {
                .sm-leading-32 {
                    line-height: 32px !important;
                }
    
                .sm-px-24 {
                    padding-left: 24px !important;
                    padding-right: 24px !important;
                }
    
                .sm-py-32 {
                    padding-top: 32px !important;
                    padding-bottom: 32px !important;
                }
    
                .sm-pt-32 {
                    padding-top: 32px !important;
                }
    
                .sm-pb-24 {
                    padding-bottom: 24px !important;
                }
    
                .sm-pb-12 {
                    padding-bottom: 12px !important;
                }
    
                .sm-w-full {
                    width: 100% !important;
                }
            }
        </style>
    </head>
    
    <body
        style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; --bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity));">
    
        <div role="article" aria-roledescription="email" aria-label="Default email title" lang="en">
            <table style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; width: 100%;" width="100%"
                cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                    <td align="center"
                        style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;"
                        bgcolor="rgba(236, 239, 241, var(--bg-opacity))">
                        <table class="sm-w-full" style="font-family: 'Montserrat',Arial,sans-serif; width: 600px;"
                            width="600" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                                <td class="sm-pt-32 sm-pb-12 sm-px-24"
                                    style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; padding: 48px 24px 18px 24px; text-align: center;"
                                    align="center">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/pdagro.appspot.com/o/images%2Flogo.png?alt=media&token=bce72938-b466-4d5c-b430-269d5641cd58"
                                        style="width:auto;height:60px">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" class="sm-px-24" style="font-family: 'Montserrat',Arial,sans-serif;">
                                <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%"
                                    cellpadding="0" cellspacing="0" role="presentation">
    `
  }

  footer() {

    return `
        <tr>
        <td
            style="font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 12px; padding: 48px; --text-opacity: 1; color: #eceff1; color: rgba(236, 239, 241, var(--text-opacity));text-align: center">
            <p align="center" style="cursor: default; margin-bottom: 16px;">
                <a href="https://www.facebook.com/lure.dating" target="_blank"
                    style="--text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity)); text-decoration: none;">
                    <img alt="Facebook" width="30"
                        style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle; margin-right: 12px;"
                        src="https://firebasestorage.googleapis.com/v0/b/lure-4all.appspot.com/o/images%2Ffacebook.png?alt=media&token=b87a762f-69e0-4c3f-b806-d25809a7b3f9" />
                    <a href="https://www.twitter.com/luredating" target="_blank"
                        style="--text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity)); text-decoration: none;">
                        <img width="30" alt="Twitter"
                            style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle; margin-right: 12px;"
                            src="https://firebasestorage.googleapis.com/v0/b/lure-4all.appspot.com/o/images%2Ftwitter.png?alt=media&token=9db8c666-7c30-44d4-bbca-160940230a3b" />
                    </a>
                    <a href="https://www.instagram.com/lure.brasil" target="_blank"
                        style="--text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity)); text-decoration: none;">
                        <img width="30" alt="Instagram"
                            style="border: 0; max-width: 100%; line-height: 100%; vertical-align: middle; margin-right: 12px;"
                            src="https://firebasestorage.googleapis.com/v0/b/lure-4all.appspot.com/o/images%2Finstagram.png?alt=media&token=d85fe58b-dff7-4135-addc-b5a1bd58a9c2" />
                    </a>
            </p>
            <p
                style="--text-opacity: 1; color: #263238; color: rgba(38, 50, 56, var(--text-opacity)); margin-bottom: 48px;">
                Ao utilizar a plataforma <strong>PDAgro</strong> você estará sujeito aos <a href="" class="hover-underline"
                    style="--text-opacity: 1; color: #7367f0; text-decoration: none;" target="_blank">Termos de Uso</a> e
                <a href="" class="hover-underline"
                    style="--text-opacity: 1; color: #7367f0; text-decoration: none;" target="_blank">Política de Privacidade</a>.
            </p>
        </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </div>
    </body>
    </html>
        `
  }

  register() {

    return `${this.header()}
        <tr>
          <td class="sm-px-24"
            style="--bg-opacity: 1; background-color: #ffffff; background-color: rgba(255, 255, 255, var(--bg-opacity)); border-radius: 20px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #015A4D"
            bgcolor="rgba(255, 255, 255, var(--bg-opacity))" align="left">
            <p style="font-weight: 600; margin-bottom: 0;">Olá,</p>
            <p style="font-weight: 700; font-size: 22px; margin-top: 0; --text-opacity: 1; color: #015A4D;">
              ${this.name}</p>
              
            <p class="sm-leading-32"
              style="font-weight: 600; margin: 0 0 24px; --text-opacity: 1; color: #015A4D">
              Seja bem-vindo(a). Agradecemos seu interesse no PDagro.
            </p>

            <p style="margin: 24px 0;">
              Utilize o código abaixo para ativar sua conta.
            </p>

            <p
              style=" border-radius: 5px;width: 150px; margin: 24px 0;font-weight: 600;font-size: 24px;letter-spacing: 5px;color: #f2f2f2;padding:12px;background-color: #015A4D;text-align: center;">
              ${this.code}
            </p>

            <p style="margin: 24px 0;">
              <span style="font-weight: 600;">Nota:</span> Esse código é válido por 1 hora e pode ser usado apenas uma vez.
            </p>
            <p style="margin: 24px 0;">
            ⚠️ Não compartilhe esse código com ninguém.
            </p>

            <p style="margin: 24px 0;">
              Após ativar sua conta, acesse a plataforma e conclua seu cadastro para realizar o diagnóstico de conformidade à Lei Geral de Proteção de Dados.
            </p>                           

            <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%"
              cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td
                  style="font-family: 'Montserrat',Arial,sans-serif;padding-bottom: 10px;">
                  <div
                    style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); height: 1px; line-height: 1px;">
                    &zwnj;</div>
                </td>
              </tr>
            </table>

            <p style="margin: 0 0 16px;">Saudações, <br>Equipe PDAgro.</p>
          </td>
        </tr>
     ${this.footer()}`
  }

  changePassword() {

    return `${this.header()}
        <tr>
          <td class="sm-px-24"
            style="--bg-opacity: 1; background-color: #ffffff; background-color: rgba(255, 255, 255, var(--bg-opacity)); border-radius: 20px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #015A4D"
            bgcolor="rgba(255, 255, 255, var(--bg-opacity))" align="left">
            <p style="font-weight: 600; margin-bottom: 0;">Olá!</p>
            <p class="sm-leading-32"
              style="font-weight: 600; margin: 0 0 24px; --text-opacity: 1; color: #015A4D">
              Senha alterada!
            </p>

            <p style="margin: 24px 0;">
            Sua senha foi alterada com sucesso em ${this.dateTime}.
            </p>

            <p style="margin: 24px 0;">
            Se você <span style="font-weight: 600;">não reconhece essa ação</span> mande um e-mail para <a href="mailto:suporte@pdagro.com" class="hover-underline"
            style="--text-opacity: 1; color: #7367f0; text-decoration: none;">suporte@pdagro.com</a>
          </p>

            <p style="margin: 24px 0;">
            Solicitado por: <br> <br> Endereço IP: <span style="font-weight: 600;">${this.ip}</span>
            </p>

            <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%"
              cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td
                  style="font-family: 'Montserrat',Arial,sans-serif;padding-bottom: 10px;">
                  <div
                    style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); height: 1px; line-height: 1px;">
                    &zwnj;</div>
                </td>
              </tr>
            </table>

            <p style="margin: 0 0 16px;">Saudações, <br>Equipe PDAgro.</p>
          </td>
        </tr>
    ${this.footer()}`

  }

  forgotPassword() {
    return `${this.header()}
        <tr>
          <td class="sm-px-24"
            style="--bg-opacity: 1; background-color: #ffffff; background-color: rgba(255, 255, 255, var(--bg-opacity)); border-radius: 20px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #015A4D"
            bgcolor="rgba(255, 255, 255, var(--bg-opacity))" align="left">
            <p style="font-weight: 600; margin-bottom: 0;">Olá!</p>
            <p class="sm-leading-32"
              style="font-weight: 600; margin: 0 0 24px; --text-opacity: 1; color: #015A4D">
              Esqueceu a senha? Sem problemas!
            </p>

            <p style="margin: 24px 0;">
              Se você <span style="font-weight: 600;">reconhece essa ação</span> use o código abaixo para alterar sua senha.
            </p>

            <p
              style=" border-radius: 5px;width: 150px; margin: 24px 0;font-weight: 600;font-size: 24px;letter-spacing: 5px;color: #f2f2f2;padding:12px;background-color: #015A4D;text-align: center;">
              ${this.code}
            </p>
            <p style="margin: 24px 0;">
              <span style="font-weight: 600;">Nota:</span> Esse código é válido por 1 hora a partir da data da solicitação, e pode ser usado apenas uma vez para redefinir a senha.
            </p>
            <p style="margin: 24px 0;">
            ⚠️ Não compartilhe esse código com ninguém.
            </p>

            <p style="margin: 24px 0;">
            Solicitado por: <br> <br> Endereçco IP: <span style="font-weight: 600;">${this.ip}</span> <br> Data: <span style="font-weight: 600;">${this.dateTime}</span>
            </p>

            <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%"
              cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td
                  style="font-family: 'Montserrat',Arial,sans-serif;padding-bottom: 10px;">
                  <div
                    style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); height: 1px; line-height: 1px;">
                    &zwnj;</div>
                </td>
              </tr>
            </table>

            <p style="margin: 0 0 16px;">Saudações, <br>Equipe PDAgro.</p>
          </td>
        </tr>
     ${this.footer()}`

  }

  sendCode() {

    return `${this.header()}
        <tr>
          <td class="sm-px-24"
            style="--bg-opacity: 1; background-color: #ffffff; background-color: rgba(255, 255, 255, var(--bg-opacity)); border-radius: 20px; font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif; font-size: 14px; line-height: 24px; padding: 48px; text-align: left; --text-opacity: 1; color: #015A4D"
            bgcolor="rgba(255, 255, 255, var(--bg-opacity))" align="left">
            <p style="font-weight: 600; margin-bottom: 0;">Olá,</p>
            <p style="font-weight: 700; font-size: 22px; margin-top: 0; --text-opacity: 1; color: #015A4D;">${this.name}</p>
              
            <p style="margin: 24px 0;">
              Se você <span style="font-weight: 600;">reconhece essa ação</span> use o código abaixo para ${this.operationMsg(this.operation || "")}.
            </p>

            <p
              style=" border-radius: 5px;width: 150px; margin: 24px 0;font-weight: 600;font-size: 24px;letter-spacing: 5px;color: #f2f2f2;padding:12px;background-color: #015A4D;text-align: center;">
              ${this.code}
            </p>

            <p style="margin: 24px 0;">
              <span style="font-weight: 600;">Nota:</span> Esse código é válido por 1 hora e pode ser usado apenas uma vez.
            </p>
            <p style="margin: 24px 0;">
            ⚠️ Não compartilhe esse código com ninguém.
            </p>                         

            <table style="font-family: 'Montserrat',Arial,sans-serif; width: 100%;" width="100%"
              cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td
                  style="font-family: 'Montserrat',Arial,sans-serif;padding-bottom: 10px;">
                  <div
                    style="--bg-opacity: 1; background-color: #eceff1; background-color: rgba(236, 239, 241, var(--bg-opacity)); height: 1px; line-height: 1px;">
                    &zwnj;</div>
                </td>
              </tr>
            </table>

            <p style="margin: 0 0 16px;">Saudações, <br>Equipe PDAgro.</p>
          </td>
        </tr>
     ${this.footer()}`
  }

  private operationMsg = (type: string): string => {
    switch (type) {
      case "register_code":
        return "validação do seu cadastro"
      case "forgot_password_code":
        return "redefinição da sua senha"
      default:
        return ""
    }
  }
}