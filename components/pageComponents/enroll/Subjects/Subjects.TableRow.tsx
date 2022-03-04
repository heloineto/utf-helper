import { SettingsContext, UserDataContext } from '@lib/context';
import { highlightGroup, selectGroup, unselectGroup } from '@lib/utils/schedule';
import { useContext, useState } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';
import ActionDialog from '@components/elements/modals/ActionDialog';
import SubjectsConflictBadge from './Subjects.ConflictBadge';
import { IconButton, Tooltip } from '@mui/material';

type Props = {
  classObject: ClassObject;
  subject: Subject;
};

const SubjectsTableRow = ({ classObject, subject }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const { selectedClasses, setSelectedClasses, setSchedule } =
    useContext(UserDataContext);
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
          {classObject.teacher}
        </SubjectsTableData>
        {/* <SubjectsTableData className="text-slate-500 font-normal text-center">
          {classObject.vacanciesTotal}
        </SubjectsTableData> */}
        <SubjectsTableData className="text-slate-500 font-normal text-center">
          {classObject.framing && (
            <Tooltip
              title={
                classObject.framing === 'P'
                  ? 'P - Turma 100% Presencial, conforme Resolução 123/2021 - COGEP'
                  : classObject.framing === 'H'
                  ? 'H - Turma híbrida, com atividades desenvolvidas de forma mista entre remoto e presencial conforme Resolução 123/2021-COGEP'
                  : 'R - Turma 100% remota, conforme Resolução 123/2021 - COGEP'
              }
              arrow
            >
              <IconButton
                className={classNames(
                  classObject.framing === 'P' &&
                    'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 border-emerald-300 dark:border-emerald-800',
                  classObject.framing === 'H' &&
                    'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-100 border-sky-300 dark:border-sky-800',
                  classObject.framing === 'R' &&
                    'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 border-orange-300 dark:border-orange-800',
                  'p-0 h-9 w-9 text-sm font-extrabold border-solid border'
                )}
              >
                {classObject.framing}
              </IconButton>
            </Tooltip>
          )}
        </SubjectsTableData>
        <SubjectsTableData className="text-right break-words w-80">
          {classObject.optional}
        </SubjectsTableData>
      </tr>
      <ActionDialog
        variant="warning"
        open={!!conflictsDialogOpen}
        onClose={() => setConflictsDialogOpen(false)}
        preview={
          <div>
            <div className="my-4">
              <div>
                <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md px-2 py-1 mr-2 text-base">
                  {classObject.code}
                </span>
                <span className="uppercase text-lg leading-6 font-medium text-slate-900 dark:text-slate-200">
                  {classObject.subjectName}
                </span>
              </div>
              <span className="text-slate-600 dark:text-slate-300 text-base">
                possui os seguintes conflitos de horário:
              </span>
            </div>
            <div className="w-full flex flex-col gap-y-2 justify-center items-center">
              {conflicts?.map(({ withClass, dayTimeCodes }, index) => (
                <SubjectsConflictBadge
                  key={withClass.subjectCode + withClass.code}
                  classObject={withClass}
                  dayTimeCodes={dayTimeCodes}
                  onRemove={() => {
                    if (!setSelectedClasses || !setSchedule || !selectedClasses) return;

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
                />
              ))}
            </div>
          </div>
        }
        actionButtons={[
          {
            className:
              'w-full border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent',
            variant: 'outlined',
            label: `Remover esses conflitos e adiconar`,
            onClick: async () => {
              if (!setSelectedClasses || !setSchedule || !selectedClasses || !conflicts)
                return;

              /**
               * await here is necessary because of how setState works
               */
              for (const { withClass } of conflicts) {
                await unselectGroup(
                  setSelectedClasses,
                  setSchedule,
                  withClass,
                  selectedClasses
                );
              }

              const conflictsFound = await selectGroup(
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
              'w-full border-slate-500 !text-slate-500 bg-slate-100 hover:bg-slate-200 hover:border-slate-600 dark:bg-slate-600 dark:!text-slate-200 dark:hover:bg-slate-700 dark:border-transparent',
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
