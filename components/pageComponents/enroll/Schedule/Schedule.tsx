import ClassDialog from '@components/elements/modals/ClassDialog';
import { UserDataContext } from '@lib/context';
import { scheduleStructure } from '@lib/utils/schedule';
import { CircularProgress } from '@mui/material';
import { useContext, useState } from 'react';
import ClassCell from '../ClassCell';
import useClassCells from './lib/hooks/useClassCells';

type Props = {};

const Schedule = ({}: Props) => {
  const { loading } = useContext(UserDataContext);

  const classCells = useClassCells();

  const [selectedClassCell, setSelectedClassCell] = useState<ClassCell | null>(null);

  return (
    <div className="relative flex-grow">
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full grid place-items-center">
          <CircularProgress />
        </div>
      )}
      <table
        className="h-full w-full bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-800 text-xs flex-grow min-w-[55rem] min-h-[50rem]"
        cellSpacing={0}
        cellPadding={2}
      >
        <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50 text-center">
          <tr className="bg-slate-200 dark:bg-slate-700 shadow">
            <th className="w-[calc(100%/47)]" />
            <th className="font-bold w-[calc(100%*2/47)] text-sm text-slate-700 dark:text-slate-300">
              Início
            </th>
            <th className="font-bold w-[calc(100%*2/47)] text-sm text-slate-700 dark:text-slate-300">
              Térm.
            </th>
            {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(
              (day, index) => (
                <th key={day} className="text-sm w-[calc(100%*7/47)] h-8">
                  <span className="text-slate-600 dark:text-slate-300 font-medium">
                    {day}
                  </span>
                  <span className="text-slate-800 dark:text-slate-100 ml-1 font-bold">
                    {index + 2}
                  </span>
                </th>
              )
            )}
          </tr>
          {Object.entries(scheduleStructure).map(([timeCode, { start, end, days }]) => (
            <tr
              key={timeCode}
              className="divide-x divide-slate-200 dark:divide-slate-700 relative"
            >
              <td className="font-semibold text-slate-800 dark:text-slate-100">
                {timeCode}
              </td>
              <td className="font-medium text-slate-600 dark:text-slate-400">{start}</td>
              <td className="font-medium text-slate-600 dark:text-slate-400">{end}</td>
              {Object.keys(days).map((dayCode) => {
                const classCell = classCells?.[timeCode]?.[dayCode];

                return (
                  <td
                    key={dayCode}
                    id={`schedule-${dayCode}${timeCode}`}
                    className="relative"
                  >
                    {classCell && (
                      <ClassCell
                        length={classCell.length}
                        classObject={classCell.classObject}
                        onClick={() => setSelectedClassCell(classCell)}
                      />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedClassCell && (
        <ClassDialog
          campus={selectedClassCell.campus}
          course={selectedClassCell.course}
          classObject={selectedClassCell.classObject}
          open={!!selectedClassCell}
          onClose={() => setSelectedClassCell(null)}
        />
      )}
    </div>
  );
};

export default Schedule;
