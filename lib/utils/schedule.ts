import { isEmpty, merge } from 'lodash';

export const highlightCell = (
  setSchedule: Dispatch<SetStateAction<ScheduleObject>>,
  dayTimeCode: string,
  shouldHighlight: boolean
) => {
  const [dayCode, shiftCode, numberCode] = dayTimeCode.split('');

  if (!dayCode || !shiftCode || !numberCode) return;

  const toMerge = {
    [`${shiftCode}${numberCode}`]: {
      days: { [dayCode]: { highlights: { cell: shouldHighlight } } },
    },
  };

  setSchedule?.((value) => merge({ ...value }, toMerge));
};

export const highlightGroup = (
  setSchedule: Dispatch<SetStateAction<ScheduleObject>>,
  dayTimeCodes: string[],
  shouldHighlight: boolean
) => {
  const toMerge: any = {};

  dayTimeCodes.forEach((dayTimeCode) => {
    const [dayCode, shiftCode, numberCode] = dayTimeCode.split('');

    if (!dayCode || !shiftCode || !numberCode) return;

    toMerge[`${shiftCode}${numberCode}`] = {
      days: {
        ...toMerge[`${shiftCode}${numberCode}`]?.days,
        [dayCode]: { highlights: { group: shouldHighlight } },
      },
    };
  });

  setSchedule?.((value) => merge({ ...value }, toMerge));
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
