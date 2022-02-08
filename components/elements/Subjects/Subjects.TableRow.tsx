import { SettingsContext } from '@lib/context';
import { highlightGroup, selectGroup, unselectGroup } from '@lib/utils/schedule';
import { useContext, useState } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';
import ActionDialog from '@components/modals/ActionDialog';
import { IconButton, Tooltip } from '@mui/material';
import { TrashIcon, XIcon } from '@heroicons/react/outline';

type Props = {
  classObject: ClassObject;
  subject: Subject;
};

const SubjectsTableRow = ({ classObject, subject }: Props) => {
  const { selectedClasses, setSelectedClasses, setSchedule, darkMode } =
    useContext(SettingsContext);
  const [conflicts, setConflicts] = useState<Conflict[] | null>(null);
  const [conflictsDialogOpen, setConflictsDialogOpen] = useState(false);

  const selected = !!selectedClasses?.[subject.code]?.[classObject.code];

  return (
    <>
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
            setConflictsDialogOpen(true);
          }

          highlightGroup(
            classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
            false,
            darkMode
          );
        }}
        onMouseEnter={() =>
          !selected &&
          highlightGroup(
            classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
            true,
            darkMode
          )
        }
        onMouseLeave={() =>
          !selected &&
          highlightGroup(
            classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
            false,
            darkMode
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
      </tr>
      <ActionDialog
        variant="warning"
        open={!!conflictsDialogOpen}
        onClose={() => setConflictsDialogOpen(false)}
        title={
          <div className="my-4">
            <div>
              <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md px-2 py-1 mr-2 text-base">
                {classObject.code}
              </span>
              <span className="uppercase">{classObject.subjectName}</span>
            </div>
            <span className="text-slate-600 dark:text-slate-300 text-base">
              possui os seguintes conflitos de horário:
            </span>
          </div>
        }
        subtitle={
          <div className="w-full flex flex-col gap-y-2 justify-center items-center">
            {conflicts?.map(({ withClass, dayTimeCodes }, index) => {
              const { code, subjectCode, subjectName } = withClass;

              return (
                <div
                  key={subjectCode + code}
                  className="bg-indigo-100 text-indigo-700 gap-x-1 pl-4 pr-2 py-1 max-w-max rounded-full flex items-center text-sm font-medium"
                >
                  <div className="w-full">
                    {code} - {subjectName} ({dayTimeCodes.join(', ')})
                  </div>
                  {/* /! Add remove functionality afterwards */}
                  <Tooltip title={`Remover ${code} - ${subjectName}`} arrow>
                    <IconButton
                      className="text-indigo-400 hover:bg-indigo-200"
                      onClick={() => {
                        if (!setSelectedClasses || !setSchedule || !selectedClasses)
                          return;

                        unselectGroup(
                          setSelectedClasses,
                          setSchedule,
                          withClass,
                          selectedClasses
                        );

                        setConflicts((value) => {
                          if (value === null) return null;

                          const newValue = [...value];
                          newValue.splice(index, 1);

                          if (!newValue.length) setConflictsDialogOpen(false);

                          return newValue;
                        });
                      }}
                    >
                      <TrashIcon className="h-[1.1rem] w-auto" />
                    </IconButton>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        }
        actionButtons={[
          {
            className:
              'w-full border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent',
            variant: 'outlined',
            label: `Remover esses conflitos e adiconar`,
            onClick: () => {
              if (!setSelectedClasses || !setSchedule || !selectedClasses) return;

              conflicts?.forEach(({ withClass }) => {
                unselectGroup(
                  setSelectedClasses,
                  setSchedule,
                  withClass,
                  selectedClasses
                );
              });

              const conflictsFound = selectGroup(
                setSelectedClasses,
                setSchedule,
                classObject,
                selectedClasses
              );

              if (conflictsFound) {
                setConflicts(conflictsFound);
                setConflictsDialogOpen(true);
              }

              setConflictsDialogOpen(false);
            },
          },
          {
            className:
              'w-full border-sky-500 text-sky-500 bg-sky-100 hover:bg-sky-200 hover:border-sky-600 dark:bg-sky-600 dark:text-sky-200 dark:hover:bg-sky-700 dark:border-transparent',
            variant: 'outlined',
            label: 'Cancelar',
            onClick: () => {
              setConflictsDialogOpen(false);
            },
          },
        ]}
      />
    </>
  );
};

export default SubjectsTableRow;
