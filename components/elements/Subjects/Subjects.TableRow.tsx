import { SettingsContext } from '@lib/context';
import { highlightGroup, selectGroup, unselectGroup } from '@lib/utils/schedule';
import { useContext } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';

type Props = {
  classObject: ClassObject;
  subject: Subject;
};

const SubjectsTableRow = ({ classObject, subject }: Props) => {
  const { selectedClasses, setSelectedClasses, setSchedule, theme } =
    useContext(SettingsContext);

  const isSelected = !!selectedClasses?.[subject.code]?.[classObject.code];

  return (
    <tr
      className={classNames(
        isSelected
          ? 'bg-sky-500/30 hover:bg-sky-300 dark:hover:bg-sky-700/80'
          : 'hover:bg-sky-100 dark:hover:bg-sky-900/50',
        'cursor-pointer relative odd:bg-slate-100/90 dark:odd:bg-slate-900/30'
      )}
      onClick={() => {
        if (!setSelectedClasses || !setSchedule || !selectedClasses) return;

        if (isSelected) {
          unselectGroup(setSelectedClasses, setSchedule, classObject, selectedClasses);
          return;
        }

        highlightGroup(
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          false,
          theme
        );

        selectGroup(setSelectedClasses, setSchedule, classObject, selectedClasses);
      }}
      onMouseEnter={() =>
        !isSelected &&
        highlightGroup(
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          true,
          theme
        )
      }
      onMouseLeave={() =>
        !isSelected &&
        highlightGroup(
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          false,
          theme
        )
      }
    >
      <SubjectsTableData
        className={classNames(
          isSelected &&
            'first:after:top-0 first:after:absolute first:after:left-0 first:after:h-full first:after:w-full first:after:border-2 first:after:border-sky-500',
          'text-center'
        )}
      >
        {classObject.code}
      </SubjectsTableData>
      <SubjectsTableData
        className="break-words"
        // //! Time should show red if it's unavailable
      >
        {classObject.schedule.map(({ dayTimeCode, locationCode }, index) => (
          <SubjectsDayTimeCell
            key={index}
            className="relative"
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
