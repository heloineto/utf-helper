import { ScheduleContext } from '@lib/context';
import { useContext, useState } from 'react';
import { merge } from 'lodash';

type Props = {
  dayTimeCode: string;
  locationCode: string;
};

const SubjectsDayTimeCell = ({ dayTimeCode, locationCode }: Props) => {
  const { schedule, setSchedule } = useContext(ScheduleContext);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="text-xs flex flex-col items-center justify-center rounded-lg border border-slate-200 dark:border-transparent dark:bg-slate-700 transition-all duration-500 hover:bg-sky-50 dark:hover:bg-sky-900 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow dark:shadow-inner hover:shadow-sky-300 dark:hover:shadow-sky-700"
      onMouseEnter={() => {
        const [dayCode, shiftCode, timeCode] = dayTimeCode.split('');

        const toMerge = {
          [`${shiftCode}${timeCode}`]: {
            days: { [dayCode]: { highlights: { cell: true } } },
          },
        };

        setSchedule?.((value) => merge({ ...value }, toMerge));
      }}
      onMouseLeave={() => {
        const [dayCode, shiftCode, timeCode] = dayTimeCode.split('');

        const toMerge = {
          [`${shiftCode}${timeCode}`]: {
            days: { [dayCode]: { highlights: { cell: false } } },
          },
        };

        setSchedule?.((value) => merge({ ...value }, toMerge));
      }}
    >
      <div className="font-bold text-slate-800 dark:text-slate-300">{dayTimeCode}</div>
      <div className="text-slate-500 dark:text-slate-400">{locationCode}</div>
    </div>
  );
};

export default SubjectsDayTimeCell;
