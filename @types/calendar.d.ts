type Legend = {
  color: string;
  symbol?: string;
  label: string;
};

type DayInfo = {
  day: string;
  legend?: Legend;
};

type WeekInfo = DayInfo[];

type ExtraMonthInfo = {
  raw: {
    dayStart: string;
    label: string;
    dayEnd?: string;
    operation?: string;
  }[];
  parsed: {
    [k: string]:
      | {
          day: number;
          label: string;
        }
      | undefined;
  };
};

type MonthInfo = {
  weeks: WeekInfo[];
  extraInfo: ExtraMonthInfo;
};

type YearInfo = {
  months: MonthInfo[];
};
