import SubjectsTableHeader from './Subjects.TableHeader';
import SubjectsTableRow from './Subjects.TableRow';
import SubjectsLoading from './Subjects.Loading';
import { orderBy } from 'firebase/firestore';
import SubjectsEmptyState from './Subjects.EmptyState';
import { isEmpty } from 'lodash';
import { useMediaQuery, useTheme } from '@mui/material';
import { useContext, useMemo } from 'react';
import Badge from '@components/elements/feedback/Badge';
import { VariableSizeList as List } from 'react-window';
import useCollectionArray from '@lib/hooks/useCollectionArray';
import AutoSizer from 'react-virtualized-auto-sizer';
import { EnrollContext } from '@lib/context';

interface Props {
  campus: string;
  course: string;
}

const Subjects = ({ campus, course }: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('sm'));
  const { searchTerm } = useContext(EnrollContext);

  const [subjects, loading, error] = useCollectionArray<Subject>(
    `campuses/${campus}/courses/${course}/subjects-2022-01`,
    orderBy('name')
  );

  const subjectsFiltered = useMemo(() => {
    if (!searchTerm || !subjects) return subjects;

    const parsedTerm = searchTerm
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return subjects.filter((subject) => {
      if (
        subject.name
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(parsedTerm)
      )
        return true;
      if (subject.code.toLowerCase().includes(parsedTerm)) return true;
      for (const key in subject.classes) {
        if (subject.classes[key].code.toLowerCase().includes(parsedTerm)) return true;
      }

      return false;
    });
  }, [subjects]);

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

  if (!subjectsFiltered || isEmpty(subjectsFiltered)) {
    return (
      <div className="h-full grid place-items-center">
        <SubjectsEmptyState />
      </div>
    );
  }

  return (
    <>
      <div className="h-full bg-slate-200/90 dark:bg-slate-600 divide-y divide-slate-200 dark:divide-slate-700">
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              width={width}
              itemCount={subjectsFiltered.length}
              itemSize={(index) =>
                Object.keys(subjectsFiltered[index].classes).length * 144 + 48 + 24
              }
            >
              {({ index, style }) => {
                const subject = subjectsFiltered[index];
                return (
                  <div style={style}>
                    <div
                      className="min-w-min w-full px-2 sm:px-6 flex items-center gap-x-1.5 sm:gap-x-2 text-md font-medium tracking-wider"
                      style={{ height: 48, maxHeight: 48 }}
                    >
                      <span className="bg-slate-300 dark:bg-slate-500 rounded-md p-1 text-sm text-slate-500 dark:text-slate-300">
                        {subject.code}
                      </span>
                      <span className="uppercase text-slate-700 dark:text-slate-300 whitespace-nowrap text-ellipsis">
                        {subject.name}
                      </span>
                      <Badge>{subject.weeklyLessons} Aulas Semanais</Badge>
                    </div>
                    <table className="w-full">
                      <tbody className="w-full">
                        <tr
                          className="bg-slate-100 dark:bg-slate-900 text-[0.7rem] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider"
                          style={{
                            height: 24,
                            maxHeight: 24,
                          }}
                        >
                          <SubjectsTableHeader className="w-[2%]">
                            Turma
                          </SubjectsTableHeader>
                          {rows.schedule && (
                            <SubjectsTableHeader className="w-[45%]">
                              Horário &amp; Local
                            </SubjectsTableHeader>
                          )}
                          {rows.teacher && (
                            <SubjectsTableHeader className="w-[20%]">
                              Prof.
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
                        {Object.entries(subject.classes).map(
                          ([classCode, classObject]) => (
                            <SubjectsTableRow
                              key={classCode}
                              className="h-[9rem] max-h-[9rem]"
                              classObject={classObject}
                              subject={subject}
                              campus={campus}
                              course={course}
                              rows={rows}
                            />
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                );
              }}
            </List>
          )}
        </AutoSizer>
      </div>
    </>
  );
};

export default Subjects;
