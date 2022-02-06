import { ScheduleContext } from '@lib/context';
import { useSubjects } from '@lib/hooks';
import { highlightGroup } from '@lib/utils/schedule';
import { useContext } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import SubjectsTableHeader from './Subjects.TableHeader';

interface Props {}

const Subjects = (props: Props) => {
  const subjects = useSubjects();
  const { setSchedule } = useContext(ScheduleContext);

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
                <tr
                  key={classCode}
                  className="cursor-pointer transition-all duration-900"
                  onMouseEnter={() =>
                    setSchedule &&
                    highlightGroup(
                      setSchedule,
                      classObj.schedule.map(({ dayTimeCode }) => dayTimeCode),
                      true
                    )
                  }
                  onMouseLeave={() =>
                    setSchedule &&
                    highlightGroup(
                      setSchedule,
                      classObj.schedule.map(({ dayTimeCode }) => dayTimeCode),
                      false
                    )
                  }
                >
                  <SubjectsTableData>{classCode}</SubjectsTableData>
                  <SubjectsTableData
                    className="break-words"
                    // //! Time should show red if it's unavailable
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-0.5">
                      {classObj.schedule.map(({ dayTimeCode, locationCode }, index) => (
                        <SubjectsDayTimeCell
                          key={index}
                          dayTimeCode={dayTimeCode}
                          locationCode={locationCode}
                        />
                      ))}
                    </div>
                  </SubjectsTableData>
                  <SubjectsTableData className="whitespace-pre-line">
                    {classObj.professor}
                  </SubjectsTableData>
                  <SubjectsTableData className="text-slate-500 font-normal text-center">
                    {classObj.vacanciesTotal}
                  </SubjectsTableData>
                  <SubjectsTableData className="text-right break-words w-80">
                    {classObj.optional}
                  </SubjectsTableData>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Subjects;
