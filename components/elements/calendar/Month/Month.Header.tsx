import type { DateTime } from 'luxon';

interface Props {
  date: DateTime;
}

const MonthHeader = ({ date }: Props) => {
  const { monthLong, year } = date;

  return (
    <div className="h-10 flex items-center justify-center text-slate-800 dark:text-slate-100 font-bold text-xl">
      {`${monthLong.charAt(0).toUpperCase() + monthLong.slice(1)} ${year}`}
    </div>
  );
};

export default MonthHeader;
