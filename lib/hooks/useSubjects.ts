import { useMemo } from 'react';

const useSubjects = () => {
  const subjects = useMemo(
    () => ({
      CC51A: {
        code: 'CC51A',
        name: 'Algoritmos',
        weeklyLessons: 6,
        classes: {
          CC11: {
            subjectCode: 'CC51A',
            subjectName: 'Algoritmos',
            code: 'CC11',
            framing: 'H',
            vacanciesTotal: 38,
            vacanciesFreshman: 38,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '2M4',
                locationCode: 'C102',
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
                locationCode: 'L004',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'C102',
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
            teacher: 'Simone Bello Kaminski Aires',
            optional: 'Não',
          },
          RE42: {
            subjectCode: 'CC51A',
            subjectName: 'Algoritmos',
            code: 'RE42',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '',
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
                dayTimeCode: '3M4',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '6M2',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '6M3',
                locationCode: 'L012',
              },
            ],
            teacher: 'Joao Paulo Aires',
            optional: 'Não',
          },
        },
      },
      CC55B: {
        code: 'CC55B',
        name: 'Análise E Projetos De Algoritmos',
        weeklyLessons: 4,
        classes: {
          CC51: {
            subjectCode: 'CC55B',
            subjectName: 'Análise E Projetos De Algoritmos',
            code: 'CC51',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '4T4',
                locationCode: 'L113',
              },
              {
                dayTimeCode: '4T5',
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
            teacher: 'Sheila Morais De Almeida',
            optional: 'Não',
          },
        },
      },
      CC55D: {
        code: 'CC55D',
        name: 'Análise E Projetos Orientados A Objetos',
        weeklyLessons: 4,
        classes: {
          CC51: {
            subjectCode: 'CC55D',
            subjectName: 'Análise E Projetos Orientados A Objetos',
            code: 'CC51',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Simone Nasser Matos',
            optional: 'Não',
          },
        },
      },
      CC53C: {
        code: 'CC53C',
        name: 'Banco De Dados 1',
        weeklyLessons: 4,
        classes: {
          CC31: {
            subjectCode: 'CC53C',
            subjectName: 'Banco De Dados 1',
            code: 'CC31',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Simone De Almeida',
            optional: 'Não',
          },
        },
      },
      CC37W: {
        code: 'CC37W',
        name: 'Banco De Dados 2',
        weeklyLessons: 4,
        classes: {
          OPTCC: {
            subjectCode: 'CC37W',
            subjectName: 'Banco De Dados 2',
            code: 'OPTCC',
            framing: 'P',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação2 - Tecnol. Análise D.Sist',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '6T2',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '6T3',
                locationCode: 'C102',
              },
            ],
            teacher: 'Tarcizio Alexandre Bini',
            optional: 'Curso De Bacharelado Em Ciência Da Computação.',
          },
        },
      },
      BP31A: {
        code: 'BP31A',
        name: 'Cálculo Diferencial E Integral 1',
        weeklyLessons: 6,
        classes: {
          BP11: {
            subjectCode: 'BP31A',
            subjectName: 'Cálculo Diferencial E Integral 1',
            code: 'BP11',
            framing: 'R',
            vacanciesTotal: 28,
            vacanciesFreshman: 22,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Eng Bioproc E Biotec2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia Eletrônica2 -\n        Engenharia De Produção\n      ',
            schedule: [
              {
                dayTimeCode: '3M3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Ana Paula Milanez',
            optional: 'Não',
          },
        },
      },
      CC51C: {
        code: 'CC51C',
        name: 'Cálculo Diferencial E Integral 1',
        weeklyLessons: 6,
        classes: {
          CC11: {
            subjectCode: 'CC51C',
            subjectName: 'Cálculo Diferencial E Integral 1',
            code: 'CC11',
            framing: 'P',
            vacanciesTotal: 72,
            vacanciesFreshman: 32,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
                dayTimeCode: '4M4',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '4M6',
                locationCode: 'L012',
              },
            ],
            teacher: 'Maria Claudia Aguitoni',
            optional: 'Não',
          },
        },
      },
      EN31A: {
        code: 'EN31A',
        name: 'Cálculo Diferencial E Integral 1',
        weeklyLessons: 6,
        classes: {
          EAD: {
            subjectCode: 'EN31A',
            subjectName: 'Cálculo Diferencial E Integral 1',
            code: 'EAD',
            framing: 'P',
            vacanciesTotal: 150,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química1 - Engenharia Mecânica1 - Ciência Da\n        Computação1 - Engenharia De Produção1 - Eng Bioproc E Biotec1 -\n        Engenharia Elétrica\n      ',
            schedule: [
              {
                dayTimeCode: '',
                locationCode: '',
              },
            ],
            teacher: 'Thiago Gilberto Do Prado',
            optional: 'Não',
          },
          EE11: {
            subjectCode: 'EN31A',
            subjectName: 'Cálculo Diferencial E Integral 1',
            code: 'EE11',
            framing: 'P',
            vacanciesTotal: 36,
            vacanciesFreshman: 30,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Eletrônica1 - Engenharia Elétrica2 - Engenharia\n        Química2 - Engenharia Mecânica2 - Ciência Da Computação2 -\n        Engenharia De Produção\n      ',
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
            teacher: 'David Alexander Chipana Mollinedo',
            optional: 'Não',
          },
        },
      },
      EP31A: {
        code: 'EP31A',
        name: 'Cálculo Diferencial E Integral 1',
        weeklyLessons: 6,
        classes: {
          PE141: {
            subjectCode: 'EP31A',
            subjectName: 'Cálculo Diferencial E Integral 1',
            code: 'PE141',
            framing: 'P',
            vacanciesTotal: 45,
            vacanciesFreshman: 44,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia De Produção2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia Eletrônica2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Maria Claudia Aguitoni',
            optional: 'Não',
          },
        },
      },
      QM31E: {
        code: 'QM31E',
        name: 'Cálculo Diferencial E Integral 1',
        weeklyLessons: 6,
        classes: {
          AE141: {
            subjectCode: 'QM31E',
            subjectName: 'Cálculo Diferencial E Integral 1',
            code: 'AE141',
            framing: 'P',
            vacanciesTotal: 23,
            vacanciesFreshman: 22,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia De Produção2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Thiago Gilberto Do Prado',
            optional: 'Não',
          },
        },
      },
      PG0001: {
        code: 'PG0001',
        name: 'Cálculo Diferencial E Integral 1',
        weeklyLessons: 6,
        classes: {
          EM11: {
            subjectCode: 'PG0001',
            subjectName: 'Cálculo Diferencial E Integral 1',
            code: 'EM11',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 38,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Mecânica2 - Engenharia Química2 - Ciência Da\n        Computação2 - Engenharia Eletrônica2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
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
                dayTimeCode: '6M4',
                locationCode: 'L111',
              },
              {
                dayTimeCode: '6M5',
                locationCode: 'L111',
              },
            ],
            teacher: 'Reginaldo De Oliveira',
            optional: 'Não',
          },
        },
      },
      BP32A: {
        code: 'BP32A',
        name: 'Cálculo Diferencial E Integral 2',
        weeklyLessons: 4,
        classes: {
          BP21: {
            subjectCode: 'BP32A',
            subjectName: 'Cálculo Diferencial E Integral 2',
            code: 'BP21',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Eng Bioproc E Biotec2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia De Produção2 -\n        Engenharia Elétrica\n      ',
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
            teacher:
              '\n        Jose Carlos Alberto De PontesMarcos Tadeu Andrade Cordeiro\n      ',
            optional: 'Não',
          },
        },
      },
      CC52E: {
        code: 'CC52E',
        name: 'Cálculo Diferencial E Integral 2',
        weeklyLessons: 4,
        classes: {
          CC21: {
            subjectCode: 'CC52E',
            subjectName: 'Cálculo Diferencial E Integral 2',
            code: 'CC21',
            framing: 'P',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Ciência Da Computação2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Engenharia Eletrônica2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
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
            teacher: 'Jussara Rodrigues Ciappina',
            optional: 'Não',
          },
        },
      },
      EP32A: {
        code: 'EP32A',
        name: 'Cálculo Diferencial E Integral 2',
        weeklyLessons: 4,
        classes: {
          PE241: {
            subjectCode: 'EP32A',
            subjectName: 'Cálculo Diferencial E Integral 2',
            code: 'PE241',
            framing: 'P',
            vacanciesTotal: 38,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia De Produção2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Ednei Felix Reis',
            optional: 'Não',
          },
        },
      },
      QM32B: {
        code: 'QM32B',
        name: 'Cálculo Diferencial E Integral 2',
        weeklyLessons: 4,
        classes: {
          AE241: {
            subjectCode: 'QM32B',
            subjectName: 'Cálculo Diferencial E Integral 2',
            code: 'AE241',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia Química2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia De Produção2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
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
            teacher:
              '\n        Jose Carlos Alberto De PontesThiago Gilberto Do Prado\n      ',
            optional: 'Não',
          },
        },
      },
      PG0008: {
        code: 'PG0008',
        name: 'Cálculo Diferencial E Integral 2',
        weeklyLessons: 4,
        classes: {
          EM21: {
            subjectCode: 'PG0008',
            subjectName: 'Cálculo Diferencial E Integral 2',
            code: 'EM21',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Mecânica2 - Engenharia Química2 - Ciência Da\n        Computação2 - Engenharia De Produção2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Sani De Carvalho Rutz Da Silva',
            optional: 'Não',
          },
        },
      },
      BP34A: {
        code: 'BP34A',
        name: 'Cálculo Numérico',
        weeklyLessons: 4,
        classes: {
          BP41: {
            subjectCode: 'BP34A',
            subjectName: 'Cálculo Numérico',
            code: 'BP41',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Eng Bioproc E Biotec2 - Engenharia Elétrica',
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
            teacher: 'Yara De Souza Tadano',
            optional: 'Não',
          },
        },
      },
      EP35A: {
        code: 'EP35A',
        name: 'Cálculo Numérico',
        weeklyLessons: 4,
        classes: {
          PE541: {
            subjectCode: 'EP35A',
            subjectName: 'Cálculo Numérico',
            code: 'PE541',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia De Produção2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia Eletrônica2 -\n        Eng Bioproc E Biotec\n      ',
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
            teacher: 'Angelo Marcelo Tusset',
            optional: 'Não',
          },
        },
      },
      QM34A: {
        code: 'QM34A',
        name: 'Cálculo Numérico',
        weeklyLessons: 4,
        classes: {
          AE441: {
            subjectCode: 'QM34A',
            subjectName: 'Cálculo Numérico',
            code: 'AE441',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia Química2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia Eletrônica2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
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
                locationCode: 'L012',
              },
              {
                dayTimeCode: '3T4',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'L012',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'C202',
              },
            ],
            teacher: 'Yara De Souza Tadano',
            optional: 'Não',
          },
        },
      },
      CC53E: {
        code: 'CC53E',
        name: 'Cálculo Númerico',
        weeklyLessons: 4,
        classes: {
          CC31: {
            subjectCode: 'CC53E',
            subjectName: 'Cálculo Númerico',
            code: 'CC31',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Iara Da Cunha Ribeiro Da Silva',
            optional: 'Não',
          },
        },
      },
      PG0025: {
        code: 'PG0025',
        name: 'Cálculo Numérico E Aplicações Na Engenharia',
        weeklyLessons: 4,
        classes: {
          EM41: {
            subjectCode: 'PG0025',
            subjectName: 'Cálculo Numérico E Aplicações Na Engenharia',
            code: 'EM41',
            framing: 'H',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Mecânica2 - Engenharia Química2 - Ciência Da\n        Computação2 - Engenharia Eletrônica2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
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
            teacher: 'Iara Da Cunha Ribeiro Da Silva',
            optional: 'Não',
          },
        },
      },
      CC52B: {
        code: 'CC52B',
        name: 'Circuitos Digitais',
        weeklyLessons: 4,
        classes: {
          CC21: {
            subjectCode: 'CC52B',
            subjectName: 'Circuitos Digitais',
            code: 'CC21',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Joaquim De Mira Junior',
            optional: 'Não',
          },
        },
      },
      CC55A: {
        code: 'CC55A',
        name: 'Compiladores',
        weeklyLessons: 4,
        classes: {
          CC51: {
            subjectCode: 'CC55A',
            subjectName: 'Compiladores',
            code: 'CC51',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '2T2',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'C202',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'C202',
              },
            ],
            teacher: 'Gleifer Vaz Alves',
            optional: 'Não',
          },
        },
      },
      CC54E: {
        code: 'CC54E',
        name: 'Computação Gráfica',
        weeklyLessons: 4,
        classes: {
          CC41: {
            subjectCode: 'CC54E',
            subjectName: 'Computação Gráfica',
            code: 'CC41',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '3M2',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '3M2',
                locationCode: 'L108',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L108',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'L006',
              },
              {
                dayTimeCode: '4M4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'L006',
              },
            ],
            teacher: 'Mauren Louise Sguario Coelho De Andrade',
            optional: 'Não',
          },
        },
      },
      CC37F: {
        code: 'CC37F',
        name: 'Comunicação De Dados',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC37F',
            subjectName: 'Comunicação De Dados',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '3M2',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '6M4',
                locationCode: 'L001',
              },
              {
                dayTimeCode: '6M5',
                locationCode: 'L001',
              },
            ],
            teacher: 'Lourival Aparecido De Gois',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da ComputaçãoBacharelado Em Ciência Da Computação\n      ',
          },
        },
      },
      CC51E: {
        code: 'CC51E',
        name: 'Comunicação Linguística',
        weeklyLessons: 2,
        classes: {
          CC11: {
            subjectCode: 'CC51E',
            subjectName: 'Comunicação Linguística',
            code: 'CC11',
            framing: 'R',
            vacanciesTotal: 82,
            vacanciesFreshman: 32,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Flavio Madalosso VieiraIsabel Ribeiro Gravonski',
            optional: 'Não',
          },
        },
      },
      QM31D: {
        code: 'QM31D',
        name: 'Comunicação Oral E Escrita',
        weeklyLessons: 2,
        classes: {
          AE141: {
            subjectCode: 'QM31D',
            subjectName: 'Comunicação Oral E Escrita',
            code: 'AE141',
            framing: 'R',
            vacanciesTotal: 23,
            vacanciesFreshman: 22,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia Eletrônica2 - Engenharia De Produção\n      ',
            schedule: [
              {
                dayTimeCode: '3T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Isabel Ribeiro GravonskiAdriane Marie Salm Coelho',
            optional: 'Não',
          },
        },
      },
      CC02D: {
        code: 'CC02D',
        name: 'Desenvolvimento Web - Cliente',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC02D',
            subjectName: 'Desenvolvimento Web - Cliente',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '5T2',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'L109',
              },
            ],
            teacher: 'Luiz Rafael Schmitke',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da Computação\n      ',
          },
        },
      },
      EP33H: {
        code: 'EP33H',
        name: 'Economia',
        weeklyLessons: 2,
        classes: {
          PE341: {
            subjectCode: 'EP33H',
            subjectName: 'Economia',
            code: 'PE341',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Engenharia De Produção2 - Ciência Da Computação',
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
            teacher: 'Regina Negri Pagani',
            optional: 'Não',
          },
        },
      },
      CC56D: {
        code: 'CC56D',
        name: 'Empreendedorismo',
        weeklyLessons: 2,
        classes: {
          CC61: {
            subjectCode: 'CC56D',
            subjectName: 'Empreendedorismo',
            code: 'CC61',
            framing: 'R',
            vacanciesTotal: 50,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação2 - Eng Bioproc E Biotec',
            schedule: [
              {
                dayTimeCode: '3T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T3',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Eliane Fernandes Pietrovski',
            optional: 'Não',
          },
        },
      },
      QM38F: {
        code: 'QM38F',
        name: 'Empreendedorismo',
        weeklyLessons: 2,
        classes: {
          AE841: {
            subjectCode: 'QM38F',
            subjectName: 'Empreendedorismo',
            code: 'AE841',
            framing: 'R',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia Química2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Eng Bioproc E Biotec\n      ',
            schedule: [
              {
                dayTimeCode: '3T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Joao Luiz Kovaleski',
            optional: 'Não',
          },
        },
      },
      CC53D: {
        code: 'CC53D',
        name: 'Engenharia De Software 1',
        weeklyLessons: 4,
        classes: {
          CC31: {
            subjectCode: 'CC53D',
            subjectName: 'Engenharia De Software 1',
            code: 'CC31',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '3M4',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '3M4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'C103',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'C203',
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
            teacher: 'Eliana Claudia Mayumi Ishikawa',
            optional: 'Não',
          },
        },
      },
      CC52A: {
        code: 'CC52A',
        name: 'Estrutura De Dados 1',
        weeklyLessons: 4,
        classes: {
          CC21: {
            subjectCode: 'CC52A',
            subjectName: 'Estrutura De Dados 1',
            code: 'CC21',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Simone Bello Kaminski Aires',
            optional: 'Não',
          },
          RE42: {
            subjectCode: 'CC52A',
            subjectName: 'Estrutura De Dados 1',
            code: 'RE42',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'L002',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'L002',
              },
              {
                dayTimeCode: '5M2',
                locationCode: 'L002',
              },
              {
                dayTimeCode: '5M3',
                locationCode: 'L002',
              },
            ],
            teacher: 'Saulo Jorge Beltrao De Queiroz',
            optional: 'Não',
          },
        },
      },
      CC53A: {
        code: 'CC53A',
        name: 'Estrutura De Dados 2',
        weeklyLessons: 4,
        classes: {
          CC31: {
            subjectCode: 'CC53A',
            subjectName: 'Estrutura De Dados 2',
            code: 'CC31',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '4T4',
                locationCode: 'L103',
              },
              {
                dayTimeCode: '4T4',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'L103',
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
                locationCode: 'C104',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'L114',
              },
            ],
            teacher: 'Saulo Jorge Beltrao De Queiroz',
            optional: 'Não',
          },
        },
      },
      CC53F: {
        code: 'CC53F',
        name: 'Ética Profissão E Cidadania',
        weeklyLessons: 2,
        classes: {
          CC31: {
            subjectCode: 'CC53F',
            subjectName: 'Ética Profissão E Cidadania',
            code: 'CC31',
            framing: 'P',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Katya Cristina De Lima Picanco',
            optional: 'Não',
          },
        },
      },
      PG0039: {
        code: 'PG0039',
        name: 'Ética, Profissão E Cidadania',
        weeklyLessons: 2,
        classes: {
          EM51: {
            subjectCode: 'PG0039',
            subjectName: 'Ética, Profissão E Cidadania',
            code: 'EM51',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Mecânica2 - Engenharia Química2 - Ciência Da\n        Computação2 - Eng Bioproc E Biotec\n      ',
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
            teacher: 'Katya Cristina De Lima Picanco',
            optional: 'Não',
          },
        },
      },
      BP05F: {
        code: 'BP05F',
        name: 'Filosofia Da Ciência E Da Tecnologia',
        weeklyLessons: 2,
        classes: {
          OPBT: {
            subjectCode: 'BP05F',
            subjectName: 'Filosofia Da Ciência E Da Tecnologia',
            code: 'OPBT',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Eng Bioproc E Biotec2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia De Produção2 -\n        Engenharia Elétrica\n      ',
            schedule: [
              {
                dayTimeCode: '3T4',
                locationCode: 'L113',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'L113',
              },
            ],
            teacher: 'Edson Jacinski',
            optional: 'Engenharia De Bioprocessos E Biotecnologia',
          },
        },
      },
      BP32F: {
        code: 'BP32F',
        name: 'Geometria Analítica E Álgebra Linear',
        weeklyLessons: 6,
        classes: {
          BP21: {
            subjectCode: 'BP32F',
            subjectName: 'Geometria Analítica E Álgebra Linear',
            code: 'BP21',
            framing: 'R',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Eng Bioproc E Biotec2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia De Produção2 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Taiza Alissul Sauer Do Carmo',
            optional: 'Não',
          },
          EAD: {
            subjectCode: 'BP32F',
            subjectName: 'Geometria Analítica E Álgebra Linear',
            code: 'EAD',
            framing: 'P',
            vacanciesTotal: 150,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química1 - Engenharia Mecânica1 - Ciência Da\n        Computação1 - Engenharia Eletrônica1 - Engenharia De Produção1 -\n        Eng Bioproc E Biotec1 - Engenharia Elétrica\n      ',
            schedule: [
              {
                dayTimeCode: '',
                locationCode: '',
              },
            ],
            teacher: 'Iara Da Cunha Ribeiro Da Silva',
            optional: 'Não',
          },
        },
      },
      CC51D: {
        code: 'CC51D',
        name: 'Geometria Analítica E Álgebra Linear',
        weeklyLessons: 6,
        classes: {
          CC11: {
            subjectCode: 'CC51D',
            subjectName: 'Geometria Analítica E Álgebra Linear',
            code: 'CC11',
            framing: 'R',
            vacanciesTotal: 82,
            vacanciesFreshman: 32,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Ciência Da Computação2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Engenharia Eletrônica2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T3',
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
            teacher: 'Taiza Alissul Sauer Do Carmo',
            optional: 'Não',
          },
        },
      },
      EN31D: {
        code: 'EN31D',
        name: 'Geometria Analítica E Álgebra Linear',
        weeklyLessons: 6,
        classes: {
          EE11: {
            subjectCode: 'EN31D',
            subjectName: 'Geometria Analítica E Álgebra Linear',
            code: 'EE11',
            framing: 'P',
            vacanciesTotal: 36,
            vacanciesFreshman: 30,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Eletrônica1 - Engenharia Elétrica2 - Engenharia\n        Química2 - Ciência Da Computação2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
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
            teacher: 'Marcos Cesar Verges',
            optional: 'Não',
          },
        },
      },
      EP31D: {
        code: 'EP31D',
        name: 'Geometria Analítica E Álgebra Linear',
        weeklyLessons: 6,
        classes: {
          PE141: {
            subjectCode: 'EP31D',
            subjectName: 'Geometria Analítica E Álgebra Linear',
            code: 'PE141',
            framing: 'R',
            vacanciesTotal: 45,
            vacanciesFreshman: 44,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia De Produção2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia Eletrônica2 -\n        Eng Bioproc E Biotec\n      ',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2M3',
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
              {
                dayTimeCode: '5M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Nilceia Aparecida Maciel Pinheiro',
            optional: 'Não',
          },
        },
      },
      QM31B: {
        code: 'QM31B',
        name: 'Geometria Analítica E Álgebra Linear',
        weeklyLessons: 6,
        classes: {
          AE141: {
            subjectCode: 'QM31B',
            subjectName: 'Geometria Analítica E Álgebra Linear',
            code: 'AE141',
            framing: 'R',
            vacanciesTotal: 23,
            vacanciesFreshman: 22,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia De Produção2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
            schedule: [
              {
                dayTimeCode: '2T1',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T2',
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
              {
                dayTimeCode: '5T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Ana Paula Milanez',
            optional: 'Não',
          },
        },
      },
      PG0002: {
        code: 'PG0002',
        name: 'Geometria Analítica E Álgebra Linear',
        weeklyLessons: 6,
        classes: {
          EM11: {
            subjectCode: 'PG0002',
            subjectName: 'Geometria Analítica E Álgebra Linear',
            code: 'EM11',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 38,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Mecânica2 - Engenharia Química2 - Ciência Da\n        Computação2 - Engenharia Eletrônica2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
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
            teacher: 'David Alexander Chipana Mollinedo',
            optional: 'Não',
          },
        },
      },
      CC56A: {
        code: 'CC56A',
        name: 'Inteligência Artificial',
        weeklyLessons: 4,
        classes: {
          CC61: {
            subjectCode: 'CC56A',
            subjectName: 'Inteligência Artificial',
            code: 'CC61',
            framing: 'R',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
                dayTimeCode: '4T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Helyane Bronoski Borges',
            optional: 'Não',
          },
        },
      },
      CC55E: {
        code: 'CC55E',
        name: 'Interação Humano-Computador',
        weeklyLessons: 4,
        classes: {
          CC51: {
            subjectCode: 'CC55E',
            subjectName: 'Interação Humano-Computador',
            code: 'CC51',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Geraldo Ranthum',
            optional: 'Não',
          },
        },
      },
      EP34A: {
        code: 'EP34A',
        name: 'Introdução À Administração',
        weeklyLessons: 4,
        classes: {
          PE441: {
            subjectCode: 'EP34A',
            subjectName: 'Introdução À Administração',
            code: 'PE441',
            framing: 'R',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia De Produção2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia Eletrônica\n      ',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T3',
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
            teacher: 'Claudia Tania Picinin',
            optional: 'Não',
          },
        },
      },
      CC52D: {
        code: 'CC52D',
        name: 'Laboratório De Estrutura De Dados',
        weeklyLessons: 2,
        classes: {
          CC21: {
            subjectCode: 'CC52D',
            subjectName: 'Laboratório De Estrutura De Dados',
            code: 'CC21',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Simone Bello Kaminski Aires',
            optional: 'Não',
          },
          RE42: {
            subjectCode: 'CC52D',
            subjectName: 'Laboratório De Estrutura De Dados',
            code: 'RE42',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '6M2',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '6M3',
                locationCode: 'L114',
              },
            ],
            teacher: 'Saulo Jorge Beltrao De Queiroz',
            optional: 'Não',
          },
        },
      },
      CC02I: {
        code: 'CC02I',
        name: 'Laboratório De Programação Em Sistemas Operacionais',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC02I',
            subjectName: 'Laboratório De Programação Em Sistemas Operacionais',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '6M2',
                locationCode: 'L109',
              },
              {
                dayTimeCode: '6M3',
                locationCode: 'L109',
              },
            ],
            teacher: 'Andre Koscianski',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da Computação\n      ',
          },
        },
      },
      CC38L: {
        code: 'CC38L',
        name: 'Libras',
        weeklyLessons: 2,
        classes: {
          OPTHA: {
            subjectCode: 'CC38L',
            subjectName: 'Libras',
            code: 'OPTHA',
            framing: 'P',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química1 - Engenharia Mecânica1 - Ciência Da\n        Computação1 - Engenharia De Produção1 - Eng Bioproc E Biotec1 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Luiz Andre Brito Coelho',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da ComputaçãoBacharelado Em Ciência Da Computação\n      ',
          },
          OPTHB: {
            subjectCode: 'CC38L',
            subjectName: 'Libras',
            code: 'OPTHB',
            framing: 'P',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química1 - Engenharia Mecânica1 - Ciência Da\n        Computação1 - Engenharia De Produção1 - Eng Bioproc E Biotec1 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Luiz Andre Brito Coelho',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da ComputaçãoBacharelado Em Ciência Da Computação\n      ',
          },
        },
      },
      AS31B: {
        code: 'AS31B',
        name: 'Linguagem De Programação Estruturada',
        weeklyLessons: 4,
        classes: {
          RE31: {
            subjectCode: 'AS31B',
            subjectName: 'Linguagem De Programação Estruturada',
            code: 'RE31',
            framing: 'H',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '2N1',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '2N2',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '4N1',
                locationCode: 'C102',
              },
              {
                dayTimeCode: '4N2',
                locationCode: 'C102',
              },
            ],
            teacher: 'Joao Paulo Aires',
            optional: 'Não',
          },
        },
      },
      CC54A: {
        code: 'CC54A',
        name: 'Linguagens Formais, Autômatos',
        weeklyLessons: 4,
        classes: {
          CC41: {
            subjectCode: 'CC54A',
            subjectName: 'Linguagens Formais, Autômatos',
            code: 'CC41',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
                dayTimeCode: '5T2',
                locationCode: 'L004',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'L004',
              },
            ],
            teacher: 'Gleifer Vaz Alves',
            optional: 'Não',
          },
        },
      },
      CC52C: {
        code: 'CC52C',
        name: 'Lógica Para Computação',
        weeklyLessons: 4,
        classes: {
          CC21: {
            subjectCode: 'CC52C',
            subjectName: 'Lógica Para Computação',
            code: 'CC21',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
                locationCode: 'C202',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'C202',
              },
            ],
            teacher: 'Gleifer Vaz Alves',
            optional: 'Não',
          },
        },
      },
      CC51B: {
        code: 'CC51B',
        name: 'Matemática Discreta',
        weeklyLessons: 4,
        classes: {
          CC11: {
            subjectCode: 'CC51B',
            subjectName: 'Matemática Discreta',
            code: 'CC11',
            framing: 'H',
            vacanciesTotal: 72,
            vacanciesFreshman: 32,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4T2',
                locationCode: 'L008',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'L008',
              },
            ],
            teacher: 'Sheila Morais De Almeida',
            optional: 'Não',
          },
        },
      },
      EP33D: {
        code: 'EP33D',
        name: 'Matemática Discreta',
        weeklyLessons: 3,
        classes: {
          PE341: {
            subjectCode: 'EP33D',
            subjectName: 'Matemática Discreta',
            code: 'PE341',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Engenharia De Produção',
            schedule: [
              {
                dayTimeCode: '4T4',
                locationCode: 'K107',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'K107',
              },
              {
                dayTimeCode: '4T6',
                locationCode: 'K107',
              },
            ],
            teacher: 'Rodrigo Frehse Pereira',
            optional: 'Não',
          },
        },
      },
      BP35H: {
        code: 'BP35H',
        name: 'Metodologia Da Pesquisa',
        weeklyLessons: 2,
        classes: {
          BP51: {
            subjectCode: 'BP35H',
            subjectName: 'Metodologia Da Pesquisa',
            code: 'BP51',
            framing: 'R',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Eng Bioproc E Biotec',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Antonio Carlos Frasson',
            optional: 'Não',
          },
        },
      },
      CC56B: {
        code: 'CC56B',
        name: 'Metodologia Da Pesquisa',
        weeklyLessons: 2,
        classes: {
          CC61: {
            subjectCode: 'CC56B',
            subjectName: 'Metodologia Da Pesquisa',
            code: 'CC61',
            framing: 'R',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '2T3',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Helyane Bronoski Borges',
            optional: 'Não',
          },
        },
      },
      EP33G: {
        code: 'EP33G',
        name: 'Metodologia Da Pesquisa',
        weeklyLessons: 2,
        classes: {
          PE341: {
            subjectCode: 'EP33G',
            subjectName: 'Metodologia Da Pesquisa',
            code: 'PE341',
            framing: 'R',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia De Produção2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia Eletrônica2 -\n        Eng Bioproc E Biotec\n      ',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Jose Alves De Faria Filho',
            optional: 'Não',
          },
        },
      },
      CC53B: {
        code: 'CC53B',
        name: 'Organização De Computadores',
        weeklyLessons: 4,
        classes: {
          CC31: {
            subjectCode: 'CC53B',
            subjectName: 'Organização De Computadores',
            code: 'CC31',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '6T2',
                locationCode: 'L105',
              },
              {
                dayTimeCode: '6T3',
                locationCode: 'L105',
              },
            ],
            teacher: 'Erikson Freitas De Morais',
            optional: 'Não',
          },
        },
      },
      ENG01A: {
        code: 'ENG01A',
        name: 'Práticas Esportivas Individuais, Esportes De Aventura E Qualidade De Vida',
        weeklyLessons: 2,
        classes: {
          OPTHA: {
            subjectCode: 'ENG01A',
            subjectName:
              'Práticas Esportivas Individuais, Esportes De Aventura E Qualidade De Vida',
            code: 'OPTHA',
            framing: 'P',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química1 - Engenharia Mecânica1 - Ciência Da\n        Computação1 - Engenharia De Produção1 - Eng Bioproc E Biotec1 -\n        Engenharia Elétrica\n      ',
            schedule: [
              {
                dayTimeCode: '5M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Gilberto Martins Freire',
            optional:
              '\n        Engenharia EletrônicaEngenharia Mecânica - Matriz 2Engenharia\n        QuimicaCurso De Bacharelado Em Ciência Da Computação.Bacharelado Em\n        Ciência Da ComputaçãoEngenharia Mecânica - Matriz 1Engenharia De\n        ProduçãoEngenharia De Bioprocessos E Biotecnologia\n      ',
          },
          OPTHB: {
            subjectCode: 'ENG01A',
            subjectName:
              'Práticas Esportivas Individuais, Esportes De Aventura E Qualidade De Vida',
            code: 'OPTHB',
            framing: 'P',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Química1 - Engenharia Mecânica1 - Ciência Da\n        Computação1 - Engenharia De Produção1 - Eng Bioproc E Biotec1 -\n        Engenharia Elétrica\n      ',
            schedule: [
              {
                dayTimeCode: '3T4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3T5',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Gilberto Martins Freire',
            optional:
              '\n        Engenharia EletrônicaEngenharia Mecânica - Matriz 2Engenharia\n        QuimicaCurso De Bacharelado Em Ciência Da Computação.Bacharelado Em\n        Ciência Da ComputaçãoEngenharia Mecânica - Matriz 1Engenharia De\n        ProduçãoEngenharia De Bioprocessos E Biotecnologia\n      ',
          },
        },
      },
      BP33G: {
        code: 'BP33G',
        name: 'Probabilidade E Estatística',
        weeklyLessons: 4,
        classes: {
          BP31: {
            subjectCode: 'BP33G',
            subjectName: 'Probabilidade E Estatística',
            code: 'BP31',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Eng Bioproc E Biotec2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Engenharia Eletrônica2 -\n        Engenharia De Produção\n      ',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '2T5',
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
            teacher: 'Marcos Tadeu Andrade Cordeiro',
            optional: 'Não',
          },
        },
      },
      CC52F: {
        code: 'CC52F',
        name: 'Probabilidade E Estatística',
        weeklyLessons: 4,
        classes: {
          CC21: {
            subjectCode: 'CC52F',
            subjectName: 'Probabilidade E Estatística',
            code: 'CC21',
            framing: 'P',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2M2',
                locationCode: 'L102',
              },
              {
                dayTimeCode: '2M3',
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
            teacher: 'Marcos Tadeu Andrade Cordeiro',
            optional: 'Não',
          },
        },
      },
      EP32D: {
        code: 'EP32D',
        name: 'Probabilidade E Estatística',
        weeklyLessons: 4,
        classes: {
          PE241: {
            subjectCode: 'EP32D',
            subjectName: 'Probabilidade E Estatística',
            code: 'PE241',
            framing: 'P',
            vacanciesTotal: 38,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia De Produção2 - Engenharia Química2 - Engenharia\n        Mecânica2 - Ciência Da Computação2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Guatacara Dos Santos Junior',
            optional: 'Não',
          },
        },
      },
      QM35E: {
        code: 'QM35E',
        name: 'Probabilidade E Estatística',
        weeklyLessons: 4,
        classes: {
          AE541: {
            subjectCode: 'QM35E',
            subjectName: 'Probabilidade E Estatística',
            code: 'AE541',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors:
              '\n        1 - Engenharia Química2 - Engenharia Mecânica2 - Ciência Da\n        Computação2 - Engenharia Eletrônica2 - Engenharia De Produção2 -\n        Eng Bioproc E Biotec\n      ',
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
            teacher: 'Guatacara Dos Santos Junior',
            optional: 'Não',
          },
        },
      },
      PG0009: {
        code: 'PG0009',
        name: 'Probabilidade E Estatística',
        weeklyLessons: 4,
        classes: {
          EM21: {
            subjectCode: 'PG0009',
            subjectName: 'Probabilidade E Estatística',
            code: 'EM21',
            framing: 'P',
            vacanciesTotal: 44,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors:
              '\n        1 - Engenharia Mecânica2 - Engenharia Química2 - Ciência Da\n        Computação2 - Engenharia De Produção2 - Eng Bioproc E Biotec2 -\n        Engenharia Elétrica\n      ',
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
            teacher: 'Marcos Tadeu Andrade Cordeiro',
            optional: 'Não',
          },
        },
      },
      CC36F: {
        code: 'CC36F',
        name: 'Processamento De Imagens',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC36F',
            subjectName: 'Processamento De Imagens',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '3M4',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '3M5',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '4M2',
                locationCode: 'L114',
              },
              {
                dayTimeCode: '4M3',
                locationCode: 'L114',
              },
            ],
            teacher: 'Mauren Louise Sguario Coelho De Andrade',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da Computação\n      ',
          },
        },
      },
      CC37X: {
        code: 'CC37X',
        name: 'Programação De Dispositivos Móveis',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC37X',
            subjectName: 'Programação De Dispositivos Móveis',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2T4',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '2T5',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '5T4',
                locationCode: 'L003',
              },
              {
                dayTimeCode: '5T5',
                locationCode: 'L003',
              },
            ],
            teacher: 'Diego Roberto Antunes',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da ComputaçãoBacharelado Em Ciência Da Computação\n      ',
          },
        },
      },
      CC54D: {
        code: 'CC54D',
        name: 'Programação Orientada A Objetos',
        weeklyLessons: 4,
        classes: {
          CC41: {
            subjectCode: 'CC54D',
            subjectName: 'Programação Orientada A Objetos',
            code: 'CC41',
            framing: 'P',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
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
                dayTimeCode: '5M4',
                locationCode: 'C203',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'C203',
              },
            ],
            teacher: 'Vinicius Camargo Andrade',
            optional: 'Não',
          },
        },
      },
      ET05A: {
        code: 'ET05A',
        name: 'Qualidade De Vida',
        weeklyLessons: 2,
        classes: {
          OPTHA: {
            subjectCode: 'ET05A',
            subjectName: 'Qualidade De Vida',
            code: 'OPTHA',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
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
            teacher: 'Adriana Aparecida Guimaraes',
            optional: 'Engenharia Eletrônica',
          },
          OPTHB: {
            subjectCode: 'ET05A',
            subjectName: 'Qualidade De Vida',
            code: 'OPTHB',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
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
            teacher: 'Adriana Aparecida Guimaraes',
            optional: 'Engenharia Eletrônica',
          },
          OPTHC: {
            subjectCode: 'ET05A',
            subjectName: 'Qualidade De Vida',
            code: 'OPTHC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
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
            teacher: 'Adriana Aparecida Guimaraes',
            optional: 'Engenharia Eletrônica',
          },
          OPTHD: {
            subjectCode: 'ET05A',
            subjectName: 'Qualidade De Vida',
            code: 'OPTHD',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
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
            teacher: 'Adriana Aparecida Guimaraes',
            optional: 'Engenharia Eletrônica',
          },
          OPTHE: {
            subjectCode: 'ET05A',
            subjectName: 'Qualidade De Vida',
            code: 'OPTHE',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
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
            teacher: 'Adriana Aparecida Guimaraes',
            optional: 'Engenharia Eletrônica',
          },
        },
      },
      CC55C: {
        code: 'CC55C',
        name: 'Redes De Computadores 1',
        weeklyLessons: 4,
        classes: {
          CC51: {
            subjectCode: 'CC55C',
            subjectName: 'Redes De Computadores 1',
            code: 'CC51',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '2M4',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '2M5',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '3M2',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '3M3',
                locationCode: 'C104',
              },
            ],
            teacher: 'Augusto Foronda',
            optional: 'Não',
          },
        },
      },
      CC37Z: {
        code: 'CC37Z',
        name: 'Redes De Computadores 2',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC37Z',
            subjectName: 'Redes De Computadores 2',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '4M4',
                locationCode: 'C207',
              },
              {
                dayTimeCode: '4M5',
                locationCode: 'C207',
              },
              {
                dayTimeCode: '5M4',
                locationCode: 'C207',
              },
              {
                dayTimeCode: '5M5',
                locationCode: 'C207',
              },
            ],
            teacher: 'Lourival Aparecido De Gois',
            optional: 'Curso De Bacharelado Em Ciência Da Computação.',
          },
        },
      },
      CC56C: {
        code: 'CC56C',
        name: 'Sistemas Distribuidos',
        weeklyLessons: 4,
        classes: {
          CC61: {
            subjectCode: 'CC56C',
            subjectName: 'Sistemas Distribuidos',
            code: 'CC61',
            framing: 'P',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
                dayTimeCode: '5T4',
                locationCode: 'C104',
              },
              {
                dayTimeCode: '5T5',
                locationCode: 'C104',
              },
            ],
            teacher: 'Richard Duarte Ribeiro',
            optional: 'Não',
          },
        },
      },
      CC54C: {
        code: 'CC54C',
        name: 'Sistemas Microcontrolados',
        weeklyLessons: 4,
        classes: {
          CC41: {
            subjectCode: 'CC54C',
            subjectName: 'Sistemas Microcontrolados',
            code: 'CC41',
            framing: 'P',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Cristhiane Goncalves',
            optional: 'Não',
          },
        },
      },
      CC54B: {
        code: 'CC54B',
        name: 'Sistemas Operacionais',
        weeklyLessons: 4,
        classes: {
          CC41: {
            subjectCode: 'CC54B',
            subjectName: 'Sistemas Operacionais',
            code: 'CC41',
            framing: 'H',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Andre Koscianski',
            optional: 'Não',
          },
        },
      },
      CC39B: {
        code: 'CC39B',
        name: 'Tópicos Em Engenharia De Software',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC39B',
            subjectName: 'Tópicos Em Engenharia De Software',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '2M1',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '2M2',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '2M3',
                locationCode: 'L010',
              },
              {
                dayTimeCode: '2M4',
                locationCode: 'L010',
              },
            ],
            teacher: 'Simone Nasser Matos',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da Computação\n      ',
          },
        },
      },
      CC39C: {
        code: 'CC39C',
        name: 'Tópicos Em Inteligência Artificial',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC39C',
            subjectName: 'Tópicos Em Inteligência Artificial',
            code: 'OPTC',
            framing: 'P',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '3M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '3M5',
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
            teacher: 'Andre Pinz Borges',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da Computação\n      ',
          },
        },
      },
      CC02Z: {
        code: 'CC02Z',
        name: 'Tópicos Em Programação 3',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC02Z',
            subjectName: 'Tópicos Em Programação 3',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
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
            teacher: 'Hugo Valadares Siqueira',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da ComputaçãoCurso De Bacharelado Em Ciência\n        Da Computação.\n      ',
          },
        },
      },
      CC02Y: {
        code: 'CC02Y',
        name: 'Tópicos Em Teoria De Grafos',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC02Y',
            subjectName: 'Tópicos Em Teoria De Grafos',
            code: 'OPTC',
            framing: 'P',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '5T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '5T3',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '6M4',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '6M5',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Sheila Morais De Almeida',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da ComputaçãoCurso De Bacharelado Em Ciência\n        Da Computação.\n      ',
          },
        },
      },
      CC57A: {
        code: 'CC57A',
        name: 'Trabalho De Conclusão De Curso 1',
        weeklyLessons: 4,
        classes: {
          CC71: {
            subjectCode: 'CC57A',
            subjectName: 'Trabalho De Conclusão De Curso 1',
            code: 'CC71',
            framing: 'R',
            vacanciesTotal: 40,
            vacanciesFreshman: 0,
            reservationType: 'Fechada',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '4T2',
                locationCode: 'Z001',
              },
              {
                dayTimeCode: '4T3',
                locationCode: 'Z001',
              },
            ],
            teacher: 'Helyane Bronoski Borges',
            optional: 'Não',
          },
        },
      },
      CC38A: {
        code: 'CC38A',
        name: 'Trabalho De Conclusão De Curso 2',
        weeklyLessons: 2,
        classes: {
          IB841: {
            subjectCode: 'CC38A',
            subjectName: 'Trabalho De Conclusão De Curso 2',
            code: 'IB841',
            framing: null,
            vacanciesTotal: 99,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '',
            schedule: [
              {
                dayTimeCode: '',
                locationCode: '',
              },
            ],
            teacher: 'Helyane Bronoski Borges',
            optional: 'Não',
          },
        },
      },
      CC02X: {
        code: 'CC02X',
        name: 'Visão Computacional',
        weeklyLessons: 4,
        classes: {
          OPTC: {
            subjectCode: 'CC02X',
            subjectName: 'Visão Computacional',
            code: 'OPTC',
            framing: 'H',
            vacanciesTotal: 20,
            vacanciesFreshman: 0,
            reservationType: 'Sem Reserva',
            priorityMajors: '1 - Ciência Da Computação',
            schedule: [
              {
                dayTimeCode: '4T4',
                locationCode: 'K102',
              },
              {
                dayTimeCode: '4T5',
                locationCode: 'K102',
              },
              {
                dayTimeCode: '6T4',
                locationCode: 'K102',
              },
              {
                dayTimeCode: '6T5',
                locationCode: 'K102',
              },
            ],
            teacher: 'Erikson Freitas De Morais',
            optional:
              '\n        Curso De Bacharelado Em Ciência Da Computação.Curso De Bacharelado Em\n        Ciência Da Computação\n      ',
          },
        },
      },
    }),
    []
  );

  return subjects;
};

export default useSubjects;
