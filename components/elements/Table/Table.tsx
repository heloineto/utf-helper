import { useSubjects } from '@lib/hooks';

interface Props {}

const Table = (props: Props) => {
  const subjects = useSubjects();

  return (
    <table className="shadow overflow-y-scroll w-full">
      <tbody className="bg-white divide-y divide-gray-200">
        {Object.entries(subjects).map(([subjectCode, subject]) => (
          <div key={subjectCode}>
            <tr className="bg-gray-50 w-full relative subject-header">
              <td className="h-12">
                <div className="absolute w-full top-0 left-0 px-6 py-3 text-left text-md font-medium text-gray-600 uppercase tracking-wider">
                  {`${subject.code} - ${subject.name}`}
                </div>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="bg-gray-50">
              <td
                scope="col"
                className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Turma
              </td>
              <td
                scope="col"
                className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Horário
              </td>
              <td
                scope="col"
                className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Professor
              </td>
              <td
                scope="col"
                className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Vagas
              </td>
              <td
                scope="col"
                className="px-6 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Optativa
              </td>
            </tr>
            {Object.entries(subject.classes).map(([classCode, classObj]) => (
              <tr
                key={`${subjectCode}-${classCode}`}
                className="utf-class hover:bg-yellow-100 cursor-pointer transition-all duration-900"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {classCode}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 break-words">
                  {/* {classObj.schedule} */}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{classObj.professor}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {classObj.vacanciesTotal}
                </td>
                <td className="px-6 py-4 text-gray-500 text-sm text-right break-words w-80">
                  {classObj.optional}
                </td>
              </tr>
            ))}{' '}
          </div>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
