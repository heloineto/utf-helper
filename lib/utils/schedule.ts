import { merge } from 'lodash';

export const highlightCell = (
  setSchedule: Dispatch<SetStateAction<TimeCodeObject>>,
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
  setSchedule: Dispatch<SetStateAction<TimeCodeObject>>,
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
