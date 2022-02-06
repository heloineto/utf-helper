type Shift = 'M' | 'T' | 'N';

type TimeCode = `${Shift}${number}`;

type TimeCodeObject = {
  [x: TimeCode]: { start: string; end: string; days: { [x: number]: any } };
};
