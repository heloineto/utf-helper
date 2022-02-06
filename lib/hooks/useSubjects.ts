import { useMemo } from 'react';

const useSubjects = () => {
  const subjects = useMemo(
    () => ({
      'CC51A - Algoritmos': {
        CC11: {
          vacanciesTotal: '45',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M4',
              locationCode: 'C102',
            },
            {
              timeCode: '2M4',
              locationCode: 'L004',
            },
            {
              timeCode: '2M5',
              locationCode: 'L004',
            },
            {
              timeCode: '2M5',
              locationCode: 'C102',
            },
            {
              timeCode: '3M4',
              locationCode: 'C102',
            },
            {
              timeCode: '3M4',
              locationCode: 'L004',
            },
            {
              timeCode: '3M5',
              locationCode: 'L004',
            },
            {
              timeCode: '3M5',
              locationCode: 'C102',
            },
            {
              timeCode: '5M2',
              locationCode: 'L004',
            },
            {
              timeCode: '5M2',
              locationCode: 'C102',
            },
            {
              timeCode: '5M3',
              locationCode: 'C102',
            },
            {
              timeCode: '5M3',
              locationCode: 'L004',
            },
          ],
          professor: 'Simone Bello Kaminski Aires\n',
          optional: 'Não',
        },
      },
      'CC55B - Análise E Projetos De Algoritmos': {
        CC51: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '5T2',
              locationCode: 'L113',
            },
            {
              timeCode: '5T3',
              locationCode: 'L113',
            },
            {
              timeCode: '6T4',
              locationCode: 'L010',
            },
            {
              timeCode: '6T5',
              locationCode: 'L010',
            },
          ],
          professor: 'Sheila Morais De Almeida\n',
          optional: 'Não',
        },
      },
      'CC55D - Análise E Projetos Orientados A Objetos': {
        CC51: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4T2',
              locationCode: 'C203',
            },
            {
              timeCode: '4T3',
              locationCode: 'C203',
            },
            {
              timeCode: '6T2',
              locationCode: 'C202',
            },
            {
              timeCode: '6T3',
              locationCode: 'C202',
            },
          ],
          professor: 'Simone Nasser Matos\n',
          optional: 'Não',
        },
      },
      'CC53C - Banco De Dados 1': {
        CC31: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'C104',
            },
            {
              timeCode: '2T5',
              locationCode: 'C104',
            },
            {
              timeCode: '6M4',
              locationCode: 'C104',
            },
            {
              timeCode: '6M5',
              locationCode: 'C104',
            },
          ],
          professor: 'Simone De Almeida\n',
          optional: 'Não',
        },
      },
      'CC37W - Banco De Dados 2': {
        OPTC: {
          vacanciesTotal: '10',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'C102',
            },
            {
              timeCode: '2T5',
              locationCode: 'C102',
            },
            {
              timeCode: '4T4',
              locationCode: 'C102',
            },
            {
              timeCode: '4T5',
              locationCode: 'C102',
            },
          ],
          professor: 'Tarcizio Alexandre Bini\n',
          optional: 'Curso De Bacharelado Em Ciência Da Computação.\n',
        },
      },
      'CC52B - Circuitos Digitais': {
        CC21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '3T2',
              locationCode: 'L005',
            },
            {
              timeCode: '3T3',
              locationCode: 'L005',
            },
            {
              timeCode: '4T2',
              locationCode: 'L010',
            },
            {
              timeCode: '4T3',
              locationCode: 'L010',
            },
          ],
          professor: 'Joaquim De Mira Junior\n',
          optional: 'Não',
        },
      },
      'CC55A - Compiladores': {
        CC51: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'L109',
            },
            {
              timeCode: '2T2',
              locationCode: 'C104',
            },
            {
              timeCode: '2T3',
              locationCode: 'L109',
            },
            {
              timeCode: '2T3',
              locationCode: 'C104',
            },
            {
              timeCode: '5M4',
              locationCode: 'C202',
            },
            {
              timeCode: '5M4',
              locationCode: 'L109',
            },
            {
              timeCode: '5M5',
              locationCode: 'C202',
            },
            {
              timeCode: '5M5',
              locationCode: 'L109',
            },
          ],
          professor: 'Gleifer Vaz Alves\n',
          optional: 'Não',
        },
      },
      'CC54E - Computação Gráfica': {
        CC41: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4M4',
              locationCode: 'C203',
            },
            {
              timeCode: '4M4',
              locationCode: 'L006',
            },
            {
              timeCode: '4M5',
              locationCode: 'C203',
            },
            {
              timeCode: '4M5',
              locationCode: 'L006',
            },
            {
              timeCode: '5M4',
              locationCode: 'L108',
            },
            {
              timeCode: '5M4',
              locationCode: 'C203',
            },
            {
              timeCode: '5M5',
              locationCode: 'L108',
            },
            {
              timeCode: '5M5',
              locationCode: 'C203',
            },
          ],
          professor: 'Mauren Louise Sguario Coelho De Andrade\n',
          optional: 'Não',
        },
      },
      'BP31B - Comunicação Linguística': {
        BP11: {
          vacanciesTotal: '51',
          vacanciesFreshman: '44',
          reservationType: 'Sem Reserva',
          priorityMajors: '1 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '3T4',
              locationCode: 'L003',
            },
            {
              timeCode: '3T5',
              locationCode: 'L003',
            },
          ],
          professor: 'Isabel Ribeiro Gravonski\n',
          optional: 'Não',
        },
      },
      'CC51E - Comunicação Linguística': {
        CC11: {
          vacanciesTotal: '45',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4T4',
              locationCode: 'L001',
            },
            {
              timeCode: '4T4',
              locationCode: 'L001',
            },
            {
              timeCode: '4T5',
              locationCode: 'L001',
            },
            {
              timeCode: '4T5',
              locationCode: 'L001',
            },
          ],
          professor: 'Isabel Ribeiro Gravonski\nMariza Perobelli\n',
          optional: 'Não',
        },
      },
      'QM31D - Comunicação Oral E Escrita': {
        AE141: {
          vacanciesTotal: '48',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n',
          schedule: [
            {
              timeCode: '3T2',
              locationCode: 'L004',
            },
            {
              timeCode: '3T2',
              locationCode: 'L004',
            },
            {
              timeCode: '3T3',
              locationCode: 'L004',
            },
            {
              timeCode: '3T3',
              locationCode: 'L004',
            },
          ],
          professor: 'Isabel Ribeiro Gravonski\nMariza Perobelli\n',
          optional: 'Não',
        },
      },
      'BP31A - Cálculo Diferencial E Integral 1': {
        BP11: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Sem Reserva',
          priorityMajors:
            '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n',
          schedule: [
            {
              timeCode: '3M3',
              locationCode: 'L006',
            },
            {
              timeCode: '3M4',
              locationCode: 'L006',
            },
            {
              timeCode: '3M5',
              locationCode: 'L006',
            },
            {
              timeCode: '5M3',
              locationCode: 'L006',
            },
            {
              timeCode: '5M4',
              locationCode: 'L006',
            },
            {
              timeCode: '5M5',
              locationCode: 'L006',
            },
          ],
          professor: 'Ana Paula Milanez\n',
          optional: 'Não',
        },
        EAD: {
          vacanciesTotal: '110',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia Eletrônica\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: ' ',
              locationCode: '',
            },
          ],
          professor: 'Thiago Gilberto Do Prado\n',
          optional: 'Não',
        },
      },
      'CC51C - Cálculo Diferencial E Integral 1': {
        CC11: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Ciência Da Computação\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '3M1',
              locationCode: 'L012',
            },
            {
              timeCode: '3M2',
              locationCode: 'L012',
            },
            {
              timeCode: '3M3',
              locationCode: 'L012',
            },
            {
              timeCode: '4T1',
              locationCode: 'L012',
            },
            {
              timeCode: '4T2',
              locationCode: 'L012',
            },
            {
              timeCode: '4T3',
              locationCode: 'L012',
            },
          ],
          professor: 'Maria Claudia Aguitoni\n',
          optional: 'Não',
        },
      },
      'EN31A - Cálculo Diferencial E Integral 1': {
        EE11: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Eletrônica\n1 - Engenharia Elétrica\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n',
          schedule: [
            {
              timeCode: '2M4',
              locationCode: 'L001',
            },
            {
              timeCode: '2M5',
              locationCode: 'L001',
            },
            {
              timeCode: '3M4',
              locationCode: 'L001',
            },
            {
              timeCode: '3M5',
              locationCode: 'L001',
            },
            {
              timeCode: '4M4',
              locationCode: 'L001',
            },
            {
              timeCode: '4M5',
              locationCode: 'L001',
            },
          ],
          professor: 'David Alexander Chipana Mollinedo\n',
          optional: 'Não',
        },
      },
      'EP31A - Cálculo Diferencial E Integral 1': {
        PE141: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia De Produção\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '3M4',
              locationCode: 'L109',
            },
            {
              timeCode: '3M5',
              locationCode: 'L109',
            },
            {
              timeCode: '3M6',
              locationCode: 'L109',
            },
            {
              timeCode: '4M1',
              locationCode: 'L109',
            },
            {
              timeCode: '4M2',
              locationCode: 'L109',
            },
            {
              timeCode: '4M3',
              locationCode: 'L109',
            },
          ],
          professor: 'Maria Claudia Aguitoni\n',
          optional: 'Não',
        },
      },
      'QM31E - Cálculo Diferencial E Integral 1': {
        AE141: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '2T3',
              locationCode: 'L109',
            },
            {
              timeCode: '2T4',
              locationCode: 'L112',
            },
            {
              timeCode: '2T5',
              locationCode: 'L109',
            },
            {
              timeCode: '3M3',
              locationCode: 'L109',
            },
            {
              timeCode: '3M4',
              locationCode: 'L112',
            },
            {
              timeCode: '3M5',
              locationCode: 'L112',
            },
          ],
          professor: 'Thiago Gilberto Do Prado\n',
          optional: 'Não',
        },
      },
      'BP32A - Cálculo Diferencial E Integral 2': {
        BP21: {
          vacanciesTotal: '90',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors:
            '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '4M4',
              locationCode: 'L005',
            },
            {
              timeCode: '4M5',
              locationCode: 'L005',
            },
            {
              timeCode: '5T2',
              locationCode: 'L005',
            },
            {
              timeCode: '5T3',
              locationCode: 'L005',
            },
          ],
          professor: 'Jose Carlos Alberto De Pontes\n',
          optional: 'Não',
        },
      },
      'CC52E - Cálculo Diferencial E Integral 2': {
        CC21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Ciência Da Computação\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '3M2',
              locationCode: 'L010',
            },
            {
              timeCode: '3M3',
              locationCode: 'L010',
            },
            {
              timeCode: '4M2',
              locationCode: 'L012',
            },
            {
              timeCode: '4M3',
              locationCode: 'L012',
            },
          ],
          professor: 'Jussara Rodrigues Ciappina\n',
          optional: 'Não',
        },
      },
      'EP32A - Cálculo Diferencial E Integral 2': {
        PE241: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '3T4',
              locationCode: 'L110',
            },
            {
              timeCode: '3T5',
              locationCode: 'L110',
            },
            {
              timeCode: '4T4',
              locationCode: 'L104',
            },
            {
              timeCode: '4T5',
              locationCode: 'L104',
            },
          ],
          professor: 'Ednei Felix Reis\n',
          optional: 'Não',
        },
      },
      'QM32B - Cálculo Diferencial E Integral 2': {
        AE241: {
          vacanciesTotal: '68',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '3M1',
              locationCode: 'L108',
            },
            {
              timeCode: '3M2',
              locationCode: 'L108',
            },
            {
              timeCode: '4M2',
              locationCode: 'L103',
            },
            {
              timeCode: '4M3',
              locationCode: 'L103',
            },
          ],
          professor: 'Jose Carlos Alberto De Pontes\n',
          optional: 'Não',
        },
      },
      'BP34A - Cálculo Numérico': {
        BP41: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '1 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '3T2',
              locationCode: 'L008',
            },
            {
              timeCode: '3T3',
              locationCode: 'L008',
            },
            {
              timeCode: '4T2',
              locationCode: 'C202',
            },
            {
              timeCode: '4T2',
              locationCode: 'L004',
            },
            {
              timeCode: '4T3',
              locationCode: 'C202',
            },
            {
              timeCode: '4T3',
              locationCode: 'L004',
            },
          ],
          professor: 'Yara De Souza Tadano\n',
          optional: 'Não',
        },
      },
      'EP35A - Cálculo Numérico': {
        PE541: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'K107',
            },
            {
              timeCode: '2T5',
              locationCode: 'K107',
            },
            {
              timeCode: '4T4',
              locationCode: 'LABOSP1',
            },
            {
              timeCode: '4T5',
              locationCode: 'LABOSP1',
            },
          ],
          professor: 'Angelo Marcelo Tusset\n',
          optional: 'Não',
        },
      },
      'QM34A - Cálculo Numérico': {
        AE441: {
          vacanciesTotal: '50',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2T3',
              locationCode: 'L012',
            },
            {
              timeCode: '2T4',
              locationCode: 'L012',
            },
            {
              timeCode: '3T4',
              locationCode: 'C202',
            },
            {
              timeCode: '3T4',
              locationCode: 'L012',
            },
            {
              timeCode: '3T5',
              locationCode: 'C202',
            },
            {
              timeCode: '3T5',
              locationCode: 'L012',
            },
          ],
          professor: 'Yara De Souza Tadano\n',
          optional: 'Não',
        },
      },
      'CC53E - Cálculo Númerico': {
        CC31: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M4',
              locationCode: 'L012',
            },
            {
              timeCode: '2M5',
              locationCode: 'L012',
            },
            {
              timeCode: '4M4',
              locationCode: 'C202',
            },
            {
              timeCode: '4M5',
              locationCode: 'C202',
            },
          ],
          professor: 'Iara Da Cunha Ribeiro Da Silva\n',
          optional: 'Não',
        },
      },
      'PG0001 - Cálculo Diferencial E Integral 1': {
        EM11: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '4M4',
              locationCode: 'L111',
            },
            {
              timeCode: '4M5',
              locationCode: 'L111',
            },
            {
              timeCode: '5M2',
              locationCode: 'L111',
            },
            {
              timeCode: '5M3',
              locationCode: 'L111',
            },
            {
              timeCode: '6M2',
              locationCode: 'L111',
            },
            {
              timeCode: '6M3',
              locationCode: 'L111',
            },
          ],
          professor: 'Reginaldo De Oliveira\n',
          optional: 'Não',
        },
      },
      'PG0008 - Cálculo Diferencial E Integral 2': {
        EM21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '2M2',
              locationCode: 'CT01',
            },
            {
              timeCode: '2M3',
              locationCode: 'CT01',
            },
            {
              timeCode: '4M2',
              locationCode: 'CT01',
            },
            {
              timeCode: '4M3',
              locationCode: 'CT01',
            },
          ],
          professor: 'Sani De Carvalho Rutz Da Silva\n',
          optional: 'Não',
        },
      },
      'PG0025 - Cálculo Numérico E Aplicações Na Engenharia': {
        EM41: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'K107',
            },
            {
              timeCode: '2T3',
              locationCode: 'K107',
            },
            {
              timeCode: '4T2',
              locationCode: 'LABOSP1',
            },
            {
              timeCode: '4T3',
              locationCode: 'LABOSP1',
            },
          ],
          professor: 'Iara Da Cunha Ribeiro Da Silva\n',
          optional: 'Não',
        },
      },
      'EP33H - Economia': {
        PE341: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Engenharia De Produção\n2 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4M2',
              locationCode: 'K104',
            },
            {
              timeCode: '4M3',
              locationCode: 'K104',
            },
          ],
          professor: 'Regina Negri Pagani\n',
          optional: 'Não',
        },
      },
      'CC56D - Empreendedorismo': {
        CC61: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '3T2',
              locationCode: 'LABOSP2',
            },
            {
              timeCode: '3T3',
              locationCode: 'LABOSP2',
            },
          ],
          professor: 'Eliane Fernandes Pietrovski\n',
          optional: 'Não',
        },
      },
      'QM38F - Empreendedorismo': {
        AE841: {
          vacanciesTotal: '50',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2M2',
              locationCode: 'L002',
            },
            {
              timeCode: '2M3',
              locationCode: 'L002',
            },
          ],
          professor: 'Nelson Ari Canabarro De Oliveira\n',
          optional: 'Não',
        },
      },
      'CC53D - Engenharia De Software 1': {
        CC31: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '3M2',
              locationCode: 'L105',
            },
            {
              timeCode: '3M2',
              locationCode: 'C103',
            },
            {
              timeCode: '3M3',
              locationCode: 'C103',
            },
            {
              timeCode: '3M3',
              locationCode: 'L105',
            },
            {
              timeCode: '6M2',
              locationCode: 'C103',
            },
            {
              timeCode: '6M3',
              locationCode: 'C103',
            },
          ],
          professor: 'Eliana Claudia Mayumi Ishikawa\n',
          optional: 'Não',
        },
      },
      'CC52A - Estrutura De Dados 1': {
        CC21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'C102',
            },
            {
              timeCode: '2T2',
              locationCode: 'L004',
            },
            {
              timeCode: '2T3',
              locationCode: 'C102',
            },
            {
              timeCode: '2T3',
              locationCode: 'L004',
            },
            {
              timeCode: '4M4',
              locationCode: 'L008',
            },
            {
              timeCode: '4M4',
              locationCode: 'C102',
            },
            {
              timeCode: '4M5',
              locationCode: 'L008',
            },
            {
              timeCode: '4M5',
              locationCode: 'C102',
            },
          ],
          professor: 'Simone Bello Kaminski Aires\n',
          optional: 'Não',
        },
      },
      'CC53A - Estrutura De Dados 2': {
        CC31: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '3M4',
              locationCode: 'L103',
            },
            {
              timeCode: '3M4',
              locationCode: 'C104',
            },
            {
              timeCode: '3M5',
              locationCode: 'L103',
            },
            {
              timeCode: '3M5',
              locationCode: 'C104',
            },
            {
              timeCode: '5M4',
              locationCode: 'L114',
            },
            {
              timeCode: '5M4',
              locationCode: 'C104',
            },
            {
              timeCode: '5M5',
              locationCode: 'L114',
            },
            {
              timeCode: '5M5',
              locationCode: 'C104',
            },
          ],
          professor: 'Saulo Jorge Beltrao De Queiroz\n',
          optional: 'Não',
        },
      },
      'BP05F - Filosofia Da Ciência E Da Tecnologia': {
        OPBT: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '3T4',
              locationCode: 'Z001',
            },
            {
              timeCode: '3T5',
              locationCode: 'L004',
            },
          ],
          professor: 'Edson Jacinski\n',
          optional: 'Engenharia De Bioprocessos E Biotecnologia\n',
        },
      },
      'BP32F - Geometria Analítica E Álgebra Linear': {
        BP21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'L104',
            },
            {
              timeCode: '2T5',
              locationCode: 'L104',
            },
            {
              timeCode: '3T4',
              locationCode: 'L104',
            },
            {
              timeCode: '3T5',
              locationCode: 'L104',
            },
            {
              timeCode: '5T4',
              locationCode: 'L104',
            },
            {
              timeCode: '5T5',
              locationCode: 'L104',
            },
          ],
          professor: 'Taiza Alissul Sauer Do Carmo\n',
          optional: 'Não',
        },
        RE42: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '2N1',
              locationCode: 'Z001',
            },
            {
              timeCode: '2N2',
              locationCode: 'Z001',
            },
            {
              timeCode: '2T6',
              locationCode: 'Z001',
            },
            {
              timeCode: '3N1',
              locationCode: 'Z001',
            },
            {
              timeCode: '3N2',
              locationCode: 'Z001',
            },
            {
              timeCode: '3T6',
              locationCode: 'Z001',
            },
          ],
          professor: 'Iara Da Cunha Ribeiro Da Silva\n',
          optional: 'Não',
        },
      },
      'CC51D - Geometria Analítica E Álgebra Linear': {
        CC11: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Ciência Da Computação\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'L-013',
            },
            {
              timeCode: '2T3',
              locationCode: 'L-013',
            },
            {
              timeCode: '3T2',
              locationCode: 'L-013',
            },
            {
              timeCode: '3T3',
              locationCode: 'L-013',
            },
            {
              timeCode: '5T2',
              locationCode: 'L-013',
            },
            {
              timeCode: '5T3',
              locationCode: 'L-013',
            },
          ],
          professor: 'Taiza Alissul Sauer Do Carmo\n',
          optional: 'Não',
        },
      },
      'EN31D - Geometria Analítica E Álgebra Linear': {
        EE11: {
          vacanciesTotal: '68',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Eletrônica\n1 - Engenharia Elétrica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2M2',
              locationCode: 'L008',
            },
            {
              timeCode: '2M3',
              locationCode: 'L008',
            },
            {
              timeCode: '3M2',
              locationCode: 'L008',
            },
            {
              timeCode: '3M3',
              locationCode: 'L008',
            },
            {
              timeCode: '4T4',
              locationCode: 'L008',
            },
            {
              timeCode: '4T5',
              locationCode: 'L008',
            },
          ],
          professor: 'Marcos Cesar Verges\n',
          optional: 'Não',
        },
      },
      'EP31D - Geometria Analítica E Álgebra Linear': {
        PE141: {
          vacanciesTotal: '58',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2M2',
              locationCode: 'L112',
            },
            {
              timeCode: '2M3',
              locationCode: 'L112',
            },
            {
              timeCode: '4M4',
              locationCode: 'L112',
            },
            {
              timeCode: '4M5',
              locationCode: 'L112',
            },
            {
              timeCode: '5M4',
              locationCode: 'L112',
            },
            {
              timeCode: '5M5',
              locationCode: 'L112',
            },
          ],
          professor: 'Nilceia Aparecida Maciel Pinheiro\n',
          optional: 'Não',
        },
      },
      'QM31B - Geometria Analítica E Álgebra Linear': {
        AE141: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '2T1',
              locationCode: 'L112',
            },
            {
              timeCode: '2T2',
              locationCode: 'L112',
            },
            {
              timeCode: '4M4',
              locationCode: 'L012',
            },
            {
              timeCode: '4M5',
              locationCode: 'L012',
            },
            {
              timeCode: '5T2',
              locationCode: 'L012',
            },
            {
              timeCode: '5T3',
              locationCode: 'L012',
            },
          ],
          professor: 'Ana Paula Milanez\n',
          optional: 'Não',
        },
      },
      'PG0002 - Geometria Analítica E Álgebra Linear': {
        EM11: {
          vacanciesTotal: '50',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'L106',
            },
            {
              timeCode: '2T3',
              locationCode: 'L106',
            },
            {
              timeCode: '4M2',
              locationCode: 'L010',
            },
            {
              timeCode: '4M3',
              locationCode: 'L010',
            },
            {
              timeCode: '5M4',
              locationCode: 'L111',
            },
            {
              timeCode: '5M5',
              locationCode: 'L111',
            },
          ],
          professor: 'David Alexander Chipana Mollinedo\n',
          optional: 'Não',
        },
      },
      'CC56A - Inteligência Artificial': {
        CC61: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'C203',
            },
            {
              timeCode: '2T5',
              locationCode: 'C203',
            },
            {
              timeCode: '4T4',
              locationCode: 'C203',
            },
            {
              timeCode: '4T5',
              locationCode: 'C203',
            },
          ],
          professor: 'Helyane Bronoski Borges\n',
          optional: 'Não',
        },
      },
      'CC55E - Interação Humano-Computador': {
        CC51: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M2',
              locationCode: 'C202',
            },
            {
              timeCode: '2M3',
              locationCode: 'C202',
            },
            {
              timeCode: '3M4',
              locationCode: 'C202',
            },
            {
              timeCode: '3M5',
              locationCode: 'C202',
            },
          ],
          professor: 'Geraldo Ranthum\n',
          optional: 'Não',
        },
      },
      'EP34A - Introdução À Administração': {
        PE441: {
          vacanciesTotal: '50',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia De Produção\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'L114',
            },
            {
              timeCode: '2T3',
              locationCode: 'L114',
            },
            {
              timeCode: '6T2',
              locationCode: 'LABOSP3',
            },
            {
              timeCode: '6T3',
              locationCode: 'LABOSP3',
            },
          ],
          professor: 'Claudia Tania Picinin\n',
          optional: 'Não',
        },
      },
      'CC52D - Laboratório De Estrutura De Dados': {
        CC21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '5M4',
              locationCode: 'C102',
            },
            {
              timeCode: '5M5',
              locationCode: 'C102',
            },
          ],
          professor: 'Simone Bello Kaminski Aires\n',
          optional: 'Não',
        },
      },
      'CC38L - Libras': {
        OPTHA: {
          vacanciesTotal: '30',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '3T2',
              locationCode: 'L105',
            },
            {
              timeCode: '3T3',
              locationCode: 'L105',
            },
          ],
          professor: 'Luiz Andre Brito Coelho\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\nBacharelado Em Ciência Da Computação\n',
        },
        OPTHB: {
          vacanciesTotal: '30',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n1 - Engenharia Mecânica\n1 - Ciência Da Computação\n1 - Engenharia De Produção\n1 - Eng Bioproc E Biotec\n1 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '4M4',
              locationCode: 'L004',
            },
            {
              timeCode: '4M5',
              locationCode: 'L004',
            },
          ],
          professor: 'Luiz Andre Brito Coelho\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\nBacharelado Em Ciência Da Computação\n',
        },
      },
      'CC54A - Linguagens Formais, Autômatos': {
        CC41: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '3M4',
              locationCode: 'L003',
            },
            {
              timeCode: '3M5',
              locationCode: 'L003',
            },
            {
              timeCode: '5T4',
              locationCode: 'L004',
            },
            {
              timeCode: '5T5',
              locationCode: 'L004',
            },
          ],
          professor: 'Gleifer Vaz Alves\n',
          optional: 'Não',
        },
      },
      'CC52C - Lógica Para Computação': {
        CC21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'C202',
            },
            {
              timeCode: '2T5',
              locationCode: 'C202',
            },
            {
              timeCode: '4T4',
              locationCode: 'C203',
            },
            {
              timeCode: '4T5',
              locationCode: 'C203',
            },
          ],
          professor: 'Gleifer Vaz Alves\n',
          optional: 'Não',
        },
      },
      'CC51B - Matemática Discreta': {
        CC11: {
          vacanciesTotal: '45',
          vacanciesFreshman: '44',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4M2',
              locationCode: 'L008',
            },
            {
              timeCode: '4M3',
              locationCode: 'L008',
            },
            {
              timeCode: '6M4',
              locationCode: 'L008',
            },
            {
              timeCode: '6M5',
              locationCode: 'L008',
            },
          ],
          professor: 'Sheila Morais De Almeida\n',
          optional: 'Não',
        },
        CCRE: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '7M2',
              locationCode: 'Z001',
            },
            {
              timeCode: '7M3',
              locationCode: 'Z001',
            },
            {
              timeCode: '7M4',
              locationCode: 'Z001',
            },
            {
              timeCode: '7M5',
              locationCode: 'Z001',
            },
          ],
          professor: 'Sheila Morais De Almeida\n',
          optional: 'Não',
        },
      },
      'BP35H - Metodologia Da Pesquisa': {
        BP51: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '1 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'K102',
            },
            {
              timeCode: '2T3',
              locationCode: 'K102',
            },
          ],
          professor: 'Antonio Carlos Frasson\n',
          optional: 'Não',
        },
      },
      'CC56B - Metodologia Da Pesquisa': {
        CC61: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'C203',
            },
            {
              timeCode: '2T3',
              locationCode: 'C203',
            },
          ],
          professor: 'Helyane Bronoski Borges\n',
          optional: 'Não',
        },
      },
      'EP33G - Metodologia Da Pesquisa': {
        PE341: {
          vacanciesTotal: '47',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '4T2',
              locationCode: 'L112',
            },
            {
              timeCode: '4T3',
              locationCode: 'L112',
            },
          ],
          professor: 'Jose Alves De Faria Filho\n',
          optional: 'Não',
        },
      },
      'CC53B - Organização De Computadores': {
        CC31: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'L105',
            },
            {
              timeCode: '2T3',
              locationCode: 'L105',
            },
            {
              timeCode: '6T4',
              locationCode: 'L105',
            },
            {
              timeCode: '6T5',
              locationCode: 'L105',
            },
          ],
          professor: 'Erikson Freitas De Morais\n',
          optional: 'Não',
        },
      },
      'BP33G - Probabilidade E Estatística': {
        BP31: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Eng Bioproc E Biotec\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n',
          schedule: [
            {
              timeCode: '5M4',
              locationCode: 'L102',
            },
            {
              timeCode: '5M5',
              locationCode: 'L102',
            },
            {
              timeCode: '6M4',
              locationCode: 'L102',
            },
            {
              timeCode: '6M5',
              locationCode: 'L102',
            },
          ],
          professor: 'Marcos Tadeu Andrade Cordeiro\n',
          optional: 'Não',
        },
      },
      'CC52F - Probabilidade E Estatística': {
        CC21: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '5M2',
              locationCode: 'L102',
            },
            {
              timeCode: '5M3',
              locationCode: 'L102',
            },
            {
              timeCode: '6T4',
              locationCode: 'L102',
            },
            {
              timeCode: '6T5',
              locationCode: 'L102',
            },
          ],
          professor: 'Marcos Tadeu Andrade Cordeiro\n',
          optional: 'Não',
        },
      },
      'EP32D - Probabilidade E Estatística': {
        PE241: {
          vacanciesTotal: '49',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia De Produção\n2 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '2M4',
              locationCode: 'L107',
            },
            {
              timeCode: '2M5',
              locationCode: 'L107',
            },
            {
              timeCode: '3M4',
              locationCode: 'L107',
            },
            {
              timeCode: '3M5',
              locationCode: 'L107',
            },
          ],
          professor: 'Guatacara Dos Santos Junior\n',
          optional: 'Não',
        },
      },
      'QM35E - Probabilidade E Estatística': {
        AE541: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Química\n2 - Engenharia Mecânica\n2 - Ciência Da Computação\n2 - Engenharia Eletrônica\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2M2',
              locationCode: 'L005',
            },
            {
              timeCode: '2M3',
              locationCode: 'L005',
            },
            {
              timeCode: '5T2',
              locationCode: 'L102',
            },
            {
              timeCode: '5T3',
              locationCode: 'L102',
            },
          ],
          professor: 'Guatacara Dos Santos Junior\n',
          optional: 'Não',
        },
      },
      'CC35C - Programação De Aplicativos': {
        OPTC: {
          vacanciesTotal: '20',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '6M2',
              locationCode: 'C203',
            },
            {
              timeCode: '6M3',
              locationCode: 'C203',
            },
            {
              timeCode: '6M4',
              locationCode: 'C203',
            },
            {
              timeCode: '6M5',
              locationCode: 'C203',
            },
          ],
          professor: 'Monica Hoeldtke Pietruchinski\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
        },
      },
      'CC37X - Programação De Dispositivos Móveis': {
        OPTC: {
          vacanciesTotal: '16',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'Z001',
            },
            {
              timeCode: '2T5',
              locationCode: 'Z001',
            },
            {
              timeCode: '5T4',
              locationCode: 'Z001',
            },
            {
              timeCode: '5T5',
              locationCode: 'Z001',
            },
          ],
          professor: 'Diego Roberto Antunes\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\nBacharelado Em Ciência Da Computação\n',
        },
      },
      'CC54D - Programação Orientada A Objetos': {
        CC41: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M2',
              locationCode: 'C203',
            },
            {
              timeCode: '2M3',
              locationCode: 'C203',
            },
            {
              timeCode: '5M2',
              locationCode: 'C103',
            },
            {
              timeCode: '5M3',
              locationCode: 'C103',
            },
          ],
          professor: 'Vinicius Camargo Andrade\n',
          optional: 'Não',
        },
      },
      'PG0009 - Probabilidade E Estatística': {
        EM21: {
          vacanciesTotal: '77',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Engenharia De Produção\n2 - Eng Bioproc E Biotec\n2 - Engenharia Elétrica\n',
          schedule: [
            {
              timeCode: '2M4',
              locationCode: 'L003',
            },
            {
              timeCode: '2M5',
              locationCode: 'L003',
            },
            {
              timeCode: '6M2',
              locationCode: 'L004',
            },
            {
              timeCode: '6M3',
              locationCode: 'L004',
            },
          ],
          professor: 'Marcos Tadeu Andrade Cordeiro\n',
          optional: 'Não',
        },
      },
      'ET05A - Qualidade De Vida': {
        OPTHA: {
          vacanciesTotal: '23',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'L112',
            },
            {
              timeCode: '2T5',
              locationCode: 'L112',
            },
          ],
          professor: 'Adriana Aparecida Guimaraes\n',
          optional: 'Engenharia Eletrônica\n',
        },
        OPTHB: {
          vacanciesTotal: '20',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '',
          schedule: [
            {
              timeCode: '3M2',
              locationCode: 'L001',
            },
            {
              timeCode: '3M3',
              locationCode: 'L001',
            },
          ],
          professor: 'Adriana Aparecida Guimaraes\n',
          optional: 'Engenharia Eletrônica\n',
        },
        OPTHC: {
          vacanciesTotal: '20',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '',
          schedule: [
            {
              timeCode: '3M4',
              locationCode: 'L007',
            },
            {
              timeCode: '3M5',
              locationCode: 'L007',
            },
          ],
          professor: 'Adriana Aparecida Guimaraes\n',
          optional: 'Engenharia Eletrônica\n',
        },
        OPTHD: {
          vacanciesTotal: '20',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'L113',
            },
            {
              timeCode: '2T3',
              locationCode: 'L113',
            },
          ],
          professor: 'Adriana Aparecida Guimaraes\n',
          optional: 'Engenharia Eletrônica\n',
        },
        OPTHE: {
          vacanciesTotal: '20',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '',
          schedule: [
            {
              timeCode: '4M2',
              locationCode: 'GINÁSIO',
            },
            {
              timeCode: '4M3',
              locationCode: 'GINÁSIO',
            },
          ],
          professor: 'Adriana Aparecida Guimaraes\n',
          optional: 'Engenharia Eletrônica\n',
        },
      },
      'CC55C - Redes De Computadores 1': {
        CC51: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M4',
              locationCode: 'C203',
            },
            {
              timeCode: '2M5',
              locationCode: 'C203',
            },
            {
              timeCode: '3M2',
              locationCode: 'C203',
            },
            {
              timeCode: '3M3',
              locationCode: 'C203',
            },
          ],
          professor: 'Augusto Foronda\n',
          optional: 'Não',
        },
      },
      'CC37Z - Redes De Computadores 2': {
        OPTC: {
          vacanciesTotal: '18',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M5',
              locationCode: 'C207',
            },
            {
              timeCode: '3M4',
              locationCode: 'C207',
            },
            {
              timeCode: '3M5',
              locationCode: 'C207',
            },
          ],
          professor: 'Lourival Aparecido De Gois\n',
          optional: 'Curso De Bacharelado Em Ciência Da Computação.\n',
        },
      },
      'CC56C - Sistemas Distribuidos': {
        CC61: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4T2',
              locationCode: 'C104',
            },
            {
              timeCode: '4T3',
              locationCode: 'C104',
            },
            {
              timeCode: '5T2',
              locationCode: 'C104',
            },
            {
              timeCode: '5T3',
              locationCode: 'C104',
            },
          ],
          professor: 'Richard Duarte Ribeiro\n',
          optional: 'Não',
        },
      },
      'CC54C - Sistemas Microcontrolados': {
        CC41: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'V1-102',
            },
            {
              timeCode: '2T3',
              locationCode: 'V1-102',
            },
            {
              timeCode: '4T2',
              locationCode: 'V1-102',
            },
            {
              timeCode: '4T3',
              locationCode: 'V1-102',
            },
          ],
          professor: 'Cristhiane Goncalves\n',
          optional: 'Não',
        },
      },
      'CC54B - Sistemas Operacionais': {
        CC41: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'L001',
            },
            {
              timeCode: '2T5',
              locationCode: 'L001',
            },
            {
              timeCode: '6T4',
              locationCode: 'L001',
            },
            {
              timeCode: '6T5',
              locationCode: 'L001',
            },
          ],
          professor: 'Andre Koscianski\n',
          optional: 'Não',
        },
      },
      'CC57A - Trabalho De Conclusão De Curso 1': {
        CC71: {
          vacanciesTotal: '21',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4T2',
              locationCode: 'C207',
            },
            {
              timeCode: '4T3',
              locationCode: 'C207',
            },
          ],
          professor: 'Helyane Bronoski Borges\n',
          optional: 'Não',
        },
      },
      'CC38A - Trabalho De Conclusão De Curso 2': {
        IB841: {
          vacanciesTotal: '99',
          vacanciesFreshman: '0',
          reservationType: 'Sem Reserva',
          priorityMajors: '',
          schedule: [
            {
              timeCode: ' ',
              locationCode: '',
            },
          ],
          professor: 'Helyane Bronoski Borges\n',
          optional: 'Não',
        },
      },
      'CC39B - Tópicos Em Engenharia De Software': {
        OPTC: {
          vacanciesTotal: '10',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M1',
              locationCode: 'Z001',
            },
            {
              timeCode: '2M2',
              locationCode: 'Z001',
            },
            {
              timeCode: '2M3',
              locationCode: 'Z001',
            },
            {
              timeCode: '2M4',
              locationCode: 'Z001',
            },
          ],
          professor: 'Simone Nasser Matos\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
        },
      },
      'CC39C - Tópicos Em Inteligência Artificial': {
        OPTC: {
          vacanciesTotal: '10',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '3T4',
              locationCode: 'Z001',
            },
            {
              timeCode: '3T5',
              locationCode: 'Z001',
            },
            {
              timeCode: '5T4',
              locationCode: 'Z001',
            },
            {
              timeCode: '5T5',
              locationCode: 'Z001',
            },
          ],
          professor: 'Hugo Valadares Siqueira\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
        },
      },
      'CC02U - Tópicos Em Programação 1': {
        OPTC: {
          vacanciesTotal: '10',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '4T2',
              locationCode: 'Z001',
            },
            {
              timeCode: '4T3',
              locationCode: 'Z001',
            },
            {
              timeCode: '5T2',
              locationCode: 'Z001',
            },
            {
              timeCode: '5T3',
              locationCode: 'Z001',
            },
          ],
          professor: 'Luiz Rafael Schmitke\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação\nCurso De Bacharelado Em Ciência Da Computação.\n',
        },
      },
      'CC39J - Tópicos Em Redes Sem Fio': {
        OPTC: {
          vacanciesTotal: '10',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2M4',
              locationCode: 'Z001',
            },
            {
              timeCode: '2M5',
              locationCode: 'Z001',
            },
            {
              timeCode: '4M4',
              locationCode: 'Z001',
            },
            {
              timeCode: '4M5',
              locationCode: 'Z001',
            },
          ],
          professor: 'Saulo Jorge Beltrao De Queiroz\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
        },
      },
      'CC02X - Visão Computacional': {
        OPTC: {
          vacanciesTotal: '10',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '2T4',
              locationCode: 'Z001',
            },
            {
              timeCode: '2T5',
              locationCode: 'Z001',
            },
            {
              timeCode: '6T2',
              locationCode: 'Z001',
            },
            {
              timeCode: '6T3',
              locationCode: 'Z001',
            },
          ],
          professor: 'Erikson Freitas De Morais\n',
          optional:
            'Curso De Bacharelado Em Ciência Da Computação.\nCurso De Bacharelado Em Ciência Da Computação\n',
        },
      },
      'CC53F - Ética Profissão E Cidadania': {
        CC31: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors: '1 - Ciência Da Computação\n',
          schedule: [
            {
              timeCode: '5T4',
              locationCode: 'L005',
            },
            {
              timeCode: '5T5',
              locationCode: 'L005',
            },
          ],
          professor: 'Katya Cristina De Lima Picanco\n',
          optional: 'Não',
        },
      },
      'PG0039 - Ética, Profissão E Cidadania': {
        EM51: {
          vacanciesTotal: '44',
          vacanciesFreshman: '0',
          reservationType: 'Fechada',
          priorityMajors:
            '1 - Engenharia Mecânica\n2 - Engenharia Química\n2 - Ciência Da Computação\n2 - Eng Bioproc E Biotec\n',
          schedule: [
            {
              timeCode: '2T2',
              locationCode: 'K106',
            },
            {
              timeCode: '2T3',
              locationCode: 'K106',
            },
          ],
          professor: 'Katya Cristina De Lima Picanco\n',
          optional: 'Não',
        },
      },
    }),
    []
  );

  return subjects;
};

export default useSubjects;
