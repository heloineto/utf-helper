import { ScheduleContext } from '@lib/context';
import { useContext } from 'react';

type Props = {};

const Schedule = ({}: Props) => {
  const { schedule, setSchedule } = useContext(ScheduleContext);

  return (
    <table
      className="bg-white border-slate-100 text-xs flex-grow"
      cellSpacing={0}
      cellPadding={2}
    >
      <tbody className="bg-white divide-y divide-slate-100 text-center">
        <tr className="divide-x divide-slate-50 shadow">
          <td className="min-w-[2rem]" />
          <td className="font-bold min-w-[2rem]">Início</td>
          <td className="font-bold min-w-[2rem]">Térm.</td>
          {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(
            (day, index) => (
              <td key={day} className="text-sm min-w-[10rem] w-[calc(100%*3/21)]">
                <span className="text-slate-600 font-medium">{day}</span>
                <span className="text-slate-800 ml-1 font-bold">{index + 2}</span>
              </td>
            )
          )}
        </tr>
        {schedule &&
          Object.entries(schedule).map(([timeCode, { start, end, days }]) => (
            <tr key={timeCode} className="divide-x divide-slate-50">
              <td className="font-semibold text-slate-800 w-8">{timeCode}</td>
              <th className="text-slate-600 font-medium">{start}</th>
              <th className="text-slate-600 font-medium">{end}</th>
              {Object.entries(days).map(([dayCode, {}]) => (
                <td key={dayCode}></td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Schedule;
