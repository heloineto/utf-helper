import { useContext, useMemo, useState } from 'react';
import { DateTime, Interval } from 'luxon';
import { Tooltip } from '@mui/material';
import MonthCell from './Month.Cell';
import MonthCellPopover from './Month.CellPopover';
import { MonthContext } from './lib/context';
import { getWeekdaysStr } from '@lib/utils/luxon';
import Day, { DayPopover } from '../Day';

const WEEK_STARTS_SUNDAY = true;

const weekdays = getWeekdaysStr(WEEK_STARTS_SUNDAY, 'narrow');

interface Props {
  monthInfo?: MonthInfo;
}

const MonthTable = ({ monthInfo }: Props) => {
  const { monthDate, onSelectDate, selectedDate } = useContext(MonthContext);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [dayInfo, setDayInfo] = useState<
    (CompleteDayInfo & { dayDate: DateTime }) | null
  >(null);

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
      <table className="w-full">
        <thead>
          <tr className="table-row">
            {weekdays.map((weekday) => (
              <th key={weekday} className="table-cell">
                <Tooltip title={weekday} placement="top">
                  <div className="text-slate-800 dark:text-slate-100 font-semibold text-md cursor-default">
                    {weekday}
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
                <td key={dayDate.day}>
                  <Day
                    key={dayDate.day}
                    dayDate={dayDate}
                    dayInfo={monthInfo?.weeks[weekIndex][dayIndex]}
                    extraDayInfo={monthInfo?.extraInfo.parsed[dayDate?.day]}
                    onShowPopover={(e, completeDayInfo) => {
                      setDayInfo(completeDayInfo);
                      setAnchorEl(e.currentTarget);
                    }}
                    onHidePopover={() => {
                      setAnchorEl(null);
                    }}
                    monthDate={monthDate}
                    onSelectDate={onSelectDate}
                    selectedDate={selectedDate}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <DayPopover
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
        dayInfo={dayInfo}
      />
    </div>
  );
};

export default MonthTable;
