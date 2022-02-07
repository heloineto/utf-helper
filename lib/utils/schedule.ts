import { isEmpty, merge } from 'lodash';

// style={{
//   background: highlights?.cell
//     ? 'repeating-linear-gradient(45deg, rgba(14, 165, 233, 0.6), rgba(14, 165, 233, 0.6) 0.25rem, rgba(56, 189, 248, 0.6) 0.25rem, rgba(56, 189, 248, 0.6) 0.5rem)'
//     : highlights?.group
//     ? 'repeating-linear-gradient(45deg, rgba(14, 165, 233, 0.25), rgba(14, 165, 233, 0.25) 0.25rem, rgba(56, 189, 248, 0.25) 0.25rem, rgba(56, 189, 248, 0.25) 0.5rem)'
//     : undefined,
// }}

const createHighlightElement = (
  id: string,
  colorRgb: { r: number; g: number; b: number }
) => {
  const highlightElem = document.createElement('div');
  const colorStr = Object.values(colorRgb).join(',');

  console.log(colorStr);

  highlightElem.id = id;
  highlightElem.style.position = 'absolute';
  highlightElem.style.top = '0';
  highlightElem.style.left = '0';
  highlightElem.style.height = '100%';
  highlightElem.style.width = '100%';
  highlightElem.style.background = `repeating-linear-gradient(45deg, rgba(${colorStr}, 0.6), rgba(${colorStr}, 0.6) 0.25rem, rgba(${colorStr}, 0.8) 0.25rem, rgba(${colorStr}, 0.8) 0.5rem)`;

  return highlightElem;
};

export const highlightCell = (dayTimeCode: string, shouldHighlight: boolean) => {
  if (!shouldHighlight) {
    const highlightElem = document.getElementById(`${dayTimeCode}-cell-highlight`);
    highlightElem?.remove();
    return;
  }

  const cell = document.getElementById(dayTimeCode);
  if (!cell) return;

  const highlightElem = createHighlightElement(`${dayTimeCode}-cell-highlight`, {
    r: 14,
    g: 165,
    b: 233,
  });

  cell.appendChild(highlightElem);
};

export const highlightGroup = (dayTimeCodes: string[], shouldHighlight: boolean) => {
  dayTimeCodes.forEach((dayTimeCode) => {
    if (!shouldHighlight) {
      const highlightElem = document.getElementById(`${dayTimeCode}-group-highlight`);
      highlightElem?.remove();
      return;
    }

    const cell = document.getElementById(dayTimeCode);
    if (!cell) return;

    const highlightElem = createHighlightElement(`${dayTimeCode}-group-highlight`, {
      r: 14,
      g: 165,
      b: 233,
    });

    cell.appendChild(highlightElem);
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

      newValue[`${shiftCode}${numberCode}`].days[dayCode] = classObject;
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

      newValue[`${shiftCode}${numberCode}`].days[dayCode] = null;
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
