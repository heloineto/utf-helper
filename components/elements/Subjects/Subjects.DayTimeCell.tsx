import { SettingsContext } from '@lib/context';
import { useContext } from 'react';
import classNames from 'clsx';
import { highlightCell } from '@lib/utils/schedule';

type Props = {
  dayTimeCode: string;
  locationCode: string;
  selected: boolean;
};

const SubjectsDayTimeCell = ({
  dayTimeCode,
  locationCode,
  className,
  selected,
}: Props & ComponentProps<'div'>) => {
  const { schedule, setSchedule, theme } = useContext(SettingsContext);

  return (
    <div className={classNames(className, 'inline-block w-12 p-0.5')}>
      <div
        className="text-xs flex flex-col items-center justify-center rounded-lg border border-slate-200 dark:border-transparent bg-white dark:bg-slate-700 hover:bg-sky-50 dark:hover:bg-sky-900 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow dark:shadow-inner hover:shadow-sky-300 dark:hover:shadow-sky-700"
        onMouseEnter={() => highlightCell(dayTimeCode, true, theme, selected)}
        onMouseLeave={() => highlightCell(dayTimeCode, false, theme, selected)}
      >
        <div className="font-bold text-slate-800 dark:text-slate-300">{dayTimeCode}</div>
        <div className="text-slate-500 dark:text-slate-400">{locationCode}</div>
      </div>
    </div>
  );
};

export default SubjectsDayTimeCell;
