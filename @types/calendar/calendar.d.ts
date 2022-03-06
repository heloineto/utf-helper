type Legend = {
  color: string;
  symbol?: string;
  label: string;
};

type DayInfo = {
  day: string;
  legend?: Legend;
};

type ExtraDayInfoParsed =
  | {
      day: number;
      label: string;
    }
  | undefined;

type CompleteDayInfo = DayInfo & {
  extraDayInfo: ExtraDayInfoParsed;
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
    [k: string]: ExtraDayInfoParsed;
  };
};

type MonthInfo = {
  weeks: WeekInfo[];
  extraInfo: ExtraMonthInfo;
};

type YearInfo = {
  months: MonthInfo[];
};
