import { useMemo, useState } from 'react';
import { DateTime, Info, Interval } from 'luxon';
import { Popover, Tooltip } from '@mui/material';
import MonthCell from './Month.Cell';

const WEEK_STARTS_SUNDAY = true;

const weekdays = Info.weekdays('long').map(
  (weekday) => weekday.charAt(0).toUpperCase() + weekday.slice(1)
);

if (WEEK_STARTS_SUNDAY) {
  const sunday = weekdays.pop();
  if (sunday) weekdays.unshift(sunday);
}

interface Props {
  monthDate: DateTime;
  monthInfo?: MonthInfo;
}

const MonthTable = ({ monthDate, monthInfo }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [dayInfo, setDayInfo] = useState<CompleteDayInfo | null>(null);

  const monthData = useMemo(() => {
    const startOfMonth = monthDate.startOf('month');
    const endOfMonth = monthDate.endOf('month');

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
  }, [monthDate]);

  return (
    <div className="p-2">
      <table className="w-full table-fixed">
        <thead>
          <tr className="table-row">
            {weekdays.map((weekday) => (
              <th key={weekday} className="table-cell">
                <Tooltip title={weekday} placement="top">
                  <div className="text-slate-800 dark:text-slate-100 font-semibold text-md cursor-default">
                    {weekday.charAt(0)}
                  </div>
                </Tooltip>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthData.map((weekData, weekIndex) => (
            <tr key={weekData[0].weekNumber}>
              {weekData.map((dayDate, dayIndex) => (
                <MonthCell
                  key={dayDate.day}
                  dayDate={dayDate}
                  dayInfo={monthInfo?.weeks[weekIndex][dayIndex]}
                  extraDayInfo={monthInfo?.extraInfo.parsed[dayDate?.day]}
                  monthDate={monthDate}
                  onShowPopover={(e, completeDayInfo) => {
                    setDayInfo(completeDayInfo);
                    setAnchorEl(e.currentTarget);
                  }}
                  onHidePopover={() => {
                    setAnchorEl(null);
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Popover
        anchorEl={anchorEl}
        open={anchorEl !== null && dayInfo !== null}
        sx={{
          pointerEvents: 'none',
        }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        disableRestoreFocus
      >
        {JSON.stringify(dayInfo)}
      </Popover>
    </div>
  );
};

export default MonthTable;
