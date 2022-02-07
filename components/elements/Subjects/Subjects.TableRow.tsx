import { SettingsContext } from '@lib/context';
import { highlightGroup, selectGroup, unselectGroup } from '@lib/utils/schedule';
import { useContext, useState } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';
import ActionDialog from '@components/modals/ActionDialog';

type Props = {
  classObject: ClassObject;
  subject: Subject;
};

const SubjectsTableRow = ({ classObject, subject }: Props) => {
  const { selectedClasses, setSelectedClasses, setSchedule, theme } =
    useContext(SettingsContext);
  const [conflicts, setConflicts] = useState<Conflict[] | null>(null);

  const selected = !!selectedClasses?.[subject.code]?.[classObject.code];

  return (
    <tr
      className={classNames(
        selected
          ? 'bg-sky-500/30 hover:bg-sky-300 dark:hover:bg-sky-700/80'
          : 'hover:bg-sky-100 dark:hover:bg-sky-900/50 odd:bg-slate-100/90 dark:odd:bg-slate-900/30',
        'cursor-pointer relative'
      )}
      onClick={() => {
        if (!setSelectedClasses || !setSchedule || !selectedClasses) return;

        if (selected) {
          unselectGroup(setSelectedClasses, setSchedule, classObject, selectedClasses);
          return;
        }

        const conflictsFound = selectGroup(
          setSelectedClasses,
          setSchedule,
          classObject,
          selectedClasses
        );

        if (conflictsFound) {
          setConflicts(conflictsFound);
        }

        highlightGroup(
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          false,
          theme
        );
      }}
      onMouseEnter={() =>
        !selected &&
        highlightGroup(
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          true,
          theme
        )
      }
      onMouseLeave={() =>
        !selected &&
        highlightGroup(
          classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
          false,
          theme
        )
      }
    >
      <SubjectsTableData
        className={classNames(
          selected &&
            'first:after:top-0 first:after:absolute first:after:left-0 first:after:h-full first:after:w-full first:after:border-2 first:after:border-sky-500',
          'text-center'
        )}
      >
        {classObject.code}
      </SubjectsTableData>
      <SubjectsTableData className="break-words">
        {classObject.schedule.map(({ dayTimeCode, locationCode }, index) => (
          <SubjectsDayTimeCell
            key={index}
            className="relative"
            dayTimeCode={dayTimeCode}
            locationCode={locationCode}
            selected={selected}
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
      <ActionDialog
        variant="warning"
        open={!!conflicts}
        onClose={() => setConflicts(null)}
        title="Limpar o Cronograma"
        subtitle="Todas as matérias seram removidas e o cronograma voltará para o estado inicial."
        actionButtons={[
          {
            className:
              'w-full border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent',
            variant: 'outlined',
            label: 'Limpar',
            onClick: () => {
              setConflicts(null);
            },
          },
          {
            className:
              'border-slate-500 !text-slate-500 bg-slate-100 hover:bg-slate-200 hover:border-slate-600 dark:bg-slate-600 dark:!text-slate-200 dark:hover:bg-slate-700 dark:border-transparent',
            label: 'Cancelar',
            variant: 'outlined',
            color: 'inherit',
            onClick: () => setConflicts(null),
          },
        ]}
      />
    </tr>
  );
};

export default SubjectsTableRow;
