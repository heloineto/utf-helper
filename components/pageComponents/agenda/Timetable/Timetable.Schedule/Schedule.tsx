import { UserDataContext } from '@lib/context';
import { getWeekdaysStr, getWeekInterval } from '@lib/utils/luxon';
import { useContext, useState } from 'react';
import { TimetableContext } from '../lib/context';

const WEEK_STARTS_SUNDAY = true;

const weekdays = getWeekdaysStr(WEEK_STARTS_SUNDAY, 'short');

type Props = {};

const Schedule = ({}: Props) => {
  const { schedule } = useContext(UserDataContext);
  const { selectedDate } = useContext(TimetableContext);

  const [selectedClass, setSelectedClass] = useState<ClassObject | null>(null);
  const [classDialogOpen, setClassDialogOpen] = useState(false);

  const weekInterval = getWeekInterval(selectedDate);

  return (
    <>
      <table
        className="bg-slte-100 dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-xs flex-grow min-w-[55rem] min-h-[50rem]"
        cellSpacing={0}
        cellPadding={2}
      >
        <tbody className="divide-y divide-slate-200 dark:divide-slate-700/50 text-center">
          <tr className="shadow">
            <td className="w-[calc(100%/35)]" />
            <td className="font-bold w-[calc(100%*2/35)] text-sm text-slate-700 dark:text-slate-300">
              Início
            </td>
            <td className="font-bold w-[calc(100%*2/35)] text-sm text-slate-700 dark:text-slate-300">
              Térm.
            </td>
            {weekdays.slice(1).map((weekday, index) => (
              <td key={weekday} className="text-sm w-[calc(100%*5/35)] h-8">
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {weekday.slice(0, -1).toUpperCase()}
                </div>
                <div className="rounded-full h-8 w-8"></div>
              </td>
            ))}
          </tr>
          {schedule &&
            Object.entries(schedule).map(([timeCode, { start, end, days }]) => (
              <tr
                key={timeCode}
                className="divide-x divide-slate-300 dark:divide-slate-700"
              >
                <td className="font-semibold text-slate-800 dark:text-slate-100">
                  {timeCode}
                </td>
                <th className="font-medium text-slate-600 dark:text-slate-400">
                  {start}
                </th>
                <th className="font-medium text-slate-600 dark:text-slate-400">{end}</th>
                {Object.entries(days).map(([dayCode, classObject]) => {
                  const [shitfCode, numberCode] = timeCode.split('');

                  return (
                    <td
                      key={dayCode}
                      className="relative"
                      id={`${dayCode}${timeCode}`}
                    ></td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Schedule;
