import { ScheduleContext } from '@lib/context';
import { useSubjects } from '@lib/hooks';
import { highlightGroup } from '@lib/utils/schedule';
import { useContext } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import SubjectsTableHeader from './Subjects.TableHeader';
import SubjectsTableRow from './Subjects.TableRow';

interface Props {}

const Subjects = (props: Props) => {
  const subjects = useSubjects();

  return (
    <div className="w-full transition-colors duration-500 bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
      {Object.entries(subjects).map(([subjectCode, subject]) => (
        <div key={subjectCode}>
          <div className="bg-slate-100 dark:bg-slate-600 px-6 py-3 flex items-center gap-x-2 text-md h-12 w-full font-medium tracking-wider transition-colors duration-500">
            <span className="bg-slate-200 dark:bg-slate-500 rounded-md p-1 text-sm text-slate-500 dark:text-slate-300 transition-colors duration-500">
              {subject.code}
            </span>
            <span className="uppercase text-slate-700 dark:text-slate-300">
              {subject.name}
            </span>
          </div>
          <table className="w-full">
            <tbody className="w-full">
              <tr className="bg-slate-50 dark:bg-slate-900 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors duration-500">
                <SubjectsTableHeader className="w-[5%]">Turma</SubjectsTableHeader>
                <SubjectsTableHeader className="w-[35%]">
                  Horário &amp; Local
                </SubjectsTableHeader>
                <SubjectsTableHeader className="w-[20%]">Professor</SubjectsTableHeader>
                <SubjectsTableHeader className="w-[5%] text-center">
                  Vagas
                </SubjectsTableHeader>
                <SubjectsTableHeader className="w-[20%] text-right">
                  Optativa
                </SubjectsTableHeader>
              </tr>
              {Object.entries(subject.classes).map(([classCode, classObj]) => (
                <SubjectsTableRow
                  key={classCode}
                  classCode={classCode}
                  classObj={classObj}
                />
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
