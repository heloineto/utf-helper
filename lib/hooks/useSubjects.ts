import { useMemo } from 'react';

const useSubjects = () => {
  const subjects = useMemo(
    () => ({
      CC51A: {
        code: 'CC51A',
        name: 'Algoritmos',
        classes: {
          CC11: {
            vacanciesTotal: '45',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '2M4',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '5M2',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '5M2',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'L004',
              },
            ],
            professor: 'Simone Bello Kaminski Aires\n',
            optional: 'Não',
            subjectCode: 'CC51A',
            code: 'CC11',
            subjectName: 'Algoritmos',
          },
        },
      },
      CC55B: {
        code: 'CC55B',
        name: 'Análise E Projetos De Algoritmos',
        classes: {
          CC51: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '5T2',
                locationCode: 'L113',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'L113',
              },
              {
                dayTimeCode: '6T4',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '6T5',
                locationCode: 'L010',
              },
            ],
            professor: 'Sheila Morais De Almeida\n',
            optional: 'Não',
            subjectCode: 'CC55B',
            code: 'CC51',
            subjectName: 'Análise E Projetos De Algoritmos',
          },
        },
      },
      CC55D: {
        code: 'CC55D',
        name: 'Análise E Projetos Orientados A Objetos',
        classes: {
          CC51: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '6T2',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '6T3',
                locationCode: 'C202',
              },
            ],
            professor: 'Simone Nasser Matos\n',
            optional: 'Não',
            subjectCode: 'CC55D',
            code: 'CC51',
            subjectName: 'Análise E Projetos Orientados A Objetos',
          },
        },
      },
      CC53C: {
        code: 'CC53C',
        name: 'Banco De Dados 1',
        classes: {
          CC31: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '6M4',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '6M5',
                locationCode: 'C104',
              },
            ],
            professor: 'Simone De Almeida\n',
            optional: 'Não',
            subjectCode: 'CC53C',
            code: 'CC31',
            subjectName: 'Banco De Dados 1',
          },
        },
      },
      CC37W: {
        code: 'CC37W',
        name: 'Banco De Dados 2',
        classes: {
          OPTC: {
            vacanciesTotal: '10',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'C102',
              },
            ],
            professor: 'Tarcizio Alexandre Bini\n',
            optional: 'Curso De Bacharelado Em Ciência Da Computação.\n',
            subjectCode: 'CC37W',
            code: 'OPTC',
            subjectName: 'Banco De Dados 2',
          },
        },
      },
      CC52B: {
        code: 'CC52B',
        name: 'Circuitos Digitais',
        classes: {
          CC21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '3T2',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '4T2',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'L010',
              },
            ],
            professor: 'Joaquim De Mira Junior\n',
            optional: 'Não',
            subjectCode: 'CC52B',
            code: 'CC21',
            subjectName: 'Circuitos Digitais',
          },
        },
      },
      CC55A: {
        code: 'CC55A',
        name: 'Compiladores',
        classes: {
          CC51: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '2T2',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L109',
              },
            ],
            professor: 'Gleifer Vaz Alves\n',
            optional: 'Não',
            subjectCode: 'CC55A',
            code: 'CC51',
            subjectName: 'Compiladores',
          },
        },
      },
      CC54E: {
        code: 'CC54E',
        name: 'Computação Gráfica',
        classes: {
          CC41: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4M4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'L108',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L108',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'C203',
              },
            ],
            professor: 'Mauren Louise Sguario Coelho De Andrade\n',
            optional: 'Não',
            subjectCode: 'CC54E',
            code: 'CC41',
            subjectName: 'Computação Gráfica',
          },
        },
      },
      BP31B: {
        code: 'BP31B',
        name: 'Comunicação Linguística',
        classes: {
          BP11: {
            vacanciesTotal: '51',
            vacanciesFreshman: '44',
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '3T4',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'L003',
              },
            ],
            professor: 'Isabel Ribeiro Gravonski\n',
            optional: 'Não',
            subjectCode: 'BP31B',
            code: 'BP11',
            subjectName: 'Comunicação Linguística',
          },
        },
      },
      CC51E: {
        code: 'CC51E',
        name: 'Comunicação Linguística',
        classes: {
          CC11: {
            vacanciesTotal: '45',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4T4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'L001',
              },
            ],
            professor: 'Isabel Ribeiro Gravonski\nMariza Perobelli\n',
            optional: 'Não',
            subjectCode: 'CC51E',
            code: 'CC11',
            subjectName: 'Comunicação Linguística',
          },
        },
      },
      QM31D: {
        code: 'QM31D',
        name: 'Comunicação Oral E Escrita',
        classes: {
          AE141: {
            vacanciesTotal: '48',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n',
            schedule: [
              {
                dayTimeCode: '3T2',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '3T2',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'L004',
              },
            ],
            professor: 'Isabel Ribeiro Gravonski\nMariza Perobelli\n',
            optional: 'Não',
            subjectCode: 'QM31D',
            code: 'AE141',
            subjectName: 'Comunicação Oral E Escrita',
          },
        },
      },
      BP31A: {
        code: 'BP31A',
        name: 'Cálculo Diferencial E Integral 1',
        classes: {
          BP11: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Sem Reserva',
            priorityMajors:
              '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n',
            schedule: [
              {
                dayTimeCode: '3M3',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L006',
              },
            ],
            professor: 'Ana Paula Milanez\n',
            optional: 'Não',
            subjectCode: 'BP31A',
            code: 'BP11',
            subjectName: 'Cálculo Diferencial E Integral 1',
          },
          EAD: {
            vacanciesTotal: '110',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia Eletrônica\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '',
                locationCode: '',
              },
            ],
            professor: 'Thiago Gilberto Do Prado\n',
            optional: 'Não',
            subjectCode: 'BP31A',
            code: 'EAD',
            subjectName: 'Cálculo Diferencial E Integral 1',
          },
        },
      },
      CC51C: {
        code: 'CC51C',
        name: 'Cálculo Diferencial E Integral 1',
        classes: {
          CC11: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Ciência Da Computação\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '3M1',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '3M2',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4T1',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4T2',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'L012',
              },
            ],
            professor: 'Maria Claudia Aguitoni\n',
            optional: 'Não',
            subjectCode: 'CC51C',
            code: 'CC11',
            subjectName: 'Cálculo Diferencial E Integral 1',
          },
        },
      },
      EN31A: {
        code: 'EN31A',
        name: 'Cálculo Diferencial E Integral 1',
        classes: {
          EE11: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Eletrônica\n1 - Engenharia Elétrica\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L001',
              },
            ],
            professor: 'David Alexander Chipana Mollinedo\n',
            optional: 'Não',
            subjectCode: 'EN31A',
            code: 'EE11',
            subjectName: 'Cálculo Diferencial E Integral 1',
          },
        },
      },
      EP31A: {
        code: 'EP31A',
        name: 'Cálculo Diferencial E Integral 1',
        classes: {
          PE141: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia De Produção\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '3M4',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '3M6',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '4M1',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '4M2',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'L109',
              },
            ],
            professor: 'Maria Claudia Aguitoni\n',
            optional: 'Não',
            subjectCode: 'EP31A',
            code: 'PE141',
            subjectName: 'Cálculo Diferencial E Integral 1',
          },
        },
      },
      QM31E: {
        code: 'QM31E',
        name: 'Cálculo Diferencial E Integral 1',
        classes: {
          AE141: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '2T3',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '2T4',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L112',
              },
            ],
            professor: 'Thiago Gilberto Do Prado\n',
            optional: 'Não',
            subjectCode: 'QM31E',
            code: 'AE141',
            subjectName: 'Cálculo Diferencial E Integral 1',
          },
        },
      },
      BP32A: {
        code: 'BP32A',
        name: 'Cálculo Diferencial E Integral 2',
        classes: {
          BP21: {
            vacanciesTotal: '90',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors:
              '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '4M4',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '5T2',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'L005',
              },
            ],
            professor: 'Jose Carlos Alberto De Pontes\n',
            optional: 'Não',
            subjectCode: 'BP32A',
            code: 'BP21',
            subjectName: 'Cálculo Diferencial E Integral 2',
          },
        },
      },
      CC52E: {
        code: 'CC52E',
        name: 'Cálculo Diferencial E Integral 2',
        classes: {
          CC21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Ciência Da Computação\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '3M2',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '4M2',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'L012',
              },
            ],
            professor: 'Jussara Rodrigues Ciappina\n',
            optional: 'Não',
            subjectCode: 'CC52E',
            code: 'CC21',
            subjectName: 'Cálculo Diferencial E Integral 2',
          },
        },
      },
      EP32A: {
        code: 'EP32A',
        name: 'Cálculo Diferencial E Integral 2',
        classes: {
          PE241: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '3T4',
                locationCode: 'L110',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'L110',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'L104',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'L104',
              },
            ],
            professor: 'Ednei Felix Reis\n',
            optional: 'Não',
            subjectCode: 'EP32A',
            code: 'PE241',
            subjectName: 'Cálculo Diferencial E Integral 2',
          },
        },
      },
      QM32B: {
        code: 'QM32B',
        name: 'Cálculo Diferencial E Integral 2',
        classes: {
          AE241: {
            vacanciesTotal: '68',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '3M1',
                locationCode: 'L108',
              },
              {
                dayTimeCode: '3M2',
                locationCode: 'L108',
              },
              {
                dayTimeCode: '4M2',
                locationCode: 'L103',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'L103',
              },
            ],
            professor: 'Jose Carlos Alberto De Pontes\n',
            optional: 'Não',
            subjectCode: 'QM32B',
            code: 'AE241',
            subjectName: 'Cálculo Diferencial E Integral 2',
          },
        },
      },
      BP34A: {
        code: 'BP34A',
        name: 'Cálculo Numérico',
        classes: {
          BP41: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '3T2',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4T2',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '4T2',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'L004',
              },
            ],
            professor: 'Yara De Souza Tadano\n',
            optional: 'Não',
            subjectCode: 'BP34A',
            code: 'BP41',
            subjectName: 'Cálculo Numérico',
          },
        },
      },
      EP35A: {
        code: 'EP35A',
        name: 'Cálculo Numérico',
        classes: {
          PE541: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'K107',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'K107',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'LABOSP1',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'LABOSP1',
              },
            ],
            professor: 'Angelo Marcelo Tusset\n',
            optional: 'Não',
            subjectCode: 'EP35A',
            code: 'PE541',
            subjectName: 'Cálculo Numérico',
          },
        },
      },
      QM34A: {
        code: 'QM34A',
        name: 'Cálculo Numérico',
        classes: {
          AE441: {
            vacanciesTotal: '50',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2T3',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '2T4',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '3T4',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '3T4',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'L012',
              },
            ],
            professor: 'Yara De Souza Tadano\n',
            optional: 'Não',
            subjectCode: 'QM34A',
            code: 'AE441',
            subjectName: 'Cálculo Numérico',
          },
        },
      },
      CC53E: {
        code: 'CC53E',
        name: 'Cálculo Númerico',
        classes: {
          CC31: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'C202',
              },
            ],
            professor: 'Iara Da Cunha Ribeiro Da Silva\n',
            optional: 'Não',
            subjectCode: 'CC53E',
            code: 'CC31',
            subjectName: 'Cálculo Númerico',
          },
        },
      },
      PG0001: {
        code: 'PG0001',
        name: 'Cálculo Diferencial E Integral 1',
        classes: {
          EM11: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '4M4',
                locationCode: 'L111',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L111',
              },
              {
                dayTimeCode: '5M2',
                locationCode: 'L111',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'L111',
              },
              {
                dayTimeCode: '6M2',
                locationCode: 'L111',
              },
              {
                dayTimeCode: '6M3',
                locationCode: 'L111',
              },
            ],
            professor: 'Reginaldo De Oliveira\n',
            optional: 'Não',
            subjectCode: 'PG0001',
            code: 'EM11',
            subjectName: 'Cálculo Diferencial E Integral 1',
          },
        },
      },
      PG0008: {
        code: 'PG0008',
        name: 'Cálculo Diferencial E Integral 2',
        classes: {
          EM21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'CT01',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'CT01',
              },
              {
                dayTimeCode: '4M2',
                locationCode: 'CT01',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'CT01',
              },
            ],
            professor: 'Sani De Carvalho Rutz Da Silva\n',
            optional: 'Não',
            subjectCode: 'PG0008',
            code: 'EM21',
            subjectName: 'Cálculo Diferencial E Integral 2',
          },
        },
      },
      PG0025: {
        code: 'PG0025',
        name: 'Cálculo Numérico E Aplicações Na Engenharia',
        classes: {
          EM41: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'K107',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'K107',
              },
              {
                dayTimeCode: '4T2',
                locationCode: 'LABOSP1',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'LABOSP1',
              },
            ],
            professor: 'Iara Da Cunha Ribeiro Da Silva\n',
            optional: 'Não',
            subjectCode: 'PG0025',
            code: 'EM41',
            subjectName: 'Cálculo Numérico E Aplicações Na Engenharia',
          },
        },
      },
      EP33H: {
        code: 'EP33H',
        name: 'Economia',
        classes: {
          PE341: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Engenharia De Produção\n2 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4M2',
                locationCode: 'K104',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'K104',
              },
            ],
            professor: 'Regina Negri Pagani\n',
            optional: 'Não',
            subjectCode: 'EP33H',
            code: 'PE341',
            subjectName: 'Economia',
          },
        },
      },
      CC56D: {
        code: 'CC56D',
        name: 'Empreendedorismo',
        classes: {
          CC61: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '3T2',
                locationCode: 'LABOSP2',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'LABOSP2',
              },
            ],
            professor: 'Eliane Fernandes Pietrovski\n',
            optional: 'Não',
            subjectCode: 'CC56D',
            code: 'CC61',
            subjectName: 'Empreendedorismo',
          },
        },
      },
      QM38F: {
        code: 'QM38F',
        name: 'Empreendedorismo',
        classes: {
          AE841: {
            vacanciesTotal: '50',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'L002',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'L002',
              },
            ],
            professor: 'Nelson Ari Canabarro De Oliveira\n',
            optional: 'Não',
            subjectCode: 'QM38F',
            code: 'AE841',
            subjectName: 'Empreendedorismo',
          },
        },
      },
      CC53D: {
        code: 'CC53D',
        name: 'Engenharia De Software 1',
        classes: {
          CC31: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '3M2',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '3M2',
                locationCode: 'C103',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'C103',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '6M2',
                locationCode: 'C103',
              },
              {
                dayTimeCode: '6M3',
                locationCode: 'C103',
              },
            ],
            professor: 'Eliana Claudia Mayumi Ishikawa\n',
            optional: 'Não',
            subjectCode: 'CC53D',
            code: 'CC31',
            subjectName: 'Engenharia De Software 1',
          },
        },
      },
      CC52A: {
        code: 'CC52A',
        name: 'Estrutura De Dados 1',
        classes: {
          CC21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '2T2',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'C102',
              },
            ],
            professor: 'Simone Bello Kaminski Aires\n',
            optional: 'Não',
            subjectCode: 'CC52A',
            code: 'CC21',
            subjectName: 'Estrutura De Dados 1',
          },
        },
      },
      CC53A: {
        code: 'CC53A',
        name: 'Estrutura De Dados 2',
        classes: {
          CC31: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '3M4',
                locationCode: 'L103',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L103',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'C104',
              },
            ],
            professor: 'Saulo Jorge Beltrao De Queiroz\n',
            optional: 'Não',
            subjectCode: 'CC53A',
            code: 'CC31',
            subjectName: 'Estrutura De Dados 2',
          },
        },
      },
      BP05F: {
        code: 'BP05F',
        name: 'Filosofia Da Ciência E Da Tecnologia',
        classes: {
          OPBT: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '3T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'L004',
              },
            ],
            professor: 'Edson Jacinski\n',
            optional: 'Engenharia De Bioprocessos E Biotecnologia\n',
            subjectCode: 'BP05F',
            code: 'OPBT',
            subjectName: 'Filosofia Da Ciência E Da Tecnologia',
          },
        },
      },
      BP32F: {
        code: 'BP32F',
        name: 'Geometria Analítica E Álgebra Linear',
        classes: {
          BP21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'L104',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'L104',
              },
              {
                dayTimeCode: '3T4',
                locationCode: 'L104',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'L104',
              },
              {
                dayTimeCode: '5T4',
                locationCode: 'L104',
              },
              {
                dayTimeCode: '5T5',
                locationCode: 'L104',
              },
            ],
            professor: 'Taiza Alissul Sauer Do Carmo\n',
            optional: 'Não',
            subjectCode: 'BP32F',
            code: 'BP21',
            subjectName: 'Geometria Analítica E Álgebra Linear',
          },
          RE42: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '2N1',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2N2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T6',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3N1',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3N2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T6',
                locationCode: 'Z001',
              },
            ],
            professor: 'Iara Da Cunha Ribeiro Da Silva\n',
            optional: 'Não',
            subjectCode: 'BP32F',
            code: 'RE42',
            subjectName: 'Geometria Analítica E Álgebra Linear',
          },
        },
      },
      CC51D: {
        code: 'CC51D',
        name: 'Geometria Analítica E Álgebra Linear',
        classes: {
          CC11: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Ciência Da Computação\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'L-013',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L-013',
              },
              {
                dayTimeCode: '3T2',
                locationCode: 'L-013',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'L-013',
              },
              {
                dayTimeCode: '5T2',
                locationCode: 'L-013',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'L-013',
              },
            ],
            professor: 'Taiza Alissul Sauer Do Carmo\n',
            optional: 'Não',
            subjectCode: 'CC51D',
            code: 'CC11',
            subjectName: 'Geometria Analítica E Álgebra Linear',
          },
        },
      },
      EN31D: {
        code: 'EN31D',
        name: 'Geometria Analítica E Álgebra Linear',
        classes: {
          EE11: {
            vacanciesTotal: '68',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Eletrônica\n1 - Engenharia Elétrica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '3M2',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'L008',
              },
            ],
            professor: 'Marcos Cesar Verges\n',
            optional: 'Não',
            subjectCode: 'EN31D',
            code: 'EE11',
            subjectName: 'Geometria Analítica E Álgebra Linear',
          },
        },
      },
      EP31D: {
        code: 'EP31D',
        name: 'Geometria Analítica E Álgebra Linear',
        classes: {
          PE141: {
            vacanciesTotal: '58',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L112',
              },
            ],
            professor: 'Nilceia Aparecida Maciel Pinheiro\n',
            optional: 'Não',
            subjectCode: 'EP31D',
            code: 'PE141',
            subjectName: 'Geometria Analítica E Álgebra Linear',
          },
        },
      },
      QM31B: {
        code: 'QM31B',
        name: 'Geometria Analítica E Álgebra Linear',
        classes: {
          AE141: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '2T1',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '2T2',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '5T2',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'L012',
              },
            ],
            professor: 'Ana Paula Milanez\n',
            optional: 'Não',
            subjectCode: 'QM31B',
            code: 'AE141',
            subjectName: 'Geometria Analítica E Álgebra Linear',
          },
        },
      },
      PG0002: {
        code: 'PG0002',
        name: 'Geometria Analítica E Álgebra Linear',
        classes: {
          EM11: {
            vacanciesTotal: '50',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'L106',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L106',
              },
              {
                dayTimeCode: '4M2',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'L111',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L111',
              },
            ],
            professor: 'David Alexander Chipana Mollinedo\n',
            optional: 'Não',
            subjectCode: 'PG0002',
            code: 'EM11',
            subjectName: 'Geometria Analítica E Álgebra Linear',
          },
        },
      },
      CC56A: {
        code: 'CC56A',
        name: 'Inteligência Artificial',
        classes: {
          CC61: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'C203',
              },
            ],
            professor: 'Helyane Bronoski Borges\n',
            optional: 'Não',
            subjectCode: 'CC56A',
            code: 'CC61',
            subjectName: 'Inteligência Artificial',
          },
        },
      },
      CC55E: {
        code: 'CC55E',
        name: 'Interação Humano-Computador',
        classes: {
          CC51: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'C202',
              },
            ],
            professor: 'Geraldo Ranthum\n',
            optional: 'Não',
            subjectCode: 'CC55E',
            code: 'CC51',
            subjectName: 'Interação Humano-Computador',
          },
        },
      },
      EP34A: {
        code: 'EP34A',
        name: 'Introdução À Administração',
        classes: {
          PE441: {
            vacanciesTotal: '50',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia De Produção\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '6T2',
                locationCode: 'LABOSP3',
              },
              {
                dayTimeCode: '6T3',
                locationCode: 'LABOSP3',
              },
            ],
            professor: 'Claudia Tania Picinin\n',
            optional: 'Não',
            subjectCode: 'EP34A',
            code: 'PE441',
            subjectName: 'Introdução À Administração',
          },
        },
      },
      CC52D: {
        code: 'CC52D',
        name: 'Laboratório De Estrutura De Dados',
        classes: {
          CC21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '5M4',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'C102',
              },
            ],
            professor: 'Simone Bello Kaminski Aires\n',
            optional: 'Não',
            subjectCode: 'CC52D',
            code: 'CC21',
            subjectName: 'Laboratório De Estrutura De Dados',
          },
        },
      },
      CC38L: {
        code: 'CC38L',
        name: 'Libras',
        classes: {
          OPTHA: {
            vacanciesTotal: '30',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '3T2',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'L105',
              },
            ],
            professor: 'Luiz Andre Brito Coelho\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\nBacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC38L',
            code: 'OPTHA',
            subjectName: 'Libras',
          },
          OPTHB: {
            vacanciesTotal: '30',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '4M4',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L004',
              },
            ],
            professor: 'Luiz Andre Brito Coelho\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\nBacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC38L',
            code: 'OPTHB',
            subjectName: 'Libras',
          },
        },
      },
      CC54A: {
        code: 'CC54A',
        name: 'Linguagens Formais, Autômatos',
        classes: {
          CC41: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '3M4',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '5T4',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '5T5',
                locationCode: 'L004',
              },
            ],
            professor: 'Gleifer Vaz Alves\n',
            optional: 'Não',
            subjectCode: 'CC54A',
            code: 'CC41',
            subjectName: 'Linguagens Formais, Autômatos',
          },
        },
      },
      CC52C: {
        code: 'CC52C',
        name: 'Lógica Para Computação',
        classes: {
          CC21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'C203',
              },
            ],
            professor: 'Gleifer Vaz Alves\n',
            optional: 'Não',
            subjectCode: 'CC52C',
            code: 'CC21',
            subjectName: 'Lógica Para Computação',
          },
        },
      },
      CC51B: {
        code: 'CC51B',
        name: 'Matemática Discreta',
        classes: {
          CC11: {
            vacanciesTotal: '45',
            vacanciesFreshman: '44',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4M2',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '6M4',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '6M5',
                locationCode: 'L008',
              },
            ],
            professor: 'Sheila Morais De Almeida\n',
            optional: 'Não',
            subjectCode: 'CC51B',
            code: 'CC11',
            subjectName: 'Matemática Discreta',
          },
          CCRE: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '7M2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '7M3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '7M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '7M5',
                locationCode: 'Z001',
              },
            ],
            professor: 'Sheila Morais De Almeida\n',
            optional: 'Não',
            subjectCode: 'CC51B',
            code: 'CCRE',
            subjectName: 'Matemática Discreta',
          },
        },
      },
      BP35H: {
        code: 'BP35H',
        name: 'Metodologia Da Pesquisa',
        classes: {
          BP51: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'K102',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'K102',
              },
            ],
            professor: 'Antonio Carlos Frasson\n',
            optional: 'Não',
            subjectCode: 'BP35H',
            code: 'BP51',
            subjectName: 'Metodologia Da Pesquisa',
          },
        },
      },
      CC56B: {
        code: 'CC56B',
        name: 'Metodologia Da Pesquisa',
        classes: {
          CC61: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'C203',
              },
            ],
            professor: 'Helyane Bronoski Borges\n',
            optional: 'Não',
            subjectCode: 'CC56B',
            code: 'CC61',
            subjectName: 'Metodologia Da Pesquisa',
          },
        },
      },
      EP33G: {
        code: 'EP33G',
        name: 'Metodologia Da Pesquisa',
        classes: {
          PE341: {
            vacanciesTotal: '47',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'L112',
              },
            ],
            professor: 'Jose Alves De Faria Filho\n',
            optional: 'Não',
            subjectCode: 'EP33G',
            code: 'PE341',
            subjectName: 'Metodologia Da Pesquisa',
          },
        },
      },
      CC53B: {
        code: 'CC53B',
        name: 'Organização De Computadores',
        classes: {
          CC31: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '6T4',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '6T5',
                locationCode: 'L105',
              },
            ],
            professor: 'Erikson Freitas De Morais\n',
            optional: 'Não',
            subjectCode: 'CC53B',
            code: 'CC31',
            subjectName: 'Organização De Computadores',
          },
        },
      },
      BP33G: {
        code: 'BP33G',
        name: 'Probabilidade E Estatística',
        classes: {
          BP31: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n',
            schedule: [
              {
                dayTimeCode: '5M4',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '6M4',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '6M5',
                locationCode: 'L102',
              },
            ],
            professor: 'Marcos Tadeu Andrade Cordeiro\n',
            optional: 'Não',
            subjectCode: 'BP33G',
            code: 'BP31',
            subjectName: 'Probabilidade E Estatística',
          },
        },
      },
      CC52F: {
        code: 'CC52F',
        name: 'Probabilidade E Estatística',
        classes: {
          CC21: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '5M2',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '6T4',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '6T5',
                locationCode: 'L102',
              },
            ],
            professor: 'Marcos Tadeu Andrade Cordeiro\n',
            optional: 'Não',
            subjectCode: 'CC52F',
            code: 'CC21',
            subjectName: 'Probabilidade E Estatística',
          },
        },
      },
      EP32D: {
        code: 'EP32D',
        name: 'Probabilidade E Estatística',
        classes: {
          PE241: {
            vacanciesTotal: '49',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'L107',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'L107',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'L107',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L107',
              },
            ],
            professor: 'Guatacara Dos Santos Junior\n',
            optional: 'Não',
            subjectCode: 'EP32D',
            code: 'PE241',
            subjectName: 'Probabilidade E Estatística',
          },
        },
      },
      QM35E: {
        code: 'QM35E',
        name: 'Probabilidade E Estatística',
        classes: {
          AE541: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '5T2',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'L102',
              },
            ],
            professor: 'Guatacara Dos Santos Junior\n',
            optional: 'Não',
            subjectCode: 'QM35E',
            code: 'AE541',
            subjectName: 'Probabilidade E Estatística',
          },
        },
      },
      CC35C: {
        code: 'CC35C',
        name: 'Programação De Aplicativos',
        classes: {
          OPTC: {
            vacanciesTotal: '20',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '6M2',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '6M3',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '6M4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '6M5',
                locationCode: 'C203',
              },
            ],
            professor: 'Monica Hoeldtke Pietruchinski\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC35C',
            code: 'OPTC',
            subjectName: 'Programação De Aplicativos',
          },
        },
      },
      CC37X: {
        code: 'CC37X',
        name: 'Programação De Dispositivos Móveis',
        classes: {
          OPTC: {
            vacanciesTotal: '16',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T5',
                locationCode: 'Z001',
              },
            ],
            professor: 'Diego Roberto Antunes\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\nBacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC37X',
            code: 'OPTC',
            subjectName: 'Programação De Dispositivos Móveis',
          },
        },
      },
      CC54D: {
        code: 'CC54D',
        name: 'Programação Orientada A Objetos',
        classes: {
          CC41: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '5M2',
                locationCode: 'C103',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'C103',
              },
            ],
            professor: 'Vinicius Camargo Andrade\n',
            optional: 'Não',
            subjectCode: 'CC54D',
            code: 'CC41',
            subjectName: 'Programação Orientada A Objetos',
          },
        },
      },
      PG0009: {
        code: 'PG0009',
        name: 'Probabilidade E Estatística',
        classes: {
          EM21: {
            vacanciesTotal: '77',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '6M2',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '6M3',
                locationCode: 'L004',
              },
            ],
            professor: 'Marcos Tadeu Andrade Cordeiro\n',
            optional: 'Não',
            subjectCode: 'PG0009',
            code: 'EM21',
            subjectName: 'Probabilidade E Estatística',
          },
        },
      },
      ET05A: {
        code: 'ET05A',
        name: 'Qualidade De Vida',
        classes: {
          OPTHA: {
            vacanciesTotal: '23',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'L112',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'L112',
              },
            ],
            professor: 'Adriana Aparecida Guimaraes\n',
            optional: 'Engenharia Eletrônica\n',
            subjectCode: 'ET05A',
            code: 'OPTHA',
            subjectName: 'Qualidade De Vida',
          },
          OPTHB: {
            vacanciesTotal: '20',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '3M2',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L001',
              },
            ],
            professor: 'Adriana Aparecida Guimaraes\n',
            optional: 'Engenharia Eletrônica\n',
            subjectCode: 'ET05A',
            code: 'OPTHB',
            subjectName: 'Qualidade De Vida',
          },
          OPTHC: {
            vacanciesTotal: '20',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '3M4',
                locationCode: 'L007',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L007',
              },
            ],
            professor: 'Adriana Aparecida Guimaraes\n',
            optional: 'Engenharia Eletrônica\n',
            subjectCode: 'ET05A',
            code: 'OPTHC',
            subjectName: 'Qualidade De Vida',
          },
          OPTHD: {
            vacanciesTotal: '20',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'L113',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L113',
              },
            ],
            professor: 'Adriana Aparecida Guimaraes\n',
            optional: 'Engenharia Eletrônica\n',
            subjectCode: 'ET05A',
            code: 'OPTHD',
            subjectName: 'Qualidade De Vida',
          },
          OPTHE: {
            vacanciesTotal: '20',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '4M2',
                locationCode: 'GINÁSIO',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'GINÁSIO',
              },
            ],
            professor: 'Adriana Aparecida Guimaraes\n',
            optional: 'Engenharia Eletrônica\n',
            subjectCode: 'ET05A',
            code: 'OPTHE',
            subjectName: 'Qualidade De Vida',
          },
        },
      },
      CC55C: {
        code: 'CC55C',
        name: 'Redes De Computadores 1',
        classes: {
          CC51: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '3M2',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'C203',
              },
            ],
            professor: 'Augusto Foronda\n',
            optional: 'Não',
            subjectCode: 'CC55C',
            code: 'CC51',
            subjectName: 'Redes De Computadores 1',
          },
        },
      },
      CC37Z: {
        code: 'CC37Z',
        name: 'Redes De Computadores 2',
        classes: {
          OPTC: {
            vacanciesTotal: '18',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M5',
                locationCode: 'C207',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'C207',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'C207',
              },
            ],
            professor: 'Lourival Aparecido De Gois\n',
            optional: 'Curso De Bacharelado Em Ciência Da Computação.\n',
            subjectCode: 'CC37Z',
            code: 'OPTC',
            subjectName: 'Redes De Computadores 2',
          },
        },
      },
      CC56C: {
        code: 'CC56C',
        name: 'Sistemas Distribuidos',
        classes: {
          CC61: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '5T2',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'C104',
              },
            ],
            professor: 'Richard Duarte Ribeiro\n',
            optional: 'Não',
            subjectCode: 'CC56C',
            code: 'CC61',
            subjectName: 'Sistemas Distribuidos',
          },
        },
      },
      CC54C: {
        code: 'CC54C',
        name: 'Sistemas Microcontrolados',
        classes: {
          CC41: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'V1-102',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'V1-102',
              },
              {
                dayTimeCode: '4T2',
                locationCode: 'V1-102',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'V1-102',
              },
            ],
            professor: 'Cristhiane Goncalves\n',
            optional: 'Não',
            subjectCode: 'CC54C',
            code: 'CC41',
            subjectName: 'Sistemas Microcontrolados',
          },
        },
      },
      CC54B: {
        code: 'CC54B',
        name: 'Sistemas Operacionais',
        classes: {
          CC41: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '6T4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '6T5',
                locationCode: 'L001',
              },
            ],
            professor: 'Andre Koscianski\n',
            optional: 'Não',
            subjectCode: 'CC54B',
            code: 'CC41',
            subjectName: 'Sistemas Operacionais',
          },
        },
      },
      CC57A: {
        code: 'CC57A',
        name: 'Trabalho De Conclusão De Curso 1',
        classes: {
          CC71: {
            vacanciesTotal: '21',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'C207',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'C207',
              },
            ],
            professor: 'Helyane Bronoski Borges\n',
            optional: 'Não',
            subjectCode: 'CC57A',
            code: 'CC71',
            subjectName: 'Trabalho De Conclusão De Curso 1',
          },
        },
      },
      CC38A: {
        code: 'CC38A',
        name: 'Trabalho De Conclusão De Curso 2',
        classes: {
          IB841: {
            vacanciesTotal: '99',
            vacanciesFreshman: '0',
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: ' ',
                locationCode: '',
              },
            ],
            professor: 'Helyane Bronoski Borges\n',
            optional: 'Não',
            subjectCode: 'CC38A',
            code: 'IB841',
            subjectName: 'Trabalho De Conclusão De Curso 2',
          },
        },
      },
      CC39B: {
        code: 'CC39B',
        name: 'Tópicos Em Engenharia De Software',
        classes: {
          OPTC: {
            vacanciesTotal: '10',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M1',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2M2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2M4',
                locationCode: 'Z001',
              },
            ],
            professor: 'Simone Nasser Matos\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC39B',
            code: 'OPTC',
            subjectName: 'Tópicos Em Engenharia De Software',
          },
        },
      },
      CC39C: {
        code: 'CC39C',
        name: 'Tópicos Em Inteligência Artificial',
        classes: {
          OPTC: {
            vacanciesTotal: '10',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '3T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T5',
                locationCode: 'Z001',
              },
            ],
            professor: 'Hugo Valadares Siqueira\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC39C',
            code: 'OPTC',
            subjectName: 'Tópicos Em Inteligência Artificial',
          },
        },
      },
      CC02U: {
        code: 'CC02U',
        name: 'Tópicos Em Programação 1',
        classes: {
          OPTC: {
            vacanciesTotal: '10',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'Z001',
              },
            ],
            professor: 'Luiz Rafael Schmitke\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação\nCurso De Bacharelado Em Ciência Da Computação.\n',
            subjectCode: 'CC02U',
            code: 'OPTC',
            subjectName: 'Tópicos Em Programação 1',
          },
        },
      },
      CC39J: {
        code: 'CC39J',
        name: 'Tópicos Em Redes Sem Fio',
        classes: {
          OPTC: {
            vacanciesTotal: '10',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'Z001',
              },
            ],
            professor: 'Saulo Jorge Beltrao De Queiroz\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC39J',
            code: 'OPTC',
            subjectName: 'Tópicos Em Redes Sem Fio',
          },
        },
      },
      CC02X: {
        code: 'CC02X',
        name: 'Visão Computacional',
        classes: {
          OPTC: {
            vacanciesTotal: '10',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '6T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '6T3',
                locationCode: 'Z001',
              },
            ],
            professor: 'Erikson Freitas De Morais\n',
            optional:
              'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
            subjectCode: 'CC02X',
            code: 'OPTC',
            subjectName: 'Visão Computacional',
          },
        },
      },
      CC53F: {
        code: 'CC53F',
        name: 'Ética Profissão E Cidadania',
        classes: {
          CC31: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação\n',
            schedule: [
              {
                dayTimeCode: '5T4',
                locationCode: 'L005',
              },
              {
                dayTimeCode: '5T5',
                locationCode: 'L005',
              },
            ],
            professor: 'Katya Cristina De Lima Picanco\n',
            optional: 'Não',
            subjectCode: 'CC53F',
            code: 'CC31',
            subjectName: 'Ética Profissão E Cidadania',
          },
        },
      },
      PG0039: {
        code: 'PG0039',
        name: 'Ética, Profissão E Cidadania',
        classes: {
          EM51: {
            vacanciesTotal: '44',
            vacanciesFreshman: '0',
            reservationType: 'Fechada',
            priorityMajors:
              '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'K106',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'K106',
              },
            ],
            professor: 'Katya Cristina De Lima Picanco\n',
            optional: 'Não',
            subjectCode: 'PG0039',
            code: 'EM51',
            subjectName: 'Ética, Profissão E Cidadania',
          },
        },
      },
    }),
    []
  );

  return subjects;
};

export default useSubjects;
