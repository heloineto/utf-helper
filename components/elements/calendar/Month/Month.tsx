import clsx from 'clsx';
import { DateTime } from 'luxon';
import { useMemo } from 'react';

import MonthHeader from './Month.Header';
import MonthTable from './Month.Table';

interface Props extends ComponentProps<'div'> {
  month?: number;
  year?: number;
  monthInfo?: MonthInfo;
}

const Month = ({ month, year, className, monthInfo }: Props) => {
  const monthDate = useMemo(
    () => DateTime.fromObject({ month, year }) || DateTime.now(),
    [month, year]
  );

  if (!monthDate.isValid) {
    throw new Error(`${monthDate.invalidReason}. ${monthDate.invalidExplanation}`);
  }

  return (
    <div className={clsx(className, 'bg-slate-400 dark:bg-slate-700 rounded-xl')}>
      <MonthHeader monthDate={monthDate} />
      <MonthTable monthDate={monthDate} monthInfo={monthInfo} />
    </div>
  );
};

export default Month;
