import { MouseEvent, useMemo, useState } from 'react';
import { DateTime, Info, Interval } from 'luxon';
import clsx from 'clsx';
import { Popover, Tooltip } from '@mui/material';
import { colord } from 'colord';

type Props = {
  dayDate: DateTime;
  monthDate: DateTime;
  dayInfo: DayInfo | undefined;
  extraDayInfo: ExtraDayInfoParsed;
  onShowPopover: (
    e: MouseEvent<HTMLTableDataCellElement, globalThis.MouseEvent>,
    completeDayInfo: CompleteDayInfo
  ) => void;
  onHidePopover: () => void;
};

const MonthCell = ({
  dayDate,
  dayInfo,
  monthDate,
  extraDayInfo,
  onShowPopover,
  onHidePopover,
}: Props) => {
  const isAnotherMonth = !dayDate.hasSame(monthDate, 'month');
  const isSunday = dayDate.weekday === 7;

  let color, lighterColor;

  if (dayInfo) {
    color = dayInfo.legend?.color;
    if (color) {
      lighterColor = colord(color).lighten(0.25).toHex();
    }
  }

  return (
    <td
      key={dayDate.day}
      onMouseEnter={(e) => {
        onShowPopover(e, { ...dayInfo, extraDayInfo: extraDayInfo });
      }}
    >
      <div
        className={clsx(
          isAnotherMonth && 'text-slate-400 border-0 bg-transparent',
          isSunday &&
            !isAnotherMonth &&
            'text-slate-400 dark:text-slate-200 border-slate-600',
          'bg-slate-50 dark:bg-slate-800 relative w-full h-12 text-slate-800 dark:text-white font-semibold border border-slate-800 dark:border-slate-400 flex flex-col items-center rounded-md overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_40px_0] hover:shadow-white hover:z-10'
        )}
        style={{
          backgroundColor: dayInfo?.legend?.color,
        }}
      >
        <div className="text-md w-full  text-right mr-1.5">{dayDate.day}</div>
        {!isAnotherMonth && !isSunday && (
          <div className="h-2 w-2 mt-auto mb-1.5 bg-white rounded-full"></div>
        )}
      </div>
    </td>
  );
};

export default MonthCell;
