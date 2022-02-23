import { DateTime, Info, Interval } from 'luxon';

/**
 * According to international standard ISO 8601, weeks always start on Mondays.
 * Keep that in mind.
 */
const weekStartsSunday = true;

const weekdays = Info.weekdays('short', { locale: 'br' }).map((weekday) =>
  weekday.replace('.', '')
);

if (weekStartsSunday && weekdays?.length) {
  const sunday = weekdays.pop() as string; //! Not much to do, typescript is dumb
  weekdays.unshift(sunday);
}

export const getMonthData = (date = DateTime.now()) => {
  const startOfMonth = date.startOf('month');
  const endOfMonth = date.endOf('month');

  const startDay = startOfMonth.startOf('week');
  const endDay = endOfMonth.endOf('week');

  let calendarInterval = Interval.fromDateTimes(startDay, endDay);

  while (calendarInterval.count('weeks') < 6) {
    calendarInterval = calendarInterval.set({
      end: calendarInterval.end.plus({ weeks: 1 }),
    });
  }

  if (weekStartsSunday) {
    calendarInterval = calendarInterval.mapEndpoints((endpoint) =>
      endpoint.minus({ days: 1 })
    );
  }

  type WeekData = { [k: string]: DateTime };

  const monthData: WeekData[] = [];

  calendarInterval.splitBy({ weeks: 1 }).forEach((week) => {
    const weekData: WeekData = {};

    week
      .splitBy({ days: 1 })
      .forEach(({ start }, idx) => (weekData[weekdays[idx]] = start));

    monthData.push(weekData);
  });

  return monthData;
};

export const getColumns = () => {
  const columns: {
    Header: string;
    accessor: string;
    Cell: ({ value }: { value: DateTime }) => number;
  }[] = [];

  weekdays.forEach((weekday) => {
    columns.push({
      Header: weekday.charAt(0).toUpperCase() + weekday.slice(1),
      accessor: weekday,
      Cell: ({ value }) => value.day,
    });
  });

  return columns;
};
