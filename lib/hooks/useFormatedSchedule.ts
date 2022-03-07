import { useMemo } from 'react';

const useFormatedSchedule = () => {
  useMemo(() => {
    type A = { startTimeCode: string; length: number };
    type NewSchedule = {
      [day: string]: A[];
    };

    type B = { [timeCode: string]: { visited: boolean } };

    const newSchedule: NewSchedule = {};

    const scheduleObj = classeObjs.schedule.reduce<{
      [day: string]: { [timeCode: string]: { visited: boolean } };
    }>((acc, { dayTimeCode }) => {
      const dayCode = dayTimeCode.charAt(0);
      const timeCode = dayTimeCode.slice(1);

      return merge(acc, { [dayCode]: { [timeCode]: { visited: false } } });
    }, {});

    const lookPrev = (value: B, startTimeCode: string, length: number): A => {
      const timeCodeIndex = timeCodes.indexOf(startTimeCode);
      const prevTimeCode: string | undefined = timeCodes[timeCodeIndex - 1];

      if (!prevTimeCode || !value[prevTimeCode]) {
        return { startTimeCode, length };
      }

      value[prevTimeCode].visited = true;

      return lookPrev(value, prevTimeCode, length + 1);
    };

    Object.entries(scheduleObj).forEach(([dayCode, value]) => {
      newSchedule[dayCode] = [];

      Object.keys(value)
        .sort()
        .reverse()
        .forEach((timeCode) => {
          if (value[timeCode].visited) return;

          const { startTimeCode, length } = lookPrev(value, timeCode, 1);
          newSchedule[dayCode].push({ startTimeCode, length });
        });
    });
  }, []);
};

export default useFormatedSchedule;
