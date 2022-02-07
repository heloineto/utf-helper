import { isEmpty, merge } from 'lodash';

export const highlightCell = (
  setSchedule: Dispatch<SetStateAction<ScheduleObject>>,
  dayTimeCode: string,
  shouldHighlight: boolean
) => {
  const [dayCode, shiftCode, timeCode] = dayTimeCode.split('');

  if (!dayCode || !shiftCode || !timeCode) return;

  const toMerge = {
    [`${shiftCode}${timeCode}`]: {
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
    const [dayCode, shiftCode, timeCode] = dayTimeCode.split('');

    if (!dayCode || !shiftCode || !timeCode) return;

    toMerge[`${shiftCode}${timeCode}`] = {
      days: {
        ...toMerge[`${shiftCode}${timeCode}`]?.days,
        [dayCode]: { highlights: { group: shouldHighlight } },
      },
    };
  });

  setSchedule?.((value) => merge({ ...value }, toMerge));
};

export const selectGroup = (
  setSelectedClasses: Dispatch<SetStateAction<SelectedClasses>> | undefined,
  setSchedule: Dispatch<SetStateAction<ScheduleObject>> | null,
  classObject: ClassObject
) => {
  setSelectedClasses?.((value) => {
    const newValue = { ...value };

    newValue[classObject.subjectCode] = {
      ...newValue[classObject.subjectCode],
      [classObject.code]: classObject,
    };

    return newValue;
  });
};

export const unselectGroup = (
  setSelectedClasses: Dispatch<SetStateAction<SelectedClasses>> | undefined,
  setSchedule: Dispatch<SetStateAction<ScheduleObject>> | null,
  classObject: ClassObject
) =>
  setSelectedClasses?.((value) => {
    const newValue = { ...value };

    delete newValue?.[classObject.subjectCode]?.[classObject.code];

    if (isEmpty(newValue?.[classObject.subjectCode]))
      delete newValue?.[classObject.subjectCode];

    return newValue;
  });
