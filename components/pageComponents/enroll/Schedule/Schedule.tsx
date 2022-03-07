import { scheduleStructure } from '@lib/utils/schedule';
import { useState } from 'react';
import ScheduleClassCell from './Schedule.ClassCell';
import ScheduleClassDialog from './Schedule.ScheduleClassDialog';
import ScheduleHighlight from './Schedule.Highlight';

type Props = {};

const Schedule = ({}: Props) => {
  const [selectedClass, setSelectedClass] = useState<ClassObject | null>(null);
  const [classDialogOpen, setClassDialogOpen] = useState(false);

  return (
    <>
      <table
        className="bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-xs flex-grow min-w-[55rem] min-h-[50rem]"
        cellSpacing={0}
        cellPadding={2}
      >
        <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50 text-center">
          <tr className="bg-slate-200 dark:bg-slate-700 shadow">
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
          {Object.entries(scheduleStructure).map(([timeCode, { start, end, days }]) => (
            <tr
              key={timeCode}
              className="divide-x divide-slate-200 dark:divide-slate-700"
            >
              <td className="font-semibold text-slate-800 dark:text-slate-100">
                {timeCode}
              </td>
              <th className="font-medium text-slate-600 dark:text-slate-400">{start}</th>
              <th className="font-medium text-slate-600 dark:text-slate-400">{end}</th>
              {Object.entries(days).map(([dayCode, classObject]) => {
                return (
                  <td
                    key={dayCode}
                    id={`schedule-${dayCode}${timeCode}}`}
                    className="relative"
                  >
                    <ScheduleHighlight timeCode={timeCode} dayCode={dayCode} />
                    {classObject && (
                      <ScheduleClassCell
                        classObject={classObject}
                        timeCode={timeCode}
                        dayCode={dayCode}
                        onClick={() => {
                          setSelectedClass(classObject);
                          setClassDialogOpen(true);
                        }}
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
        open={classDialogOpen}
        onClose={() => setClassDialogOpen(false)}
        classObject={selectedClass}
      />
    </>
  );
};

export default Schedule;
