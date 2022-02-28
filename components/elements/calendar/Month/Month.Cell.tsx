import { MouseEvent, useContext, useState } from 'react';
import { DateTime } from 'luxon';
import classNames from 'clsx';
import { colord } from 'colord';
import { SettingsContext } from '@lib/context';

type Props = {
  dayDate: DateTime;
  monthDate: DateTime;
  dayInfo: DayInfo | undefined;
  extraDayInfo: ExtraDayInfoParsed;
  onShowPopover: (
    e: MouseEvent<HTMLTableCellElement, globalThis.MouseEvent>,
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
  const [hover, setHover] = useState(false);
  const { darkMode } = useContext(SettingsContext);

  const isAnotherMonth = !dayDate.hasSame(monthDate, 'month');
  const isSunday = dayDate.weekday === 7;

  let sundayColor = darkMode ? '#444444' : '#f3f3f3';
  let normalColor = darkMode ? '#f3f3f3' : '#444444';
  let fallbackColor = isSunday ? sundayColor : normalColor;

  const color = dayInfo?.legend?.color ?? fallbackColor;
  const lighterColor = colord(color).lighten(0.25).toHex();

  return (
    <td
      key={dayDate.day}
      onMouseEnter={(e) => {
        if (!dayInfo) return;
        if (isAnotherMonth) return;
        onShowPopover(e, { ...dayInfo, extraDayInfo: extraDayInfo });
        setHover(true);
      }}
      onMouseLeave={() => {
        onHidePopover();
        setHover(false);
      }}
    >
      <div
        className={classNames(
          isAnotherMonth ? '' : 'p-px',
          'rounded-md transition-shadow duration-200'
        )}
        style={{
          background:
            color && !isAnotherMonth
              ? `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`
              : '',
          boxShadow: hover ? `0 0 40px 0 ${color}` : undefined,
        }}
      >
        <div
          className={classNames(
            isAnotherMonth && 'dark:text-slate-700',
            isSunday && !isAnotherMonth && 'text-slate-400 dark:text-slate-200',
            'bg-slate-50 dark:bg-slate-800 relative w-full h-12 text-slate-800 dark:text-slate-300 font-semibold flex flex-col items-center rounded-md overflow-hidden cursor-pointer'
          )}
          style={{
            background: isAnotherMonth
              ? darkMode
                ? 'rgb(15,23,42)'
                : 'rgb(255,255,255)'
              : darkMode
              ? 'radial-gradient(circle, rgb(23,33,51) 0%, rgb(15,23,42) 100%)'
              : 'radial-gradient(circle, rgb(255,255,255) 0%, rgb(241,245,249) 100%)',
          }}
        >
          <div className="text-md w-full  text-right mr-1.5">{dayDate.day}</div>
          {!isAnotherMonth && !isSunday && (
            <div
              className="h-2 w-2 mt-auto mb-1.5 bg-white rounded-full"
              style={{
                background: color
                  ? `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`
                  : '',
              }}
            ></div>
          )}
        </div>
      </div>
    </td>
  );
};

export default MonthCell;
