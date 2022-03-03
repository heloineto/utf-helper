import { DateTime } from 'luxon';
import { Popover, PopoverProps } from '@mui/material';
import { CircleIcon, TriangleIcon } from '@components/decoration/icons/outlined';
import { colord } from 'colord';

interface Props extends PopoverProps {
  dayInfo: (CompleteDayInfo & { dayDate: DateTime }) | null;
}

const MonthCellPopover = ({ dayInfo, ...popoverProps }: Props) => {
  const color = dayInfo?.legend?.color ?? '#444444';
  const lighterColor = colord(color).lighten(0.25).toHex();

  const dateStr = dayInfo?.dayDate.toLocaleString({
    weekday: 'long',
    month: 'long',
    day: '2-digit',
  });

  return (
    <Popover
      classes={{
        paper:
          'bg-slate-50 rounded-xl shadow-xl ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 divide-y divide-slate-100 my-auto dark:divide-slate-200/5 dark:highlight-white/10',
      }}
      {...popoverProps}
    >
      {/* <div>{JSON.stringify(dayInfo, null, 2)}</div> */}
      <div className="p-3 flex items-center justify-center gap-x-3">
        {dayInfo?.legend?.symbol === '◯' ? (
          <CircleIcon className="h-10 w-10" />
        ) : dayInfo?.legend?.symbol === '△' ? (
          <TriangleIcon className="h-10 w-10" />
        ) : (
          <div
            className="rounded h-10 w-10 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10"
            style={{
              background: `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`,
            }}
          />
        )}
        <div>
          <div className="text-slate-900 truncate sm:pr-20 dark:text-slate-100">
            {dayInfo?.extraDayInfo?.label ?? dayInfo?.legend?.label}
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
