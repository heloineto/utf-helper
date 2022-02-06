type Shift = 'M' | 'T' | 'N';

type TimeCode = `${Shift}${number}`;

type TimeCodeObject = {
  [x: string]: {
    start: string;
    end: string;
    days: { [x: number]: { highlights?: { cell?: boolean; group?: boolean } } };
  };
};

type DayTimeCode = `${number}${Shift}${number}`;

type SelectedDayTime = { [x: string]: ClassObject };
