type Shift = 'M' | 'T' | 'N';

type TimeCode = `${Shift}${number}`;

type ScheduleObject = {
  [x: string]: {
    start: string;
    end: string;
    days: {
      [x: number | string]: ClassObject | null;
    };
  };
};

type DayTimeCode = `${number}${Shift}${number}`;

type SelectedDayTime = { [x: string]: ClassObject };
