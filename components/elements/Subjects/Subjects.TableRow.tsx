import { ScheduleContext } from '@lib/context';
import { highlightGroup } from '@lib/utils/schedule';
import { useContext } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';

type Props = {
  classCode: string;
  classObj: {
    vacanciesTotal: string;
    vacanciesFreshman: string;
    reservationType: string;
    priorityMajors: string;
    schedule: {
      dayTimeCode: string;
      locationCode: string;
    }[];
    professor: string;
    optional: string;
  };
};

const SubjectsTableRow = ({ classCode, classObj }: Props) => {
  const { setSchedule } = useContext(ScheduleContext);

  return (
    <tr
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
  );
};

export default SubjectsTableRow;