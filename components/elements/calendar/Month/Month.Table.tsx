import { DateTime, Info } from 'luxon';
import { useMemo } from 'react';
import clsx from 'clsx';

import { getColumns, getMonthData } from './Month.utils';

interface Props {
  date: DateTime;
}

const MonthTable = ({ date }: Props) => {
  const data = useMemo(() => getMonthData(date), [date]);

  const weekdays = useMemo(
    () =>
      Info.weekdays('short').map(
        (weekday) => weekday.charAt(0).toUpperCase() + weekday.slice(1, -1)
      ),
    []
  );

  return (
    <div className="p-2">
      <table className="w-full table-fixed">
        <thead>
          <tr className="table-row">
            {weekdays.map((weekday) => (
              <th key={weekday} className="table-cell">
                <div className="text-slate-100 font-semibold text-md">{weekday}</div>
              </th>
            ))}
          </tr>
        </thead>
        {/* <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  const cellDate = cell.value;
                  const isAnotherMonth = !cellDate.hasSame(date, 'month');
                  const isSunday = cellDate.weekday === 7;

                  return (
                    <td className="table-cell" {...cell.getCellProps()}>
                      <div
                        className={clsx(
                          isAnotherMonth && 'text-slate-400 border-0 bg-transparent',

                          isSunday &&
                            !isAnotherMonth &&
                            'text-slate-200 border-slate-700',
                          `
                          bg-[#2E2F33]
                          relative w-full h-12 text-white font-semibold border-2 rounded-md
                          overflow-hidden cursor-pointer transition-shadow duration-1000

                          hover:transition-shadow hover:duration-[0s] hover:shadow-calendar-primary-500
                          flex flex-col items-center
                          `
                        )}
                      >
                        <div className="text-md w-full  text-right mr-1.5">
                          {cell.render('Cell')}
                        </div>
                        {!isAnotherMonth && !isSunday && (
                          <div className="h-2 w-2 mt-auto mb-1.5 bg-white rounded-full"></div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </div>
  );
};

export default MonthTable;
