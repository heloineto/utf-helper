import clsx from 'clsx';
import { DateTime } from 'luxon';
import { MonthContext } from './lib/context';
import useMonth from './lib/hooks/useMonth';
import MonthHeader from './Month.Header';
import MonthTable from './Month.Table';

interface Props extends ComponentProps<'div'> {
  month?: number;
  year?: number;
  monthInfo?: MonthInfo;
  classes?: Record<'monthHeader', string>;
  selectedDate?: DateTime;
  onSelectDate?: (date: DateTime) => void;
}

const Month = ({
  className,
  classes,
  month,
  year,
  monthInfo,
  selectedDate,
  onSelectDate,
}: Props) => {
  const value = useMonth(month, year);

  return (
    <div
      className={clsx(
        className,
        'bg-white rounded-lg shadow ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10'
      )}
    >
      <MonthContext.Provider value={{ ...value, selectedDate, onSelectDate }}>
        <MonthHeader className={classes?.monthHeader} />
        <MonthTable monthInfo={monthInfo} />
      </MonthContext.Provider>
    </div>
  );
};

export default Month;
