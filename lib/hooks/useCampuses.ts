import { useMemo } from 'react';

const useCampuses = () => {
  const campuses: {
    [campus: string]: {
      label: string;
      courses: {
        [course: string]: {
          label: string;
          numberCode: string;
        };
      };
    };
  } = useMemo(
    () => ({
      // curitiba: {
      //   label: 'Curitiba',
      //   courses: {},
      // },
      // 'cornelio-procopio': {
      //   label: 'Cornélio Procópio',
      //   courses: {},
      // },
      // 'campo-mourao': {
      //   label: 'Campo Mourão',
      //   courses: {},
      // },
      // medianeira: {
      //   label: 'Medianeira',
      //   courses: {},
      // },
      // 'pato-branco': {
      //   label: 'Pato Branco',
      //   courses: {},
      // },
      'ponta-grossa': {
        label: 'Ponta Grossa',
        courses: {
          alemao: {
            label: 'Alemão',
            numberCode: '0044',
          },
          'alemao-intensivo': {
            label: 'Alemão Intensivo',
            numberCode: '0073',
          },
          'ciencia-da-computacao': {
            label: 'Ciência Da Computação',
            numberCode: '0039',
          },
          'ciencias-biologicas': {
            label: 'Ciências Biológicas',
            numberCode: '0084',
          },
          'ciencias-naturais': {
            label: 'Ciências Naturais',
            numberCode: '0066',
          },
          'eng-bioproc-e-biotec': {
            label: 'Eng Bioproc E Biotec',
            numberCode: '0082',
          },
          'engenharia-de-producao': {
            label: 'Engenharia De Produção',
            numberCode: '0041',
          },
          'engenharia-eletrica': {
            label: 'Engenharia Elétrica',
            numberCode: '0085',
          },
          'engenharia-eletronica': {
            label: 'Engenharia Eletrônica',
            numberCode: '0040',
          },
          'engenharia-mecanica': {
            label: 'Engenharia Mecânica',
            numberCode: '0038',
          },
          'engenharia-quimica': {
            label: 'Engenharia Química',
            numberCode: '0037',
          },
          espanhol: {
            label: 'Espanhol',
            numberCode: '0052',
          },
          frances: {
            label: 'Francês',
            numberCode: '0045',
          },
          'frances-intensivo': {
            label: 'Francês Intensivo',
            numberCode: '0072',
          },
          ingles: {
            label: 'Inglês',
            numberCode: '0043',
          },
          'ingles-instrumental': {
            label: 'Inglês Instrumental',
            numberCode: '0053',
          },
          'ingles-intensivo': {
            label: 'Inglês Intensivo',
            numberCode: '0071',
          },
          'linguas-estr-mod': {
            label: 'Línguas Estr. Mod.',
            numberCode: '0012',
          },
          'tecnol-alimentos': {
            label: 'Tecnol. Alimentos',
            numberCode: '0001',
          },
          'tecnol-analise-d-sist': {
            label: 'Tecnol. Análise D.Sist',
            numberCode: '0024',
          },
          'tecnol-automacao-ind': {
            label: 'Tecnol. Automação Ind.',
            numberCode: '0005',
          },
          'tecnol-fab-mecanica': {
            label: 'Tecnol. Fab. Mecânica',
            numberCode: '0025',
          },
        },
      },
      // 'dois-vizinhos': {
      //   label: 'Dois Vizinhos',
      //   courses: {},
      // },
      // londrina: {
      //   label: 'Londrina',
      //   courses: {},
      // },
      // toledo: {
      //   label: 'Toledo',
      //   courses: {},
      // },
      // apucarana: {
      //   label: 'Apucarana',
      //   courses: {},
      // },
      // 'francisco-beltrao': {
      //   label: 'Francisco Beltrão',
      //   courses: {},
      // },
      // guarapuava: {
      //   label: 'Guarapuava',
      //   courses: {},
      // },
      // 'santa-helena': {
      //   label: 'Santa Helena',
      //   courses: {},
      // },
    }),
    []
  );

  return campuses;
};

export default useCampuses;
