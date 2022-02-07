import { useSubjects } from '@lib/hooks';
import SubjectsBadge from './Subjects.Badge';
import SubjectsTableHeader from './Subjects.TableHeader';
import SubjectsTableRow from './Subjects.TableRow';

interface Props {}

const Subjects = (props: Props) => {
  const subjects = useSubjects();

  return (
    <div className="min-w-min bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
      {Object.entries(subjects).map(([subjectCode, subject]) => (
        <div key={subjectCode}>
          <div className="bg-slate-200/90 dark:bg-slate-600 px-6 py-3 flex items-center gap-x-2 text-md h-12 w-full font-medium tracking-wider">
            <span className="bg-slate-300 dark:bg-slate-500 rounded-md p-1 text-sm text-slate-500 dark:text-slate-300">
              {subject.code}
            </span>
            <span className="uppercase text-slate-700 dark:text-slate-300">
              {subject.name}
            </span>
            <SubjectsBadge subject={subject} />
          </div>
          <table className="w-full">
            <tbody className="w-full">
              <tr className="bg-slate-100 dark:bg-slate-900 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                <SubjectsTableHeader className="w-[5%]">Turma</SubjectsTableHeader>
                <SubjectsTableHeader className="w-[45%]">
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
              {Object.entries(subject.classes).map(([classCode, classObject]) => (
                <SubjectsTableRow
                  key={classCode}
                  classObject={classObject}
                  subject={subject}
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
