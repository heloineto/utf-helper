import { useMemo } from 'react';

const useCalendarData = () => {
  const yearInfo = useMemo(
    () => ({
      months: [
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
            ],
            [
              {
                day: '2',
              },
              {
                day: '3',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '4',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '5',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '6',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '7',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '8',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
            ],
            [
              {
                day: '9',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '10',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '11',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '12',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '13',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '14',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '15',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
            ],
            [
              {
                day: '16',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '17',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '18',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '19',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '20',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '21',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '22',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
            ],
            [
              {
                day: '23',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '24',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '25',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '26',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '27',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '28',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '29',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
            ],
            [
              {
                day: '30',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '31',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '01',
                label: 'Confraternização Universal',
              },
              {
                dayStart: '03',
                dayEnd: '31',
                operation: 'a',
                label: 'Férias Docentes',
              },
            ],
            parsed: {
              '1': {
                day: 1,
                label: 'Confraternização Universal',
              },
              '3': {
                day: 3,
                label: 'Férias Docentes',
              },
              '4': {
                day: 4,
                label: 'Férias Docentes',
              },
              '5': {
                day: 5,
                label: 'Férias Docentes',
              },
              '6': {
                day: 6,
                label: 'Férias Docentes',
              },
              '7': {
                day: 7,
                label: 'Férias Docentes',
              },
              '8': {
                day: 8,
                label: 'Férias Docentes',
              },
              '9': {
                day: 9,
                label: 'Férias Docentes',
              },
              '10': {
                day: 10,
                label: 'Férias Docentes',
              },
              '11': {
                day: 11,
                label: 'Férias Docentes',
              },
              '12': {
                day: 12,
                label: 'Férias Docentes',
              },
              '13': {
                day: 13,
                label: 'Férias Docentes',
              },
              '14': {
                day: 14,
                label: 'Férias Docentes',
              },
              '15': {
                day: 15,
                label: 'Férias Docentes',
              },
              '16': {
                day: 16,
                label: 'Férias Docentes',
              },
              '17': {
                day: 17,
                label: 'Férias Docentes',
              },
              '18': {
                day: 18,
                label: 'Férias Docentes',
              },
              '19': {
                day: 19,
                label: 'Férias Docentes',
              },
              '20': {
                day: 20,
                label: 'Férias Docentes',
              },
              '21': {
                day: 21,
                label: 'Férias Docentes',
              },
              '22': {
                day: 22,
                label: 'Férias Docentes',
              },
              '23': {
                day: 23,
                label: 'Férias Docentes',
              },
              '24': {
                day: 24,
                label: 'Férias Docentes',
              },
              '25': {
                day: 25,
                label: 'Férias Docentes',
              },
              '26': {
                day: 26,
                label: 'Férias Docentes',
              },
              '27': {
                day: 27,
                label: 'Férias Docentes',
              },
              '28': {
                day: 28,
                label: 'Férias Docentes',
              },
              '29': {
                day: 29,
                label: 'Férias Docentes',
              },
              '30': {
                day: 30,
                label: 'Férias Docentes',
              },
              '31': {
                day: 31,
                label: 'Férias Docentes',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '',
              },
              {
                day: '',
              },
              {
                day: '1',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '2',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '3',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '4',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '5',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
            ],
            [
              {
                day: '6',
              },
              {
                day: '7',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '8',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '9',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '10',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '11',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '12',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
            ],
            [
              {
                day: '13',
              },
              {
                day: '14',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '15',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '16',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '17',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '18',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '19',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
            ],
            [
              {
                day: '20',
              },
              {
                day: '21',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '22',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '23',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '24',
              },
              {
                day: '25',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '26',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
            ],
            [
              {
                day: '27',
              },
              {
                day: '28',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '02',
                dayEnd: '23',
                operation: 'a',
                label: 'Planejamento/Capacitação',
              },
              {
                dayStart: '25',
                dayEnd: '26',
                operation: 'e',
                label: 'Planejamento/Capacitação',
              },
              {
                dayStart: '28',
                label: 'Recesso',
              },
            ],
            parsed: {
              '2': {
                day: 2,
                label: 'Planejamento/Capacitação',
              },
              '3': {
                day: 3,
                label: 'Planejamento/Capacitação',
              },
              '4': {
                day: 4,
                label: 'Planejamento/Capacitação',
              },
              '5': {
                day: 5,
                label: 'Planejamento/Capacitação',
              },
              '6': {
                day: 6,
                label: 'Planejamento/Capacitação',
              },
              '7': {
                day: 7,
                label: 'Planejamento/Capacitação',
              },
              '8': {
                day: 8,
                label: 'Planejamento/Capacitação',
              },
              '9': {
                day: 9,
                label: 'Planejamento/Capacitação',
              },
              '10': {
                day: 10,
                label: 'Planejamento/Capacitação',
              },
              '11': {
                day: 11,
                label: 'Planejamento/Capacitação',
              },
              '12': {
                day: 12,
                label: 'Planejamento/Capacitação',
              },
              '13': {
                day: 13,
                label: 'Planejamento/Capacitação',
              },
              '14': {
                day: 14,
                label: 'Planejamento/Capacitação',
              },
              '15': {
                day: 15,
                label: 'Planejamento/Capacitação',
              },
              '16': {
                day: 16,
                label: 'Planejamento/Capacitação',
              },
              '17': {
                day: 17,
                label: 'Planejamento/Capacitação',
              },
              '18': {
                day: 18,
                label: 'Planejamento/Capacitação',
              },
              '19': {
                day: 19,
                label: 'Planejamento/Capacitação',
              },
              '20': {
                day: 20,
                label: 'Planejamento/Capacitação',
              },
              '21': {
                day: 21,
                label: 'Planejamento/Capacitação',
              },
              '22': {
                day: 22,
                label: 'Planejamento/Capacitação',
              },
              '23': {
                day: 23,
                label: 'Planejamento/Capacitação',
              },
              '25': {
                day: 25,
                label: 'Planejamento/Capacitação',
              },
              '26': {
                day: 26,
                label: 'Planejamento/Capacitação',
              },
              '28': {
                day: 28,
                label: 'Recesso',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '2',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
              {
                day: '◯',
                legend: {
                  symbol: '◯',
                  label: 'Início / Término das aulas',
                },
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
            ],
            [
              {
                day: '6',
              },
              {
                day: '7',
              },
              {
                day: '8',
              },
              {
                day: '9',
              },
              {
                day: '10',
              },
              {
                day: '11',
              },
              {
                day: '12',
              },
            ],
            [
              {
                day: '13',
              },
              {
                day: '14',
              },
              {
                day: '15',
              },
              {
                day: '16',
              },
              {
                day: '17',
              },
              {
                day: '18',
              },
              {
                day: '19',
              },
            ],
            [
              {
                day: '20',
              },
              {
                day: '21',
              },
              {
                day: '22',
              },
              {
                day: '23',
              },
              {
                day: '24',
              },
              {
                day: '25',
              },
              {
                day: '26',
              },
            ],
            [
              {
                day: '27',
              },
              {
                day: '28',
              },
              {
                day: '29',
              },
              {
                day: '30',
              },
              {
                day: '31',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '01',
                label: 'Carnaval',
              },
              {
                dayStart: '02',
                label: 'Recesso (Cinzas)',
              },
              {
                dayStart: '03',
                label: 'Início do 1º semestre de 2022',
              },
            ],
            parsed: {
              '1': {
                day: 1,
                label: 'Carnaval',
              },
              '2': {
                day: 2,
                label: 'Recesso (Cinzas)',
              },
              '3': {
                day: 3,
                label: 'Início do 1º semestre de 2022',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
              },
              {
                day: '2',
              },
            ],
            [
              {
                day: '3',
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '6',
              },
              {
                day: '7',
              },
              {
                day: '8',
              },
              {
                day: '9',
              },
            ],
            [
              {
                day: '10',
              },
              {
                day: '11',
              },
              {
                day: '12',
              },
              {
                day: '13',
              },
              {
                day: '14',
              },
              {
                day: '15',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '16',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
            ],
            [
              {
                day: '17',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '18',
              },
              {
                day: '19',
              },
              {
                day: '20',
              },
              {
                day: '21',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '22',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
              {
                day: '23',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
            ],
            [
              {
                day: '24',
              },
              {
                day: '25',
              },
              {
                day: '26',
              },
              {
                day: '27',
              },
              {
                day: '28',
              },
              {
                day: '29',
              },
              {
                day: '30',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '15',
                label: 'Paixão de Cristo',
              },
              {
                dayStart: '16',
                label: 'Recesso (Sábado de Aleluia)',
              },
              {
                dayStart: '17',
                label: 'Páscoa',
              },
              {
                dayStart: '21',
                label: 'Tiradentes',
              },
              {
                dayStart: '22',
                dayEnd: '23',
                operation: 'a',
                label: 'Recesso',
              },
            ],
            parsed: {
              '15': {
                day: 15,
                label: 'Paixão de Cristo',
              },
              '16': {
                day: 16,
                label: 'Recesso (Sábado de Aleluia)',
              },
              '17': {
                day: 17,
                label: 'Páscoa',
              },
              '21': {
                day: 21,
                label: 'Tiradentes',
              },
              '22': {
                day: 22,
                label: 'Recesso',
              },
              '23': {
                day: 23,
                label: 'Recesso',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '1',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '2',
              },
              {
                day: '3',
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '6',
              },
              {
                day: '7',
              },
            ],
            [
              {
                day: '8',
              },
              {
                day: '9',
              },
              {
                day: '10',
              },
              {
                day: '11',
              },
              {
                day: '12',
              },
              {
                day: '13',
              },
              {
                day: '14',
              },
            ],
            [
              {
                day: '15',
              },
              {
                day: '16',
              },
              {
                day: '17',
              },
              {
                day: '18',
              },
              {
                day: '19',
              },
              {
                day: '20',
              },
              {
                day: '21',
              },
            ],
            [
              {
                day: '22',
              },
              {
                day: '23',
              },
              {
                day: '24',
              },
              {
                day: '25',
              },
              {
                day: '26',
              },
              {
                day: '27',
              },
              {
                day: '28',
              },
            ],
            [
              {
                day: '29',
              },
              {
                day: '30',
              },
              {
                day: '31',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '5',
              },
              {
                day: '5',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '01',
                label: 'Dia Mundial do Trabalho',
              },
            ],
            parsed: {
              '1': {
                day: 1,
                label: 'Dia Mundial do Trabalho',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
              },
              {
                day: '2',
              },
              {
                day: '3',
              },
              {
                day: '4',
              },
            ],
            [
              {
                day: '5',
              },
              {
                day: '6',
              },
              {
                day: '7',
              },
              {
                day: '8',
              },
              {
                day: '9',
              },
              {
                day: '10',
              },
              {
                day: '11',
              },
            ],
            [
              {
                day: '12',
              },
              {
                day: '13',
              },
              {
                day: '14',
              },
              {
                day: '15',
              },
              {
                day: '16',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '17',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
              {
                day: '18',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
            ],
            [
              {
                day: '19',
              },
              {
                day: '20',
              },
              {
                day: '21',
              },
              {
                day: '22',
              },
              {
                day: '23',
              },
              {
                day: '24',
              },
              {
                day: '25',
              },
            ],
            [
              {
                day: '26',
              },
              {
                day: '27',
              },
              {
                day: '28',
              },
              {
                day: '29',
              },
              {
                day: '30',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '4',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '16',
                label: 'Corpus Christi',
              },
              {
                dayStart: '17',
                label: 'Recesso',
              },
              {
                dayStart: '18',
                label: 'Recesso',
              },
            ],
            parsed: {
              '16': {
                day: 16,
                label: 'Corpus Christi',
              },
              '17': {
                day: 17,
                label: 'Recesso',
              },
              '18': {
                day: 18,
                label: 'Recesso',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
              },
              {
                day: '2',
              },
            ],
            [
              {
                day: '3',
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '◯',
                legend: {
                  color: '#66cc00',
                  label: 'Conclusão das Atividades Docentes',
                },
              },
              {
                day: '7',
                legend: {
                  color: '#6666ff',
                  label: 'Finalização dos Diários de Classe',
                },
              },
              {
                day: '8',
                legend: {
                  color: '#6666ff',
                  label: 'Finalização dos Diários de Classe',
                },
              },
              {
                day: '9',
                legend: {
                  color: '#6666ff',
                  label: 'Finalização dos Diários de Classe',
                },
              },
            ],
            [
              {
                day: '10',
              },
              {
                day: '11',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '12',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '13',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '14',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '15',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '16',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
            ],
            [
              {
                day: '17',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '18',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '19',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '20',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '21',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '22',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '23',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
            ],
            [
              {
                day: '24',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '25',
                legend: {
                  color: '#ffff00',
                  label: 'Férias',
                },
              },
              {
                day: '26',
                legend: {
                  color: '#ffcc00',
                  label: 'Feriado Local',
                },
              },
              {
                day: '27',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '28',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '29',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '30',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
            ],
            [
              {
                day: '31',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '06',
                label: 'Término do 1º semestre/2022',
              },
              {
                dayStart: '06',
                label: 'Conclusão das Atividades Docentes',
              },
              {
                dayStart: '07',
                dayEnd: '09',
                operation: 'a',
                label: 'Finalização dos Diários de Classe',
              },
              {
                dayStart: '11',
                dayEnd: '25',
                operation: 'a',
                label: 'Férias docentes',
              },
              {
                dayStart: '26',
                label: 'Padroeira de Ponta Grossa',
              },
              {
                dayStart: '27',
                dayEnd: '30',
                operation: 'a',
                label: 'Planejamento/Capacitação',
              },
            ],
            parsed: {
              '6': {
                day: 6,
                label: 'Conclusão das Atividades Docentes',
              },
              '7': {
                day: 7,
                label: 'Finalização dos Diários de Classe',
              },
              '8': {
                day: 8,
                label: 'Finalização dos Diários de Classe',
              },
              '9': {
                day: 9,
                label: 'Finalização dos Diários de Classe',
              },
              '11': {
                day: 11,
                label: 'Férias docentes',
              },
              '12': {
                day: 12,
                label: 'Férias docentes',
              },
              '13': {
                day: 13,
                label: 'Férias docentes',
              },
              '14': {
                day: 14,
                label: 'Férias docentes',
              },
              '15': {
                day: 15,
                label: 'Férias docentes',
              },
              '16': {
                day: 16,
                label: 'Férias docentes',
              },
              '17': {
                day: 17,
                label: 'Férias docentes',
              },
              '18': {
                day: 18,
                label: 'Férias docentes',
              },
              '19': {
                day: 19,
                label: 'Férias docentes',
              },
              '20': {
                day: 20,
                label: 'Férias docentes',
              },
              '21': {
                day: 21,
                label: 'Férias docentes',
              },
              '22': {
                day: 22,
                label: 'Férias docentes',
              },
              '23': {
                day: 23,
                label: 'Férias docentes',
              },
              '24': {
                day: 24,
                label: 'Férias docentes',
              },
              '25': {
                day: 25,
                label: 'Férias docentes',
              },
              '26': {
                day: 26,
                label: 'Padroeira de Ponta Grossa',
              },
              '27': {
                day: 27,
                label: 'Planejamento/Capacitação',
              },
              '28': {
                day: 28,
                label: 'Planejamento/Capacitação',
              },
              '29': {
                day: 29,
                label: 'Planejamento/Capacitação',
              },
              '30': {
                day: 30,
                label: 'Planejamento/Capacitação',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '1',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '2',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '3',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '4',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '5',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '6',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
            ],
            [
              {
                day: '7',
              },
              {
                day: '△',
              },
              {
                day: '9',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '10',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '◯',
              },
              {
                day: '12',
              },
              {
                day: '13',
              },
            ],
            [
              {
                day: '14',
              },
              {
                day: '15',
              },
              {
                day: '16',
              },
              {
                day: '17',
              },
              {
                day: '18',
              },
              {
                day: '19',
              },
              {
                day: '20',
              },
            ],
            [
              {
                day: '21',
              },
              {
                day: '22',
              },
              {
                day: '23',
              },
              {
                day: '24',
              },
              {
                day: '25',
              },
              {
                day: '26',
              },
              {
                day: '27',
              },
            ],
            [
              {
                day: '28',
              },
              {
                day: '29',
              },
              {
                day: '30',
              },
              {
                day: '31',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '01',
                dayEnd: '06',
                operation: 'a',
                label: 'Planejamento/Capacitação',
              },
              {
                dayStart: '08',
                label: 'Início Atividades Acad. p/ Calouros',
              },
              {
                dayStart: '08',
                label: 'Aula Magna - Todos os Campi',
              },
              {
                dayStart: '09',
                dayEnd: '10',
                operation: 'e',
                label: 'Planejamento/Capacitação',
              },
              {
                dayStart: '11',
                label: 'Início do 2º semestre/2022',
              },
            ],
            parsed: {
              '1': {
                day: 1,
                label: 'Planejamento/Capacitação',
              },
              '2': {
                day: 2,
                label: 'Planejamento/Capacitação',
              },
              '3': {
                day: 3,
                label: 'Planejamento/Capacitação',
              },
              '4': {
                day: 4,
                label: 'Planejamento/Capacitação',
              },
              '5': {
                day: 5,
                label: 'Planejamento/Capacitação',
              },
              '6': {
                day: 6,
                label: 'Planejamento/Capacitação',
              },
              '8': {
                day: 8,
                label: 'Aula Magna - Todos os Campi',
              },
              '9': {
                day: 9,
                label: 'Planejamento/Capacitação',
              },
              '10': {
                day: 10,
                label: 'Planejamento/Capacitação',
              },
              '11': {
                day: 11,
                label: 'Início do 2º semestre/2022',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
              },
              {
                day: '2',
              },
              {
                day: '3',
              },
            ],
            [
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '6',
              },
              {
                day: '7',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '8',
              },
              {
                day: '9',
              },
              {
                day: '10',
              },
            ],
            [
              {
                day: '11',
              },
              {
                day: '12',
              },
              {
                day: '13',
              },
              {
                day: '14',
              },
              {
                day: '15',
                legend: {
                  color: '#ffcc00',
                  label: 'Feriado Local',
                },
              },
              {
                day: '16',
                legend: {
                  color: '#ff99cc',
                  label: 'Recesso Local',
                },
              },
              {
                day: '17',
                legend: {
                  color: '#ff99cc',
                  label: 'Recesso Local',
                },
              },
            ],
            [
              {
                day: '18',
              },
              {
                day: '19',
              },
              {
                day: '20',
              },
              {
                day: '21',
              },
              {
                day: '22',
              },
              {
                day: '23',
              },
              {
                day: '24',
              },
            ],
            [
              {
                day: '25',
              },
              {
                day: '26',
              },
              {
                day: '27',
              },
              {
                day: '28',
              },
              {
                day: '29',
              },
              {
                day: '30',
              },
              {
                day: '-',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '07',
                label: 'Independência do Brasil',
              },
              {
                dayStart: '15',
                label: 'Aniversário de Ponta Grossa',
              },
              {
                dayStart: '16',
                dayEnd: '17',
                operation: 'e',
                label: 'Recesso local',
              },
            ],
            parsed: {
              '7': {
                day: 7,
                label: 'Independência do Brasil',
              },
              '15': {
                day: 15,
                label: 'Aniversário de Ponta Grossa',
              },
              '16': {
                day: 16,
                label: 'Recesso local',
              },
              '17': {
                day: 17,
                label: 'Recesso local',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
              },
            ],
            [
              {
                day: '2',
              },
              {
                day: '3',
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '6',
              },
              {
                day: '7',
              },
              {
                day: '8',
              },
            ],
            [
              {
                day: '9',
              },
              {
                day: '10',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '11',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '12',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '13',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '14',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
              {
                day: '15',
                legend: {
                  color: '#ff00ff',
                  label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
                },
              },
            ],
            [
              {
                day: '16',
              },
              {
                day: '17',
              },
              {
                day: '18',
              },
              {
                day: '19',
              },
              {
                day: '20',
              },
              {
                day: '21',
              },
              {
                day: '22',
              },
            ],
            [
              {
                day: '23',
              },
              {
                day: '24',
              },
              {
                day: '25',
              },
              {
                day: '26',
              },
              {
                day: '27',
              },
              {
                day: '28',
              },
              {
                day: '29',
              },
            ],
            [
              {
                day: '30',
              },
              {
                day: '31',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '12',
                label: 'Padroeira do Brasil',
              },
              {
                dayStart: '10',
                dayEnd: '15',
                operation: 'a',
                label: 'Planejamento/Capacitação',
              },
            ],
            parsed: {
              '10': {
                day: 10,
                label: 'Planejamento/Capacitação',
              },
              '11': {
                day: 11,
                label: 'Planejamento/Capacitação',
              },
              '12': {
                day: 12,
                label: 'Planejamento/Capacitação',
              },
              '13': {
                day: 13,
                label: 'Planejamento/Capacitação',
              },
              '14': {
                day: 14,
                label: 'Planejamento/Capacitação',
              },
              '15': {
                day: 15,
                label: 'Planejamento/Capacitação',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
              },
              {
                day: '2',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '3',
              },
              {
                day: '4',
              },
              {
                day: '5',
              },
            ],
            [
              {
                day: '6',
              },
              {
                day: '7',
              },
              {
                day: '8',
              },
              {
                day: '9',
              },
              {
                day: '10',
              },
              {
                day: '11',
              },
              {
                day: '12',
              },
            ],
            [
              {
                day: '13',
              },
              {
                day: '14',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
              {
                day: '15',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '16',
              },
              {
                day: '17',
              },
              {
                day: '18',
              },
              {
                day: '19',
              },
            ],
            [
              {
                day: '20',
              },
              {
                day: '21',
              },
              {
                day: '22',
              },
              {
                day: '23',
              },
              {
                day: '24',
              },
              {
                day: '25',
              },
              {
                day: '26',
              },
            ],
            [
              {
                day: '27',
              },
              {
                day: '28',
              },
              {
                day: '29',
              },
              {
                day: '30',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '3',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
              {
                day: '4',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '02',
                label: 'Finados',
              },
              {
                dayStart: '14',
                label: 'Recesso',
              },
              {
                dayStart: '15',
                label: 'Proclamação da República',
              },
            ],
            parsed: {
              '2': {
                day: 2,
                label: 'Finados',
              },
              '14': {
                day: 14,
                label: 'Recesso',
              },
              '15': {
                day: 15,
                label: 'Proclamação da República',
              },
            },
          },
        },
        {
          weeks: [
            [
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '-',
              },
              {
                day: '1',
              },
              {
                day: '2',
              },
              {
                day: '3',
              },
            ],
            [
              {
                day: '4',
              },
              {
                day: '5',
              },
              {
                day: '6',
              },
              {
                day: '7',
              },
              {
                day: '8',
              },
              {
                day: '9',
              },
              {
                day: '10',
              },
            ],
            [
              {
                day: '11',
              },
              {
                day: '12',
              },
              {
                day: '13',
              },
              {
                day: '14',
              },
              {
                day: '15',
              },
              {
                day: '16',
              },
              {
                day: '17',
              },
            ],
            [
              {
                day: '18',
              },
              {
                day: '19',
              },
              {
                day: '20',
              },
              {
                day: '◯',
                legend: {
                  color: '#66cc00',
                  label: 'Conclusão das Atividades Docentes',
                },
              },
              {
                day: '22',
                legend: {
                  color: '#6666ff',
                  label: 'Finalização dos Diários de Classe',
                },
              },
              {
                day: '23',
                legend: {
                  color: '#6666ff',
                  label: 'Finalização dos Diários de Classe',
                },
              },
              {
                day: '24',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
            ],
            [
              {
                day: '25',
                legend: {
                  color: '#3399ff',
                  label: 'Feriado Nacional',
                },
              },
              {
                day: '26',
                legend: {
                  color: '#99ffff',
                  label: 'Recesso Acadêmico',
                },
              },
              {
                day: '27',
                legend: {
                  color: '#99ffff',
                  label: 'Recesso Acadêmico',
                },
              },
              {
                day: '28',
                legend: {
                  color: '#99ffff',
                  label: 'Recesso Acadêmico',
                },
              },
              {
                day: '29',
                legend: {
                  color: '#99ffff',
                  label: 'Recesso Acadêmico',
                },
              },
              {
                day: '30',
                legend: {
                  color: '#99ffff',
                  label: 'Recesso Acadêmico',
                },
              },
              {
                day: '31',
                legend: {
                  color: '#999999',
                  label: 'Recesso',
                },
              },
            ],
            [
              {
                day: '-',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
              {
                day: '3',
              },
            ],
          ],
          extraInfo: {
            raw: [
              {
                dayStart: '21',
                label: 'Término do 2º Semestre/2022',
              },
              {
                dayStart: '21',
                label: 'Conclusão das Atividades Docentes',
              },
              {
                dayStart: '22',
                dayEnd: '23',
                operation: 'e',
                label: 'Finalização dos Diários de Classe',
              },
              {
                dayStart: '24',
                dayEnd: '31',
                operation: 'e',
                label: 'Recesso',
              },
              {
                dayStart: '25',
                label: 'Natal',
              },
              {
                dayStart: '26',
                dayEnd: '30',
                operation: 'a',
                label: 'Recesso acadêmico',
              },
            ],
            parsed: {
              '21': {
                day: 21,
                label: 'Conclusão das Atividades Docentes',
              },
              '22': {
                day: 22,
                label: 'Finalização dos Diários de Classe',
              },
              '23': {
                day: 23,
                label: 'Finalização dos Diários de Classe',
              },
              '24': {
                day: 24,
                label: 'Recesso',
              },
              '25': {
                day: 25,
                label: 'Natal',
              },
              '26': {
                day: 26,
                label: 'Recesso acadêmico',
              },
              '27': {
                day: 27,
                label: 'Recesso acadêmico',
              },
              '28': {
                day: 28,
                label: 'Recesso acadêmico',
              },
              '29': {
                day: 29,
                label: 'Recesso acadêmico',
              },
              '30': {
                day: 30,
                label: 'Recesso acadêmico',
              },
              '31': {
                day: 31,
                label: 'Recesso',
              },
            },
          },
        },
      ],
    }),
    []
  );

  const captions = useMemo(
    () => [
      {
        color: '#1878ff',
        label: 'Feriado Nacional',
      },
      {
        color: '#b8b8b8',
        label: 'Recesso',
      },
      {
        color: '#007e23',
        label: 'Conclusão das Atividades Docentes',
      },
      {
        color: '#f9861c',
        label: 'Feriado Local',
      },
      {
        color: '#ec6cef',
        label: 'Recesso Local',
      },
      {
        color: '#6e55fe',
        label: 'Finalização dos Diários de Classe',
      },
      {
        color: '#f9c81c',
        label: 'Férias',
      },
      {
        color: '#06e6d9',
        label: 'Recesso Acadêmico',
      },
      {
        color: '#336600',
        label: 'Férias Diferenciadas',
      },
      {
        color: '#fa05ff',
        label: 'Planejamento de Ensino/Pesquisa/Extensão e Capacitação',
      },
      {
        symbol: '△',
        color: '#da22fe',
        label: 'Início das Ativ. Acad. p/ Calouros',
      },
      {
        symbol: '◯',
        color: '#f9371c',
        label: 'Início / Término das aulas',
      },
    ],
    []
  );

  return { yearInfo, captions };
};

export default useCalendarData;
