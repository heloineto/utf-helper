import clsx from 'clsx';
import { DateTime } from 'luxon';
import { useMemo } from 'react';

import MonthHeader from './Month.Header';
import MonthTable from './Month.Table';

interface Props extends ComponentProps<'div'> {
  month?: number;
  year?: number;
  monthInfo?: MonthInfo;
  classes?: Record<'monthHeader', string>;
}

const Month = ({ className, classes, month, year, monthInfo }: Props) => {
  const monthDate = useMemo(
    () => DateTime.fromObject({ month, year }) || DateTime.now(),
    [month, year]
  );

  if (!monthDate.isValid) {
    throw new Error(`${monthDate.invalidReason}. ${monthDate.invalidExplanation}`);
  }

  return (
    <div
      className={clsx(
        className,
        'bg-white rounded-lg shadow ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10'
      )}
    >
      <MonthHeader className={classes?.monthHeader} monthDate={monthDate} />
      <MonthTable monthDate={monthDate} monthInfo={monthInfo} />
    </div>
  );
};

export default Month;
