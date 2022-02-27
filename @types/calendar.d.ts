type Legend = {
  color?: string;
  symbol?: string;
  label: string;
};

type DayInfo = {
  day: string;
  legend?: Legend;
};

type WeekInfo = DayInfo[];

type MonthInfo = {
  weeks: WeekInfo[];
  extraInfo: {
    raw: {
      dayStart: string;
      label: string;
      dayEnd?: string;
      operation?: string;
    }[];
    parsed: Record<string, any>;
  };
};

type YearInfo = {
  months: MonthInfo[];
};
