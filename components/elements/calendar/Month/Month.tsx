import clsx from 'clsx';
import { DateTime } from 'luxon';
import { useMemo } from 'react';

import MonthHeader from './Month.Header';
import MonthTable from './Month.Table';

interface Props extends ComponentProps<'div'> {
  month?: number;
  year?: number;
  monthData?: MonthData;
}

const Month = ({ month, year, className }: Props) => {
  const date = useMemo(
    () => DateTime.fromObject({ month, year }) || DateTime.now(),
    [month, year]
  );

  if (!date.isValid) {
    throw new Error(`${date.invalidReason}. ${date.invalidExplanation}`);
  }

  return (
    <div className={clsx(className, 'bg-slate-400 dark:bg-slate-700 rounded-xl')}>
      <MonthHeader date={date} />
      <MonthTable date={date} />
    </div>
  );
};

export default Month;
