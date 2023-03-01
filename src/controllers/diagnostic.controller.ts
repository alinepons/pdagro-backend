import { DiagnosticDto } from '../dtos/diagnostic-dto';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import DiagnosticService from '../services/diagnostic.service';
import { QUESTIONS } from '../utils/questions';
import { generateId } from '../utils/generator';
import Pdfmake from 'pdfmake'
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { FeedbackDto } from '../dtos/feedback-dto';

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
        const feedback = request.body.feedback

        const diagnosticService = new DiagnosticService(request)

        const diagnosticModel = new DiagnosticDto({
            id: generateId(),
            user: userId,
            company: request.body.company,
            reply: request.body.reply
        })


        const diagnostic = await diagnosticService.createDiagnostic(diagnosticModel)

        if (feedback) {

            const feedbackModel = new FeedbackDto({
                id: generateId(),
                user: userId,
                reply: feedback
            })

            await diagnosticService.createFeedback(feedbackModel)
        }

        response.json({ message: "Diagnóstico realizado com sucesso!" });
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

export async function getFeedback(request: Request, response: Response, next: NextFunction) {

    try {
        const userId = response.locals.userId
        const diagnosticService = new DiagnosticService(request)
        const diagnostic = await diagnosticService.getFeedback(userId)

        response.json(diagnostic);
    }
    catch (err) {
        next(err);
    }
}

export async function deleteDiagnostic(request: Request, response: Response, next: NextFunction) {

    try {
        const diagnosticId = request.query.id as string
        const diagnosticService = new DiagnosticService(request)
        const diagnostic = await diagnosticService.deleteDiagnostic(diagnosticId)

        response.json(diagnostic);
    }
    catch (err) {
        next(err);
    }
}

