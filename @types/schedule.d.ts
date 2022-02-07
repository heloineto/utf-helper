type Shift = 'M' | 'T' | 'N';

type TimeCode = `${Shift}${number}`;

type ScheduleObject = {
  [x: string]: {
    start: string;
    end: string;
    days: {
      [x: number | string]: {
        highlights?: { cell?: boolean; group?: boolean };
        classObject?: ClassObject;
      };
    };
  };
};

type DayTimeCode = `${number}${Shift}${number}`;

type SelectedDayTime = { [x: string]: ClassObject };
