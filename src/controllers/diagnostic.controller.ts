import { DiagnosticDto } from '../dtos/diagnostic-dto';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import DiagnosticService from '../services/diagnostic.service';
import { QUESTIONS } from '../utils/questions';
import { generateId } from '../utils/generator';
import Pdfmake from 'pdfmake'
import { TDocumentDefinitions } from 'pdfmake/interfaces';

export async function getQuestions(request: Request, response: Response, next: NextFunction) {
    try {
        response.json(QUESTIONS);
    }
    catch (err) {
        next(err);
    }
}

export async function createDiagnostic(request: Request, response: Response, next: NextFunction) {

    try {
        const userId = response.locals.userId

        const diagnosticService = new DiagnosticService(request)

        const diagnosticModel = new DiagnosticDto({
            id: generateId(),
            user: userId,
            company: request.body.company,
            reply: request.body.reply
        })

        const diagnostic = await diagnosticService.createDiagnostic(diagnosticModel)

        response.json(diagnostic);
    }
    catch (err) {
        next(err);
    }
}

export async function getDiagnostic(request: Request, response: Response, next: NextFunction) {

    try {
        const diagnosticId = request.query.id as string
        const companyId = request.query.company as string || response.locals.userId

        const diagnosticService = new DiagnosticService(request)

        const diagnostic = await diagnosticService.getDiagnostic(diagnosticId, companyId)

        response.json(diagnostic);
    }
    catch (err) {
        next(err);
    }
}

export async function getCertificate(request: Request, response: Response, next: NextFunction) {

    try {

        const data = request.body.data

        const fonts = {
            Roboto: {
                normal: 'src/fonts/Montserrat-Regular.ttf',
                bold: 'src/fonts/Montserrat-Bold.ttf',
                normalitalic: 'src/fonts/Montserrat-RegularItalic.ttf',
                bolditalic: 'src/fonts/Montserrat-BoldItalic.ttf'
            }
        }

        const pdf = new Pdfmake(fonts)

        console.log(data)

        let docDefinition = {} as TDocumentDefinitions

        // let docDefinition: any = {
        //     pageSize: 'A4',
        //     pageOrientation: 'landscape',
        //     pageMargins: [140, 60, 140, 30],
        //     images: {
        //         logo: 'public/logo.png'
        //     },
        //     styles: {
        //         header: {
        //             fontSize: 22,
        //             bold: true
        //         },
        //         info: {
        //             bold: true
        //         }
        //     },
        //     content: [
        //         {
        //             image: 'logo',
        //             height: 50,
        //             width: 250,
        //             alignment: 'center'
        //         },

        //         { text: 'CERTIFICADO', alignment: 'center', style: 'header', margin: [0, 50] },
        //         {
        //             text: [
        //                 'Certificamos que o aluno ',
        //                 { text: content.student, style: 'info' },
        //                 ' concluiu o curso ',
        //                 { text: content.course, style: 'info' },
        //                 ' com carga horária de ',
        //                 { text: content.duration, style: 'info' },
        //                 ' horas.'
        //             ], alignment: 'center'
        //         },
        //         { text: `Bagé, ${content.date}`, alignment: 'center', margin: [0, 50] },
        //         // { qr: `https://www.agrocativo.com.br/certificate/${certificate.id}`, fit: 80, absolutePosition: { x: 20, y: 508 } },
        //         // { text: 'Confira a', absolutePosition: { x: 33, y: 480 }, fontSize: 8, width: 80 },
        //         // { text: 'autenticidade', absolutePosition: { x: 25, y: 490 }, fontSize: 8, width: 80 },
        //         {
        //             columns: [
        //                 {
        //                     width: '*',
        //                     text: content.teacher,
        //                     alignment: 'center'
        //                 }, {
        //                     width: '*',
        //                     text: content.student,
        //                     alignment: 'center'
        //                 },
        //             ]
        //         },
        //         {
        //             columns: [
        //                 {
        //                     width: '*',
        //                     text: 'Instrutor',
        //                     alignment: 'center',
        //                     style: 'info'
        //                 }, {
        //                     width: '*',
        //                     text: 'Aluno',
        //                     alignment: 'center',
        //                     style: 'info'
        //                 },
        //             ]
        //         },
        //         {
        //             image: 'footer',
        //             alignment: 'center',
        //             width: 500,
        //             margin: [0, 30, 0, 0]
        //         },
        //     ]
        // }

        let pdfDoc = pdf.createPdfKitDocument(docDefinition, {});

        // Success
        let chunks: any[] = []

        pdfDoc.on('data', function (chunk) {
            chunks.push(chunk)
        })
        pdfDoc.on('end', function () {
            let result = Buffer.concat(chunks)
            response.contentType('application/pdf')
            response.send(result)
        })

        pdfDoc.end();

    } catch (err) {
        next(err);
    }
}

