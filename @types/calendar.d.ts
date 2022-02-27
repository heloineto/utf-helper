type Legend = {
  color?: string;
  symbol?: string;
  label: string;
};

type DayData = {
  day: string;
  legend?: Legend;
};

type WeekData = DayData[];

type MonthData = {
  weeks: WeekData[];
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

type YearData = {
  months: MonthData[];
};
