import { useMemo, useState } from 'react';
import { DateTime, Info, Interval } from 'luxon';
import { Popover, PopoverProps, Slide, Tooltip } from '@mui/material';
import MonthCell from './Month.Cell';
import { CircleIcon, TriangleIcon } from '@components/decoration/icons/outlined';
import { colord } from 'colord';

interface Props extends PopoverProps {
  dayInfo: CompleteDayInfo | null;
  monthDate: DateTime;
}

const MonthCellPopover = ({ dayInfo, monthDate, ...popoverProps }: Props) => {
  const color = dayInfo?.legend?.color ?? '#444444';
  const lighterColor = colord(color).lighten(0.25).toHex();

  const dateStr =
    dayInfo?.extraDayInfo?.day &&
    monthDate
      .set({ day: dayInfo.extraDayInfo.day })
      .toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' });

  return (
    <Popover
      classes={{
        paper:
          'bg-white rounded-xl shadow-xl ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 divide-y divide-slate-100 my-auto xl:mt-18 dark:divide-slate-200/5 dark:highlight-white/10',
      }}
      {...popoverProps}
    >
      <div>{JSON.stringify(dayInfo, null, 2)}</div>
      <div className="p-4 sm:p-6 lg:p-4 xl:p-6 flex items-center justify-center gap-x-4 sm:gap-x-6 lg:gap-x-4 xl:gap-x-6">
        {dayInfo?.legend?.symbol === '◯' ? (
          <CircleIcon />
        ) : dayInfo?.legend?.symbol === '△' ? (
          <TriangleIcon />
        ) : (
          <div
            className="rounded h-8 w-8 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10"
            style={{
              background: `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`,
            }}
          />
        )}
        <div>
          <div className="text-slate-900 truncate sm:pr-20 dark:text-slate-100">
            {dayInfo?.extraDayInfo?.label}
          </div>
          {dateStr && (
            <div className="text-sm leading-6 dark:text-slate-500">{dateStr}</div>
          )}
        </div>
      </div>
    </Popover>
  );
};

export default MonthCellPopover;
