import clsx from 'clsx';
import { DateTime } from 'luxon';

import MonthHeader from './Month.Header';
import MonthTable from './Month.Table';

interface Props {
  className?: string;
  month?: number;
  year?: number;
}

const Month = ({ month, year, className }: Props) => {
  const date = DateTime.fromObject({ month, year }) || DateTime.now();
  if (!date.isValid) throw new Error(`${date.invalidReason}. ${date.invalidExplanation}`);

  console.log(date);

  return (
    <div className={clsx(className, 'bg-gray-800 rounded-xl')}>
      <MonthHeader date={date} />
      <MonthTable date={date} />
    </div>
  );
};

export default Month;
