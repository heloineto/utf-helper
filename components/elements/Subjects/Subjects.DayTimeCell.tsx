import { ScheduleContext } from '@lib/context';
import { useContext } from 'react';
import { highlightCell } from '@lib/utils/schedule';

type Props = {
  dayTimeCode: string;
  locationCode: string;
};

const SubjectsDayTimeCell = ({ dayTimeCode, locationCode }: Props) => {
  const { schedule, setSchedule } = useContext(ScheduleContext);

  return (
    <div
      className="text-xs flex flex-col items-center justify-center rounded-lg border border-slate-200 dark:border-transparent bg-white dark:bg-slate-700 hover:bg-sky-50 dark:hover:bg-sky-900 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow dark:shadow-inner hover:shadow-sky-300 dark:hover:shadow-sky-700"
      onMouseEnter={() => setSchedule && highlightCell(setSchedule, dayTimeCode, true)}
      onMouseLeave={() => setSchedule && highlightCell(setSchedule, dayTimeCode, false)}
    >
      <div className="font-bold text-slate-800 dark:text-slate-300">{dayTimeCode}</div>
      <div className="text-slate-500 dark:text-slate-400">{locationCode}</div>
    </div>
  );
};

export default SubjectsDayTimeCell;
