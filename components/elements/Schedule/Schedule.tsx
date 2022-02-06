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
      <tbody className="bg-white divide-y divide-gray-100 text-center">
        <tr className="divide-x divide-gray-50 border-b-1 shadow">
          <td className="w-8" />
          <td className="font-bold w-16">Início</td>
          <td className="font-bold w-16">Térm.</td>
          {['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'].map(
            (day, index) => (
              <td key={day} className="text-sm">
                <span className="text-gray-600 font-medium">{day}</span>
                <span className="text-gray-800 ml-1 font-bold">{index + 2}</span>
              </td>
            )
          )}
        </tr>
        {schedule &&
          Object.entries(schedule).map(([timeCode, { start, end, days }]) => (
            <tr key={timeCode} className="divide-x divide-gray-50">
              <td className="text-xs w-8">{timeCode}</td>
              <th>{start}</th>
              <th>{end}</th>
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
