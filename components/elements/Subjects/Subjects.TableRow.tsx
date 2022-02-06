import { ScheduleContext, SettingsContext } from '@lib/context';
import { highlightGroup } from '@lib/utils/schedule';
import { isEmpty } from 'lodash';
import { useContext } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';

type Props = {
  classObject: ClassObject;
  subject: Subject;
};

const SubjectsTableRow = ({ classObject, subject }: Props) => {
  const { setSchedule } = useContext(ScheduleContext);
  const { direction, selectedClasses, setSelectedClasses } = useContext(SettingsContext);

  const isSelected = !!selectedClasses?.[subject.code]?.[classObject.code];

  return (
    <tr
      className={classNames(
        isSelected && 'bg-sky-100 dark:bg-sky-900/50',
        'cursor-pointer hover:bg-sky-100 dark:hover:bg-sky-900/50'
      )}
      onClick={() =>
        setSelectedClasses?.((value) => {
          const newValue = { ...value };

          if (isSelected) {
            delete newValue?.[subject.code]?.[classObject.code];
            return newValue;
          }

          newValue[subject.code] = {
            ...newValue[subject.code],
            [classObject.code]: classObject,
          };

          // console.log(newValue);

          return newValue;
        })
      }
      onMouseEnter={() =>
        setSchedule &&
        highlightGroup(
          setSchedule,
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          true
        )
      }
      onMouseLeave={() =>
        setSchedule &&
        highlightGroup(
          setSchedule,
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          false
        )
      }
    >
      <SubjectsTableData className="text-center">{classObject.code}</SubjectsTableData>
      <SubjectsTableData
        className="break-words"
        // //! Time should show red if it's unavailable
      >
        {!isEmpty(classObject.schedule) &&
          classObject.schedule.map(({ dayTimeCode, locationCode }, index) => (
            <SubjectsDayTimeCell
              key={index}
              dayTimeCode={dayTimeCode}
              locationCode={locationCode}
            />
          ))}
      </SubjectsTableData>
      <SubjectsTableData className="whitespace-pre-line">
        {classObject.professor}
      </SubjectsTableData>
      <SubjectsTableData className="text-slate-500 font-normal text-center">
        {classObject.vacanciesTotal}
      </SubjectsTableData>
      <SubjectsTableData className="text-right break-words w-80">
        {classObject.optional}
      </SubjectsTableData>
    </tr>
  );
};

export default SubjectsTableRow;
