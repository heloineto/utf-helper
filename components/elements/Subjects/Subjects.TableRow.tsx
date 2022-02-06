import { ScheduleContext, SettingsContext } from '@lib/context';
import { highlightGroup } from '@lib/utils/schedule';
import { isEmpty } from 'lodash';
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
  const { direction } = useContext(SettingsContext);

  return (
    <tr
      className="cursor-pointer hover:bg-sky-100 dark:hover:bg-sky-900/50"
      onClick={() => {}}
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
      <SubjectsTableData className="text-center">{classCode}</SubjectsTableData>
      <SubjectsTableData
        className="break-words"
        // //! Time should show red if it's unavailable
      >
        {!isEmpty(classObj.schedule) &&
          classObj.schedule.map(({ dayTimeCode, locationCode }, index) => (
            <SubjectsDayTimeCell
              key={index}
              dayTimeCode={dayTimeCode}
              locationCode={locationCode}
            />
          ))}
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
