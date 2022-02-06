import { useSubjects } from '@lib/hooks';
import classNames from 'clsx';

interface Props {}

const SubjectsTable = (props: Props) => {
  const subjects = useSubjects();

  return (
    <div className="w-full bg-white divide-y divide-slate-200">
      {Object.entries(subjects).map(([subjectCode, subject]) => (
        <div key={subjectCode}>
          <div className="bg-slate-100 px-6 py-3 flex items-center gap-x-2 text-md h-12 w-full font-medium text-slate-600 tracking-wider">
            <span className="text-slate-500">{subject.code}</span>
            <div className="h-full w-px bg-slate-400" />
            <span className="uppercase text-slate-700">{subject.name}</span>
          </div>
          <table>
            <tbody className="w-full">
              <tr className="bg-slate-50">
                {['Turma', 'Horário', 'Professor', 'Vagas', 'Optativa'].map(
                  (column, index, columns) => (
                    <th
                      key={column}
                      scope="col"
                      className={classNames(
                        index === columns.length - 1 ? 'text-right' : 'text-left',
                        'px-6 py-1 text-xs font-medium text-slate-500 uppercase tracking-wider'
                      )}
                    >
                      {column}
                    </th>
                  )
                )}
              </tr>
              {Object.entries(subject.classes).map(([classCode, classObj]) => (
                <tr
                  key={`${subjectCode}-${classCode}`}
                  className="utf-class hover:bg-yellow-100 cursor-pointer transition-all duration-900"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {classCode}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900 break-words">
                    {/* {classObj.schedule} */}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-900">
                    {classObj.professor}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {classObj.vacanciesTotal}
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-sm text-right break-words w-80">
                    {classObj.optional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SubjectsTable;
