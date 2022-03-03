import { DateTime } from 'luxon';
import classNames from 'clsx';
import { toStartCase } from '@lib/utils/typescript';
import { useContext } from 'react';
import { MonthContext } from './lib/context';

interface Props extends ComponentProps<'div'> {}

const MonthHeader = ({ className }: Props) => {
  const { monthDate } = useContext(MonthContext);

  const { monthLong, year } = monthDate;

  return (
    <div
      className={classNames(
        className,
        'h-10 flex items-center justify-center text-slate-800 dark:text-slate-100 font-bold text-xl'
      )}
    >
      {`${toStartCase(monthLong)} ${year}`}
    </div>
  );
};

export default MonthHeader;
