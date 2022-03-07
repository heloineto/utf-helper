import { useTimeCodes } from '@lib/hooks';
import { merge } from 'lodash';
import { useMemo } from 'react';

type CellInfo = { startTimeCode: string; length: number };

type CellsInfo = {
  [day: string]: CellInfo[];
};

type TimeCodesObj = { [timeCode: string]: { visited: boolean } };

type DayTimeCodesObj = {
  [day: string]: { [timeCode: string]: { visited: boolean } };
};

const useCellsInfo = (classObject: ClassObject) => {
  const timeCodes = useTimeCodes();

  const cellsInfo = useMemo(() => {
    const cellsInfo: CellsInfo = {};

    const dayTimeCodesObj = classObject.schedule.reduce<DayTimeCodesObj>(
      (acc, { dayTimeCode }) => {
        const dayCode = dayTimeCode.charAt(0);
        const timeCode = dayTimeCode.slice(1);

        return merge(acc, { [dayCode]: { [timeCode]: { visited: false } } });
      },
      {}
    );

    const lookPrev = (
      value: TimeCodesObj,
      startTimeCode: string,
      length: number
    ): CellInfo => {
      const timeCodeIndex = timeCodes.indexOf(startTimeCode);
      const prevTimeCode: string | undefined = timeCodes[timeCodeIndex - 1];

      if (!prevTimeCode || !value[prevTimeCode]) return { startTimeCode, length };

      value[prevTimeCode].visited = true;

      return lookPrev(value, prevTimeCode, length + 1);
    };

    Object.entries(dayTimeCodesObj).forEach(([dayCode, value]) => {
      cellsInfo[dayCode] = [];

      Object.keys(value)
        .sort()
        .reverse()
        .forEach((timeCode) => {
          if (value[timeCode].visited) return;

          const { startTimeCode, length } = lookPrev(value, timeCode, 1);
          cellsInfo[dayCode].push({ startTimeCode, length });
        });
    });

    return cellsInfo;
  }, [classObject, timeCodes]);

  return cellsInfo;
};

export default useCellsInfo;
