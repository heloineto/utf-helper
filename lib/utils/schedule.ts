import { isEmpty } from 'lodash';
import { deepFreeze } from './typescript';

const createHighlightElement = (
  id: string,
  colorRgb: { r: number; g: number; b: number }
) => {
  const highlightElem = document.createElement('div');
  const colorStr = Object.values(colorRgb).join(',');

  highlightElem.id = id;
  highlightElem.style.position = 'absolute';
  highlightElem.style.top = '0';
  highlightElem.style.left = '0';
  highlightElem.style.height = '100%';
  highlightElem.style.width = '100%';
  highlightElem.style.background = `repeating-linear-gradient(45deg, rgba(${colorStr}, 0.6), rgba(${colorStr}, 0.6) 0.25rem, rgba(${colorStr}, 0.8) 0.25rem, rgba(${colorStr}, 0.8) 0.5rem)`;
  highlightElem.style.zIndex = '1000';

  return highlightElem;
};

const highlight = (
  type: string,
  dayTimeCode: string,
  shouldHighlight: boolean,
  colorRgb: { r: number; g: number; b: number },
  surpressRed?: boolean
) => {
  if (!shouldHighlight) {
    const oldHighlightElem = document.getElementById(`${dayTimeCode}-${type}-highlight`);
    oldHighlightElem?.remove();

    return;
  }

  const cell = document.getElementById(dayTimeCode);
  if (!cell) return;

  if (cell.querySelector('.class-cell') && !surpressRed) {
    const highlightElem = createHighlightElement(
      `${dayTimeCode}-${type}-highlight`,
      { r: 239, g: 68, b: 68 } /* bg-red-500 */
    );
    cell.appendChild(highlightElem);
    return;
  }

  const highlightElem = createHighlightElement(
    `${dayTimeCode}-${type}-highlight`,
    colorRgb
  );

  cell.appendChild(highlightElem);
};

export const highlightCell = (
  dayTimeCode: string,
  shouldHighlight: boolean,
  darkMode?: boolean,
  surpressRed?: boolean
) => {
  highlight(
    'cell',
    dayTimeCode,
    shouldHighlight,
    darkMode
      ? { r: 14, g: 165, b: 233 } /* bg-sky-500 */
      : { r: 14, g: 165, b: 233 } /* bg-sky-500 */,
    surpressRed
  );
};

export const selectGroup = (
  setSelectedClasses: Dispatch<SetStateAction<SelectedClasses>>,
  setSchedule: Dispatch<SetStateAction<ScheduleObject>>,
  classObject: ClassObject,
  selectedClasses: SelectedClasses
) => {
  const conflicts = getConflicts(selectedClasses, classObject);

  if (!isEmpty(conflicts)) return conflicts;

  setSelectedClasses((value) => {
    const newValue = { ...value };

    newValue[classObject.subjectCode] = {
      ...newValue[classObject.subjectCode],
      [classObject.code]: classObject,
    };

    return newValue;
  });

  setSchedule((value) => {
    const newValue = { ...value };

    classObject.schedule.forEach(({ dayTimeCode }) => {
      const [dayCode, shiftCode, numberCode] = dayTimeCode.split('');

      try {
        newValue[`${shiftCode}${numberCode}`].days[dayCode] = classObject;
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.error(error);
        return;
      }
    });

    return newValue;
  });

  return null;
};

export const unselectGroup = (
  setSelectedClasses: Dispatch<SetStateAction<SelectedClasses>>,
  setSchedule: Dispatch<SetStateAction<ScheduleObject>>,
  classObject: ClassObject,
  selectedClasses: SelectedClasses
) => {
  setSelectedClasses((value) => {
    const newValue = { ...value };

    delete newValue?.[classObject.subjectCode]?.[classObject.code];

    if (isEmpty(newValue?.[classObject.subjectCode]))
      delete newValue?.[classObject.subjectCode];

    return newValue;
  });

  setSchedule((value) => {
    const newValue = { ...value };

    classObject.schedule.forEach(({ dayTimeCode }) => {
      const [dayCode, shiftCode, numberCode] = dayTimeCode.split('');

      try {
        newValue[`${shiftCode}${numberCode}`].days[dayCode] = null;
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.error(error);
        return;
      }
    });

    return newValue;
  });
};

