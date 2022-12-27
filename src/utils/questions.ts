export const QUESTIONS = [
    {
        "_id": 1,
        "step": "Cadastro",
        "items": [
            {
                "_id": 1,
                "title": "Qual é o porte da empresa?",
                "comment": "`Segundo o SEBRAE, existem parâmetros para definir o porte de uma empresa: Microempreendedor Individual (faturamento até R$ 81.000,00 anual); Microempresa (faturamento até R$ 360.000,00 anual); Empresas de Pequeno Porte (faturamento de R$ 360.000,00 a R$ 4.8 milhões anuais); Empresas de Médio Porte (faturamento de R$ 4.8 milhões a R$ 300 milhões anuais); Pequeno Produtor Rural (propriedade com até 4 módulos fiscais ou faturamento de até R$ 4.8 milhões anuais).`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Pequeno Produtor Rural"
                    },
                    {
                        "_id": 2,
                        "text": "Microempresa"
                    },
                    {
                        "_id": 3,
                        "text": "Empresa de Pequeno Porte"
                    },
                    {
                        "_id": 4,
                        "text": "Empresa de Médio Porte"
                    }
                ]
            },
            {
                "_id": 2,
                "title": "Qual é o ramo de atividade no agronegócio?",
                "comment": null,
                "multiple": true,
                "options": [
                    {
                        "_id": 1,
                        "text": "Agroindústria"
                    },
                    {
                        "_id": 2,
                        "text": "Agrícola"
                    },
                    {
                        "_id": 3,
                        "text": "Pecuária"
                    },
                    {
                        "_id": 4,
                        "text": "Florestal"
                    }
                ]
            },
            {
                "_id": 3,
                "title": "Qual é o grau de formação do gestor?",
                "comment": null,
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Pós-graduação"
                    },
                    {
                        "_id": 2,
                        "text": "Superior completo"
                    },
                    {
                        "_id": 3,
                        "text": "Superior incompleto"
                    },
                    {
                        "_id": 4,
                        "text": "Ensino médio completo"
                    },
                    {
                        "_id": 5,
                        "text": "Ensino médio incompleto"
                    },
                    {
                        "_id": 4,
                        "text": "Ensino fundamental completo"
                    },
                    {
                        "_id": 4,
                        "text": "Ensino fundamental incompleto"
                    }
                ]
            },
            {
                "_id": 4,
                "title": "A formação do gestor é na área do agronegócio?",
                "comment": null,
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Sim"
                    },
                    {
                        "_id": 2,
                        "text": "Não"
                    }
                ]
            },
            {
                "_id": 5,
                "title": "Qual é a formação?",
                "comment": null,
                "multiple": false,
                "options": null
            },
            {
                "_id": 6,
                "title": "Quantos colaboradores a empresa possui?",
                "comment": "`Segundo o SEBRAE, existe uma definição de porte de estabelecimentos segundo o número de empregados. Os parâmetros para comércio e serviços são: Microempresa (ME) até 9 empregados, Empresa de Pequeno Porte (EPP) de 10 a 49 empregados, Empresa de Médio Porte de 50 a 99 empregados. Na indústria, os parâmetros são: Microempresa (ME) até 19 empregados, Empresa de Pequeno Porte (EPP) de 20 a 99 empregados, Empresa de Médio Porte de 100 a 499 empregados`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Até 9 colaboradores"
                    },
                    {
                        "_id": 2,
                        "text": "Até 19 colaboradores"
                    },
                    {
                        "_id": 3,
                        "text": "Até 49 colaboradores"
                    },
                    {
                        "_id": 4,
                        "text": "Até 99 colaboradores"
                    },
                    {
                        "_id": 5,
                        "text": "Até 499 colaboradores"
                    }
                ]
            }
        ]
    },
    {
        "_id": 2,
        "step": "Processos",
        "items": [
            {
                "_id": 1,
                "title": "Na empresa existe a realização de operações com dados pessoais (coleta, acesso, processamento, armazenamento, modificação ou compartilhamento) para desempenhar a atividade, ou para oferecer serviços?",
                "comment": "`Dado pessoal é aquele relacionado à pessoa natural identificada ou passível de identificação. Considera-se que operação ou tratamento seja qualquer manipulação realizada com dados pessoais.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Realiza operações com muitos dados pessoais",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Realiza operações com poucos dados pessoais",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Realiza algumas operações com dados pessoais",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está verificando se realiza operações com dados pessoais",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não realiza operações com dados pessoais",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 2,
                "title": "Existe um documento descrevendo os processos pelos quais os dados pessoais transitam, desde a coleta, armazenamento e até exclusão?",
                "comment": "`O documento deve conter o mapeamento de dados, no qual é feita a identificação e registro da sequência que o dado pessoal percorre nos processos, desde a sua entrada , permanência e exclusão.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe o documento formalizado descrevendo todos os processos",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe o documento formalizado com alguns dados dos processos descritos",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe o documento mas os processos não estão descritos",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe o documento",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 3,
                "title": "Existe o cuidado na manipulação dos dados sensíveis, que permitem a identificação dos seus titulares?",
                "comment": "`Dado pessoal sensível é o dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural. Entende-se que o cuidado na manipulação dos dados sensíveis requer autorização dos titulares e uso de proteção, por exemplo, criptografia.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Os dados sensíveis são protegidos na sua totalidade",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Os dados sensíveis são protegidos de forma parcial",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe manipulação mas os dados sensíveis não são protegidos",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe manipulação dos dados sensíveis",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 4,
                "title": "Existe o envio de dados pessoais para destinatário fora do país, por mensagem, e-mail ou para a nuvem de forma protegida?",
                "comment": "`Entende-se que uma forma protegida faz uso de métodos que envolvam criptografia ou técnicas computacionais disponíveis para o envio das mensagens. Um exemplo de envio de dados desprotegidos é o envio simples por e-mail de uma conta pessoal.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe o envio com proteção integral",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe o envio com proteção parcial",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe o envio mas não são protegidos",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe o envio de dados pessoais",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 5,
                "title": "A criação de processos, no âmito da sua organização, garante a proteção da privacidade dos dados desde o momento que são gerados?",
                "comment": "`Considera-se privacidade desde a criação dos processos, prevenir incidentes, em que o sistema, produto ou serviço se origina com o conceito de proteger os dados pessoais de titulares, evitar coleta de dados além do necessário, considerar segurança em todas as etapas, ser transparente ao informar as operações que são realizadas com os dados e respeitar a privacidade do titular.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Os processos protegem os dados desde a sua criação",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Os processos protegem os dados em algumas etapas",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe criação mas não garante a proteção de dados",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe criação de processos",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 6,
                "title": "Existe um meio (contato ou sistema que manipula dados) para que o titular possa solicitar a eliminação de seus dados?",
                "comment": "`Considera-se privacidade desde a criação dos processos, prevenir incidentes, em que o sistema, produto ou serviço se origina com o conceito de proteger os dados pessoais de titulares, evitar coleta de dados além do necessário, considerar segurança em todas as etapas, ser transparente ao informar as operações que são realizadas com os dados e respeitar a privacidade do titular.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe um meio e atende todas as solicitações",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe um meio e atende algumas solicitações",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe um meio mas as solicitações não são atendidas",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe um meio de solicitar a eliminação dos dados",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 7,
                "title": "Existe política de privacidade, em página web ou de forma física e fixada em local visível, informando aos titulares as medidas de proteção de dados?",
                "comment": "`Considera-se privacidade desde a criação dos processos, prevenir incidentes, em que o sistema, produto ou serviço se origina com o conceito de proteger os dados pessoais de titulares, evitar coleta de dados além do necessário, considerar segurança em todas as etapas, ser transparente ao informar as operações que são realizadas com os dados e respeitar a privacidade do titular.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe e informa as medidas de proteção de dados",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe e informa algumas medidas de proteção de dados",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe mas não informa as medidas de proteção de dados",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe política de privacidade",
                        "amount": 1
                    }
                ]
            }
        ]
    },
    {
        "_id": 3,
        "step": "Lei/Norma",
        "items": [
            {
                "_id": 1,
                "title": "Existe a elaboração de relatório de impacto de proteção de dados quando a manipulação de dados envolver dados pessoais sensíveis?",
                "comment": "`Considera-se que o relatório de impacto de proteção de dados deve conter a descrição dos processos de dados pessoais, as medidas adotadas para mitigar riscos de exposição.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe o relatório de todos os dados sensíveis",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe o relatório com alguns dados sensíveis",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe o relatório mas não envolve dados sensíveis",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe relatório de impacto de proteção de dados",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 2,
                "title": "Existe um monitoramento de vulnerabilidade em que a falha de segurança dos sistemas computacionais, nos quais os dados são manipulados, possa ser corrigido pela tecnologia?",
                "comment": "`Um exemplo de falha de segurança é a identificação de que o login ou a senha está incorreta, indicando qual é a informação que falta para o usuário (atacante) entrar no sistema. Entende-se que o monitoramento possa detectar se existem tentativas maliciosas de entrar no seu sistema.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe monitoramento em toda organização",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe monitoramento em parte da organização",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe monitoramento mas não é feita as devidas correções",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe monitoramento",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 3,
                "title": "Em casos de incidentes de perda, vazamento de dados ou furto de equipamentos computacionais (computadores, tablets ou celulares), existe um plano de ação eficiente?",
                "comment": null,
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe plano de ação eficiente para incidentes de dados",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe plano de ação de alguns incidentes de dados",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe plano de ação mas não é eficiente",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe plano de ação para incidentes de dados",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 4,
                "title": "Existe um momento de discussão sobre a privacidade dos dados entre o público interno da empresa, de modo a informar vulnerabilidades observadas na manipulação de dados?",
                "comment": "`Considera-se que a informação da existência de vulnerabilidades seja uma boa prática, por exemplo, identificação dos programas de computadores desatualizados, ausência de backups regulares, falta de instrução sobre proteção de dados aos colaboradores.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe discussão sobre vulnerabilidades em toda manipulação",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe discussão sobre vulnerabilidades em parte da manipulação",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe o momento mas não existe observações das vulnerabilidades",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe um momento",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 4,
                "title": "Existe um momento de discussão sobre a privacidade dos dados entre o público interno da empresa, de modo a informar vulnerabilidades observadas na manipulação de dados?",
                "comment": "`Considera-se que a informação da existência de vulnerabilidades seja uma boa prática, por exemplo, identificação dos programas de computadores desatualizados, ausência de backups regulares, falta de instrução sobre proteção de dados aos colaboradores.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe discussão sobre vulnerabilidades em toda manipulação",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe discussão sobre vulnerabilidades em parte da manipulação",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe o momento mas não existe observações das vulnerabilidades",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe um momento",
                        "amount": 1
                    }
                ]
            }
        ]
    },
    {
        "_id": 4,
        "step": "Tecnologia",
        "items": [
            {
                "_id": 1,
                "title": "Na empresa existe o armazenamento das informações?",
                "comment": "`Entende-se que uma forma segura utilize recursos computacionais que garantam a integridade dos dados.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe armazenamento de todas as informações",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe armazenamento de informações",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe armazenamento de poucas informações",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe armazenamento de informações",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 2,
                "title": "Existe um profissional, equipe ou empresa prestadora de serviço, responsável pela segurança da tecnologia da organização?",
                "comment": "`Entende-se por segurança da tecnologia a adoção de medidas para proteger a integridade dos sistemas de computadores, softwares, máquinas e suas informações, contra ataques, danos ou acessos não autorizados.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe responsável pela segurança de toda tecnologia",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe responsável pela segurança de parte tecnologia",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe responsável mas não cuida da segurança",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe responsável pela segurança da tecnologia",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 3,
                "title": "Na empresa existe o controle de acesso aos dados armazenados, com níveis de responsabilidade para modificar ou excluir as informações?",
                "comment": "`Considera-se um exemplo de controle de acesso a utilização de senha individual.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe controle de acesso com níveis de responsabilidade",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe controle de acesso com alguns níveis de responsabilidade",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe controle de acesso mas sem níveis de responsabilidade",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe controle de acesso",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 4,
                "title": "A empresa efetua backups dos dados armazenados para evitar perda em caso de acidente ou proposital?",
                "comment": "`Considera-se que backup tem o significado de cópia de segurança, frequentemente utilizado para guardar arquivos em dispositivos de armazenamento.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe backup de todos os dados",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe backup de alguns dados",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe backup mas não é efetuado com frequência",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe backup dos dados",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 4,
                "title": "Existe uma política de segurança da informação para manter os softwares atualizados?",
                "comment": "`Entende-se por uma boa prática de segurança da informação, atualizar os sistemas e programas utilizados, por exemplo, manter o antivírus atualizado.`",
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe a política e todos os softwares são atualizados",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe a política e alguns softwares são atualizados",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe a política mas os softwares não são atualizados",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe uma política de segurança da informação",
                        "amount": 1
                    }
                ]
            }
        ]
    },
    {
        "_id": 5,
        "step": "Aprendizado",
        "items": [
            {
                "_id": 1,
                "title": "Os colaboradores participam de treinamento relacionado a proteção de dados pessoais?",
                "comment": null,
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe participação integral no treinamento",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe participação parcial no treinamento",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe o treinamento mas não existe participação",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe treinamento sobre proteção de dados",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 2,
                "title": "Existe a conscientização sobre proteção de dados para evitar incidentes, por exemplo, não clicar em links desconhecidos ou não manter documentos sobre a mesa de trabalho?",
                "comment": null,
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe conscientização com vários exemplos",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe conscientização com alguns exemplos",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe conscientização mas não exemplifica",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe conscientização",
                        "amount": 1
                    }
                ]
            },
            {
                "_id": 3,
                "title": "Existe treinamento para apagar dados que são manipulados ou para descarte de equipamentos (computador, tablet e celular) com segurança?",
                "comment": null,
                "multiple": false,
                "options": [
                    {
                        "_id": 1,
                        "text": "Existe treinamento para descartar dados e equipamentos",
                        "amount": 5
                    },
                    {
                        "_id": 2,
                        "text": "Existe treinamento para descartar dados e alguns equipamentos",
                        "amount": 4
                    },
                    {
                        "_id": 3,
                        "text": "Existe treinamento mas não ensina como fazer o descarte",
                        "amount": 3
                    },
                    {
                        "_id": 4,
                        "text": "A empresa está em fase de estudos para futura implementação",
                        "amount": 2
                    },
                    {
                        "_id": 5,
                        "text": "Não existe treinamento para descartar dados e equipamentos",
                        "amount": 1
                    }
                ]
            }
        ]
    }
]