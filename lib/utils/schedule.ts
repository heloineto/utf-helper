import { isEmpty } from 'lodash';

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
  theme?: Theme,
  surpressRed?: boolean
) => {
  highlight(
    'cell',
    dayTimeCode,
    shouldHighlight,
    theme === 'dark'
      ? { r: 14, g: 165, b: 233 } /* bg-sky-500 */
      : { r: 14, g: 165, b: 233 } /* bg-sky-500 */,
    surpressRed
  );
};

export const highlightGroup = (
  dayTimeCodes: string[],
  shouldHighlight: boolean,
  theme?: Theme
) => {
  dayTimeCodes.forEach((dayTimeCode) => {
    highlight(
      'group',
      dayTimeCode,
      shouldHighlight,
      theme === 'dark'
        ? { r: 2, g: 132, b: 199 } /* bg-sky-600 */
        : { r: 125, g: 211, b: 252 } /* bg-sky-300 */
    );
  });
};

export const selectGroup = (
  setSelectedClasses: Dispatch<SetStateAction<SelectedClasses>>,
  setSchedule: Dispatch<SetStateAction<ScheduleObject>>,
  classObject: ClassObject,
  selectedClasses: SelectedClasses
) => {
  if (hasConflict(selectedClasses, classObject)) {
    //! Open conflict modal
    return;
  }

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
        //! Something went pretty wrong. probs malformed data
        return;
      }
    });

    return newValue;
  });
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
        //! Something went pretty wrong. probs malformed data
        return;
      }
    });

    return newValue;
  });
};

export const hasConflict = (
  selectedClasses: SelectedClasses,
  classObject: ClassObject
) => {
  let result = false;

  Object.values(selectedClasses).forEach((selectedClass) => {
    if (!selectedClass) return;

    Object.values(selectedClass).forEach((currClassObject) => {
      if (!currClassObject) return;

      currClassObject.schedule.forEach(({ dayTimeCode: currDayTimeCode }) => {
        classObject.schedule.forEach(({ dayTimeCode }) => {
          if (currDayTimeCode === dayTimeCode) result = true;
        });
      });
    });
  });

  return result;
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
