import SubjectsTableHeader from './Subjects.TableHeader';
import SubjectsTableRow from './Subjects.TableRow';
import { useCollectionObject } from '@lib/hooks';
import SubjectsLoading from './Subjects.Loading';
import { orderBy } from 'firebase/firestore';
import SubjectsEmptyState from './Subjects.EmptyState';
import { isEmpty } from 'lodash';
import SubjectsSelectedClasses from './Subjects.SelectedClasses';
import { useMediaQuery, useTheme } from '@mui/material';
import { useMemo } from 'react';
import Badge from '@components/elements/feedback/Badge';

interface Props {
  campus: string;
  course: string;
}

const Subjects = ({ campus, course }: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('sm'));

  //! See if this is causing too many reads
  const [subjects, loading, error] = useCollectionObject<Subject>(
    `campuses/${campus}/courses/${course}/subjects-2022-01`,
    orderBy('name')
  );

  const rows = useMemo(
    () => ({
      schedule: true,
      teacher: true,
      framing: true,
      optional: !mobile,
    }),
    [mobile]
  );

  if (loading) {
    return (
      <div className="h-full grid place-items-center">
        <SubjectsLoading />
      </div>
    );
  }

  if (!subjects || isEmpty(subjects)) {
    return (
      <div className="h-full grid place-items-center">
        <SubjectsEmptyState />
      </div>
    );
  }

  return (
    <>
      <SubjectsSelectedClasses />
      <div className="min-w-min bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
        {Object.entries(subjects).map(([subjectCode, subject]) => (
          <div key={subjectCode}>
            <div className="bg-slate-200/90 dark:bg-slate-600 px-2 sm:px-6 flex items-center gap-x-1.5 sm:gap-x-2 text-md h-10 sm:h-12 w-full font-medium tracking-wider">
              <span className="bg-slate-300 dark:bg-slate-500 rounded-md p-1 text-sm text-slate-500 dark:text-slate-300">
                {subject.code}
              </span>
              <span className="uppercase text-slate-700 dark:text-slate-300">
                {subject.name}
              </span>
              <Badge>{subject.weeklyLessons} Aulas Semanais</Badge>
            </div>
            <table className="w-full">
              <tbody className="w-full">
                <tr className="bg-slate-100 dark:bg-slate-900 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <SubjectsTableHeader className="w-[2%]">Turma</SubjectsTableHeader>
                  {rows.schedule && (
                    <SubjectsTableHeader className="w-[45%]">
                      Horário &amp; Local
                    </SubjectsTableHeader>
                  )}
                  {rows.teacher && (
                    <SubjectsTableHeader className="w-[20%]">
                      {mobile ? 'Prof.' : 'Professor (a)'}
                    </SubjectsTableHeader>
                  )}
                  {rows.framing && (
                    <SubjectsTableHeader className="w-[5%] text-center">
                      {mobile ? 'Enquad.' : 'Enquadramento'}
                    </SubjectsTableHeader>
                  )}
                  {rows.optional && (
                    <SubjectsTableHeader className="w-[20%] text-right">
                      Optativa
                    </SubjectsTableHeader>
                  )}
                </tr>
                {Object.entries(subject.classes).map(([classCode, classObject]) => (
                  <SubjectsTableRow
                    key={classCode}
                    classObject={classObject}
                    subject={subject}
                    campus={campus}
                    course={course}
                    rows={rows}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default Subjects;
