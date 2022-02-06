import { ScheduleContext } from '@lib/context';
import { useContext } from 'react';
import classNames from 'clsx';

type Props = {};

const Schedule = ({}: Props) => {
  const { schedule, setSchedule } = useContext(ScheduleContext);

  return (
    <table
      className="transition-colors duration-500 bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-xs flex-grow"
      cellSpacing={0}
      cellPadding={2}
    >
      <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-center">
        <tr className="divide-x divide-slate-50 dark:divide-slate-700 shadow">
          <td className="min-w-[2rem]" />
          <td className="font-bold min-w-[2rem] text-sm text-slate-700 dark:text-slate-300">
            Início
          </td>
          <td className="font-bold min-w-[2rem] text-sm text-slate-700 dark:text-slate-300">
            Térm.
          </td>
          {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(
            (day, index) => (
              <td key={day} className="text-sm min-w-[10rem] w-[calc(100%*3/21)]">
                <span className="text-slate-600 dark:text-slate-300 font-medium">
                  {day}
                </span>
                <span className="text-slate-800 dark:text-slate-100 ml-1 font-bold">
                  {index + 2}
                </span>
              </td>
            )
          )}
        </tr>
        {schedule &&
          Object.entries(schedule).map(([timeCode, { start, end, days }]) => (
            <tr key={timeCode} className="divide-x divide-slate-50 dark:divide-slate-700">
              <td className="font-semibold text-slate-800 dark:text-slate-100 w-8">
                {timeCode}
              </td>
              <th className="font-medium text-slate-600 dark:text-slate-400">{start}</th>
              <th className="font-medium text-slate-600 dark:text-slate-400">{end}</th>
              {Object.entries(days).map(([dayCode, { highlights }]) => (
                <td
                  key={dayCode}
                  className={classNames('transition-all duration-500')}
                  style={{
                    background: highlights?.cell
                      ? 'repeating-linear-gradient(45deg, rgba(14, 165, 233, 0.6), rgba(14, 165, 233, 0.6) 0.25rem, rgba(56, 189, 248, 0.6) 0.25rem, rgba(56, 189, 248, 0.6) 0.5rem)'
                      : highlights?.group
                      ? 'repeating-linear-gradient(45deg, rgba(14, 165, 233, 0.25), rgba(14, 165, 233, 0.25) 0.25rem, rgba(56, 189, 248, 0.25) 0.25rem, rgba(56, 189, 248, 0.25) 0.5rem)'
                      : undefined,
                  }}
                ></td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Schedule;
