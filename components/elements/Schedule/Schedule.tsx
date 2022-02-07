import { SettingsContext } from '@lib/context';
import { useContext, useState } from 'react';
import ScheduleClassCell from './Schedule.ClassCell';
import ScheduleClassDialog from './Schedule.ClassObjectModal';

type Props = {};

const Schedule = ({}: Props) => {
  const { schedule } = useContext(SettingsContext);
  const [selectedClass, setSelectedClass] = useState<ClassObject | null>(null);

  return (
    <>
      <table
        className="bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-xs flex-grow"
        cellSpacing={0}
        cellPadding={2}
      >
        <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50 text-center">
          <tr className="bg-slate-200 dark:bg-slate-700 shadow">
            <td className="min-w-[2rem]" />
            <td className="font-bold min-w-[2rem] text-sm text-slate-700 dark:text-slate-300">
              Início
            </td>
            <td className="font-bold min-w-[2rem] text-sm text-slate-700 dark:text-slate-300">
              Térm.
            </td>
            {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(
              (day, index) => (
                <td key={day} className="text-sm min-w-[7.5rem] w-[calc(100%*3/21)]">
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
              <tr
                key={timeCode}
                className="divide-x divide-slate-200 dark:divide-slate-700"
              >
                <td className="font-semibold text-slate-800 dark:text-slate-100 w-8">
                  {timeCode}
                </td>
                <th className="font-medium text-slate-600 dark:text-slate-400">
                  {start}
                </th>
                <th className="font-medium text-slate-600 dark:text-slate-400">{end}</th>
                {Object.entries(days).map(([dayCode, classObject]) => {
                  const [shitfCode, numberCode] = timeCode.split('');

                  return (
                    <td key={dayCode} className="relative" id={`${dayCode}${timeCode}`}>
                      {classObject && (
                        <ScheduleClassCell
                          classObject={classObject}
                          timeCode={timeCode}
                          dayCode={dayCode}
                          onClick={() => setSelectedClass(classObject)}
                        />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
      <ScheduleClassDialog
        open={!!selectedClass}
        onClose={() => setSelectedClass(null)}
        classObject={selectedClass}
      />
    </>
  );
};

export default Schedule;
