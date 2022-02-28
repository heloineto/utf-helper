import type { DateTime } from 'luxon';

interface Props {
  monthDate: DateTime;
}

const MonthHeader = ({ monthDate }: Props) => {
  const { monthLong, year } = monthDate;

  return (
    <div className="h-10 flex items-center justify-center text-slate-800 dark:text-slate-100 font-bold text-xl">
      {`${monthLong.charAt(0).toUpperCase() + monthLong.slice(1)} ${year}`}
    </div>
  );
};

export default MonthHeader;
