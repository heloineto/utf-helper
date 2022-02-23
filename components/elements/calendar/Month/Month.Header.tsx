import type { DateTime } from 'luxon';

interface Props {
  date: DateTime;
}

const MonthHeader = ({ date }: Props) => {
  const { monthLong, year } = date;

  return (
    <div className="h-10 flex items-center justify-center text-gray-100 font-bold text-xl">
      {`${monthLong.charAt(0).toUpperCase() + monthLong.substr(1)} ${year}`}{' '}
    </div>
  );
};

export default MonthHeader;
