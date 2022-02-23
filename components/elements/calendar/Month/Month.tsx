import clsx from 'clsx';
import { DateTime } from 'luxon';
import { useMemo } from 'react';

import MonthHeader from './Month.Header';
import MonthTable from './Month.Table';

interface Props extends ComponentProps<'div'> {
  month?: number;
  year?: number;
}

const Month = ({ month, year, className }: Props) => {
  const date = useMemo(
    () => DateTime.fromObject({ month, year }) || DateTime.now(),
    [DateTime, month, year]
  );

  if (!date.isValid) {
    throw new Error(`${date.invalidReason}. ${date.invalidExplanation}`);
  }

  return (
    <div className={clsx(className, 'bg-slate-800 rounded-xl')}>
      <MonthHeader date={date} />
      <MonthTable date={date} />
    </div>
  );
};

export default Month;
