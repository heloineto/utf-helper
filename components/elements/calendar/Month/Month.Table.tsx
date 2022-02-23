import { useMemo } from 'react';
import { DateTime, Info, Interval } from 'luxon';
import clsx from 'clsx';

import { getMonthData } from './Month.utils';

const WEEK_STARTS_SUNDAY = true;

const weekdays = Info.weekdays('short').map(
  (weekday) => weekday.charAt(0).toUpperCase() + weekday.slice(1, -1)
);

if (WEEK_STARTS_SUNDAY) {
  const sunday = weekdays.pop();
  if (sunday) weekdays.unshift(sunday);
}

interface Props {
  date: DateTime;
}

const MonthTable = ({ date }: Props) => {
  const monthData = useMemo(() => {
    const startOfMonth = date.startOf('month');
    const endOfMonth = date.endOf('month');

    const startDay = startOfMonth.startOf('week');
    const endDay = endOfMonth.endOf('week');

    let calendarInterval = Interval.fromDateTimes(startDay, endDay);

    // Every month should display 6 weeks for an uniform height
    calendarInterval = calendarInterval.set({
      end: calendarInterval.end.plus({ weeks: 6 - calendarInterval.count('weeks') }),
    });

    if (WEEK_STARTS_SUNDAY) {
      calendarInterval = calendarInterval.mapEndpoints((endpoint) =>
        endpoint.minus({ days: 1 })
      );
    }

    const monthData: DateTime[][] = [];

    calendarInterval.splitBy({ weeks: 1 }).forEach((week) => {
      const weekData: DateTime[] = [];

      week.splitBy({ days: 1 }).forEach(({ start }) => weekData.push(start));

      monthData.push(weekData);
    });

    return monthData;
  }, [date]);

  return (
    <div className="p-2">
      <table className="w-full table-fixed">
        <thead>
          <tr className="table-row">
            {weekdays.map((weekday) => (
              <th key={weekday} className="table-cell">
                <div className="text-slate-100 font-semibold text-md">{weekday}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthData.map((weekData) => (
            <tr>
              {weekData.map((day) => {
                const isAnotherMonth = !day.hasSame(date, 'month');
                const isSunday = day.weekday === 7;

                return (
                  <td>
                    <div
                      className={clsx(
                        isAnotherMonth && 'text-slate-400 border-0 bg-transparent',
                        isSunday &&
                          !isAnotherMonth &&
                          'text-slate-400 dark:text-slate-200 border-slate-600',
                        'bg-slate-50 dark:bg-slate-800 relative w-full h-12 text-slate-800 dark:text-white font-semibold border border-slate-800 dark:border-slate-400 flex flex-col items-center rounded-md overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_40px_0] hover:shadow-white hover:z-10'
                      )}
                    >
                      <div className="text-md w-full  text-right mr-1.5">{day.day}</div>
                      {!isAnotherMonth && !isSunday && (
                        <div className="h-2 w-2 mt-auto mb-1.5 bg-white rounded-full"></div>
                      )}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthTable;