export const getConflicts = (
  selectedClasses: SelectedClasses,
  classObject: ClassObject
) => {
  const conflicts: Conflict[] = [];

  Object.values(selectedClasses).forEach((selectedClass) => {
    if (!selectedClass) return;

    Object.values(selectedClass).forEach((currClassObject) => {
      if (!currClassObject) return;

      const conflictTimes: string[] = [];

      currClassObject.schedule.forEach(({ dayTimeCode: currDayTimeCode }) => {
        classObject.schedule.forEach(({ dayTimeCode }) => {
          if (currDayTimeCode === dayTimeCode) conflictTimes.push(currDayTimeCode);
        });
      });

      if (!isEmpty(conflictTimes)) {
        conflicts.push({
          withClass: currClassObject,
          dayTimeCodes: conflictTimes,
        });
      }
    });
  });

  return isEmpty(conflicts) ? null : conflicts;
};

export const getSubjectType = (subject: {
  code: string;
  classes: {
    [x: string]: ClassObject;
  };
}) => {
  if (Object.values(subject.classes)[0].optional !== 'Não')
    return { value: 'optional', label: 'Optativa', colorName: 'orange' };

  if (subject.code.slice(0, 2) !== 'CC')
    return {
      value: 'equivalent',
      label: 'Equivalente',
      colorName: 'cyan',
    };

  const period = Number(subject.code[3]) ?? 9;
  const colorNames = [
    'pink',
    'purple',
    'indigo',
    'sky',
    'teal',
    'green',
    'lime',
    'yellow',
    'slate',
  ];

  return {
    value: subject.code[3],
    label: `${subject.code[3]}º Período`,
    colorName: colorNames[period],
  };
};

export const scheduleStructure = deepFreeze({
  M1: {
    start: '07h30',
    end: '08h20',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  M2: {
    start: '08h20',
    end: '09h10',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  M3: {
    start: '09h10',
    end: '10h00',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  M4: {
    start: '10h20',
    end: '11h10',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  M5: {
    start: '11h10',
    end: '12h00',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  M6: {
    start: '12h00',
    end: '12h50',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  T1: {
    start: '13h00',
    end: '13h50',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  T2: {
    start: '13h50',
    end: '14h40',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  T3: {
    start: '14h40',
    end: '15h30',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  T4: {
    start: '15h50',
    end: '16h40',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  T5: {
    start: '16h40',
    end: '17h30',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  T6: {
    start: '17h30',
    end: '18h20',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  N1: {
    start: '18h40',
    end: '19h30',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  N2: {
    start: '19h30',
    end: '20h20',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  N3: {
    start: '20h20',
    end: '21h10',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  N4: {
    start: '21h20',
    end: '22h10',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
  N5: {
    start: '22h10',
    end: '23h00',
    days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
  },
});

export const campuses = deepFreeze({
  curitiba: {
    label: 'Curitiba',
  },
  'cornelio-procopio': {
    label: 'Cornélio Procópio',
  },
  'campo-mourao': {
    label: 'Campo Mourão',
  },
  medianeira: {
    label: 'Medianeira',
  },
  'pato-branco': {
    label: 'Pato Branco',
  },
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
  'dois-vizinhos': {
    label: 'Dois Vizinhos',
  },
  londrina: {
    label: 'Londrina',
  },
  toledo: {
    label: 'Toledo',
  },
  apucarana: {
    label: 'Apucarana',
  },
  'francisco-beltrao': {
    label: 'Francisco Beltrão',
  },
  guarapuava: {
    label: 'Guarapuava',
  },
  'santa-helena': {
    label: 'Santa Helena',
  },
});

export const getFramingDescription = (framing: string) => {
  switch (framing) {
    case 'P':
      return 'P - Turma 100% Presencial, conforme Resolução 123/2021 - COGEP';
    case 'H':
      return 'H - Turma híbrida, com atividades desenvolvidas de forma mista entre remoto e presencial conforme Resolução 123/2021-COGEP';
    case 'R':
      return 'R - Turma 100% remota, conforme Resolução 123/2021 - COGEP';
    default:
      return 'Error: framing code is not P, H or R';
  }
};
