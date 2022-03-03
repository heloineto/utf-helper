import { UserDataContext } from '@lib/context';
import { useContext, useState } from 'react';

type Props = {};

const Schedule = ({}: Props) => {
  const { schedule } = useContext(UserDataContext);
  const [selectedClass, setSelectedClass] = useState<ClassObject | null>(null);
  const [classDialogOpen, setClassDialogOpen] = useState(false);

  return (
    <>
      <table
        className="bg-slte-100 dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-xs flex-grow min-w-[55rem] min-h-[50rem]"
        cellSpacing={0}
        cellPadding={2}
      >
        <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50 text-center">
          <tr className="shadow">
            <td className="w-[calc(100%/35)]" />
            <td className="font-bold w-[calc(100%*2/35)] text-sm text-slate-700 dark:text-slate-300">
              Início
            </td>
            <td className="font-bold w-[calc(100%*2/35)] text-sm text-slate-700 dark:text-slate-300">
              Térm.
            </td>
            {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(
              (day, index) => (
                <td key={day} className="text-sm w-[calc(100%*5/35)] h-8">
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