export async function getCertificate(request: Request, response: Response, next: NextFunction) {

    try {

        const content = request.body.data

        console.log(content)

        const fonts = {
            Roboto: {
                normal: 'src/fonts/Montserrat-Regular.ttf',
                bold: 'src/fonts/Montserrat-Bold.ttf',
                normalitalic: 'src/fonts/Montserrat-RegularItalic.ttf',
                bolditalic: 'src/fonts/Montserrat-BoldItalic.ttf'
            }
        }

        const pdf = new Pdfmake(fonts)

        let proccess: any[] = []
        let law: any[] = []
        let tech: any[] = []
        let learning: any[] = []

        content.diagnostic.proccess.forEach((p: any, i: number) => {

            proccess.push({
                text: [{ text: `${(i + 1).toString()}) `, style: 'info' }, p.question],
                style: 'text'
            },
                { text: [{ text: 'Resposta: ', style: 'info' }, p.reply], style: 'reply', marginTop: 5 },
                { text: [{ text: 'Comentário: ', style: 'info' }, content.questions.proccess[i].feedback], style: 'reply', marginTop: 5 },
                {
                    canvas: [{
                        type: 'line', x1: 0, y1: 0, x2: 595.28 - 32, y2: 0, lineWidth: .25, lineColor: '#ccc'
                    }], margin: [0, 10]
                })
        })

        content.diagnostic.law.forEach((p: any, i: number) => {

            law.push({
                text: [{ text: `${(i + 1).toString()}) `, style: 'info' }, p.question],
                style: 'text'
            },
                { text: [{ text: 'Resposta: ', style: 'info' }, p.reply], style: 'reply', marginTop: 5 },
                { text: [{ text: 'Comentário: ', style: 'info' }, content.questions.law[i].feedback], style: 'reply', marginTop: 5 },
                {
                    canvas: [{
                        type: 'line', x1: 0, y1: 0, x2: 595.28 - 32, y2: 0, lineWidth: .25, lineColor: '#ccc'
                    }], margin: [0, 10]
                })
        })

        content.diagnostic.tech.forEach((p: any, i: number) => {

            tech.push({
                text: [{ text: `${(i + 1).toString()}) `, style: 'info' }, p.question],
                style: 'text'
            },
                { text: [{ text: 'Resposta: ', style: 'info' }, p.reply], style: 'reply', marginTop: 5 },
                { text: [{ text: 'Comentário: ', style: 'info' }, content.questions.tech[i].feedback], style: 'reply', marginTop: 5 },
                {
                    canvas: [{
                        type: 'line', x1: 0, y1: 0, x2: 595.28 - 32, y2: 0, lineWidth: .25, lineColor: '#ccc'
                    }], margin: [0, 10]
                })
        })

        content.diagnostic.learning.forEach((p: any, i: number) => {

            learning.push({
                text: [{ text: `${(i + 1).toString()}) `, style: 'info' }, p.question],
                style: 'text'
            },
                { text: [{ text: 'Resposta: ', style: 'info' }, p.reply], style: 'reply', marginTop: 5 },
                { text: [{ text: 'Comentário: ', style: 'info' }, content.questions.learning[i].feedback], style: 'reply', marginTop: 5 },
                {
                    canvas: [{
                        type: 'line', x1: 0, y1: 0, x2: 595.28 - 32, y2: 0, lineWidth: .25, lineColor: '#ccc'
                    }], margin: [0, 10]
                })
        })


        const setImageBelt = (rate: number) => {
            if (rate <= 5) {
                // white belt
                return 'white'
            } else if (rate > 5 && rate <= 10) {
                // yellow belt
                return 'yellow'
            } else if (rate > 10 && rate <= 15) {
                // green belt
                return 'green'
            } else if (rate > 15 && rate <= 20) {
                // black belt
                return 'black'
            } else {
                return 'master_black'
            }
        }


        let docDefinition: TDocumentDefinitions = {

            footer: function (currentPage, pageCount, pageSize) {
                return {
                    margin: [20, 10, 20, 10],
                    columns: [
                        { text: `PDAgro - Diagnóstico de Conformidade à LGPD`, marginTop: 10, bold: true, fontSize: 8, alignment: 'left' },
                        { text: `Página ${currentPage.toString()}/${pageCount}`, marginTop: 10, bold: true, fontSize: 8, alignment: 'right' }
                    ]
                }
            },
            pageMargins: [20, 30, 20, 40],
            images: {
                logo: 'public/logo.png',
                black: 'public/black_belt.png',
                masterBlack: 'public/master_black_belt.png',
                yellow: 'public/yellow_belt.png',
                white: 'public/white_belt.png',
                green: 'public/green_belt.png'
            },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true
                },
                info: {
                    bold: true
                },
                text: {
                    fontSize: 10
                },
                reply: {
                    fontSize: 9
                }
            },
            content: [
                {
                    columns: [
                        {
                            image: 'logo',
                            height: 30,
                            width: 120
                        },
                        {
                            width: '*',
                            text: 'DIAGNÓSTICO DE CONFORMIDADE À LGPD',
                            style: 'info',
                            alignment: 'right',
                            margin: [0, 10, 0, 0]
                        }
                    ]
                },
                { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 595.28 - 32, y2: 0, lineWidth: .5 }], margin: [0, 16] },

                { text: 'VISÃO GERAL', style: 'info', margin: [0, 10] },

                {
                    columns: [
                        [
                            {
                                text: `Empresa: ${content.name}`,
                                fontSize: 10
                            },
                            {
                                text: `CNPJ: ${content.cnpj}`,
                                fontSize: 10
                            },
                            {
                                text: `Pontuação: ${content.resultRate}`,
                                fontSize: 10
                            },
                            {
                                text: `Data: ${content.created_at}`,
                                fontSize: 10
                            }
                        ],
                        {
                            width: 110,
                            columns: [
                                {
                                    image: setImageBelt(content.resultRate),
                                    height: 100,
                                    width: 90
                                }
                            ]

                        }

                    ]

                },

                { text: 'PROCESSOS', style: 'info', margin: [0, 10] },
                proccess,

                { text: 'LEI/NORMA', style: 'info', margin: [0, 10] },
                law,

                { text: 'TECNOLOGIA', style: 'info', margin: [0, 10] },
                tech,

                { text: 'APRENDIZAGEM', style: 'info', margin: [0, 10] },
                learning
            ]
        }

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
        console.log(err)
        next(err);
    }
}