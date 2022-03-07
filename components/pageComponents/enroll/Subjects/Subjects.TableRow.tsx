import { HighlightContext, UserDataContext } from '@lib/context';
import { selectGroup, unselectGroup } from '@lib/utils/schedule';
import { useContext, useState } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';
import ActionDialog from '@components/elements/modals/ActionDialog';
import SubjectsConflictBadge from './Subjects.ConflictBadge';
import { IconButton, Tooltip } from '@mui/material';
import { useFirestoreOperations } from '@lib/hooks';
import { getConflicts, getFramingDescription } from '@lib/utils/schedule';
import { deleteField, writeBatch } from 'firebase/firestore';
import { firestore } from '@lib/firebase';

type Props = {
  classObject: ClassObject;
  subject: Subject;
  campus: string;
  course: string;
};

const SubjectsTableRow = ({ classObject, subject, campus, course }: Props) => {
  const { addHighlight, removeHighlight } = useContext(HighlightContext);
  const [conflicts, setConflicts] = useState<Conflict[] | null>(null);
  const [conflictsDialogOpen, setConflictsDialogOpen] = useState(false);
  const { userDetails } = useContext(UserDataContext);
  const { update: updateUserDetails } = useFirestoreOperations();

  const selectedClasses = userDetails?.classes?.[campus]?.[course];
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
        onClick={async () => {
          if (!userDetails?.ref) return;

          if (selected) {
            await updateUserDetails<UserDetails>(userDetails?.ref, {
              [`classes.${campus}.${course}.${subject.code}.${classObject.code}`]:
                deleteField(),
            });

            return;
          }

          const conflicts = selectedClasses && getConflicts(selectedClasses, classObject);

          if (conflicts) {
            setConflicts(conflicts);
            setConflictsDialogOpen(true);

            return;
          }

          await updateUserDetails<UserDetails>(userDetails?.ref, {
            [`classes.${campus}.${course}.${subject.code}.${classObject.code}`]:
              classObject as any,
          });

          addHighlight?.(
            classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
            'sky'
          );
        }}
        onMouseEnter={() =>
          !selected &&
          addHighlight?.(
            classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
            'sky'
          )
        }
        onMouseLeave={() =>
          !selected &&
          removeHighlight?.(classObject.schedule.map(({ dayTimeCode }) => dayTimeCode))
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
        <SubjectsTableData className="text-slate-500 font-normal text-center">
          {classObject.framing && (
            <Tooltip title={getFramingDescription(classObject.framing)} arrow>
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
                  onRemove={async () => {
                    if (!userDetails?.ref) return;

                    await updateUserDetails<UserDetails>(userDetails?.ref, {
                      [`classes.${campus}.${course}.${withClass.subjectCode}.${withClass.code}`]:
                        deleteField(),
                    });

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
              if (!userDetails?.ref) return;
              if (!conflicts) return;

              const batch = writeBatch(firestore);

              for (const { withClass } of conflicts) {
                batch.update<UserDetails>(userDetails?.ref, {
                  [`classes.${campus}.${course}.${withClass.subjectCode}.${withClass.code}`]:
                    deleteField(),
                });
              }

              const newConflicts =
                selectedClasses && getConflicts(selectedClasses, classObject);

              if (newConflicts) {
                setConflicts(newConflicts);
                setConflictsDialogOpen(true);

                return;
              }

              await updateUserDetails<UserDetails>(userDetails?.ref, {
                [`classes.${campus}.${course}.${subject.code}.${classObject.code}`]:
                  classObject as any,
              });

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
