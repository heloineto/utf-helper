import ActionDialog from '@components/elements/modals/ActionDialog';
import SubjectsConflictBadge from './Subjects.ConflictBadge';
import { DialogProps } from '@mui/material';
import { useFirestoreOperations } from '@lib/hooks';
import { getConflicts } from '@lib/utils/schedule';
import { deleteField, writeBatch } from 'firebase/firestore';
import { firestore } from '@lib/firebase';

interface Props extends DialogProps {
  classObject: ClassObject;
  setConflicts: SetState<Conflict[] | null>;
  conflicts: Conflict[] | null;
  userDetails: UserDetailsWithRef | null | undefined;
  campus: string;
  course: string;
  selectedClasses:
    | {
        [subject: string]: {
          [_class: string]: ClassObject;
        };
      }
    | undefined;
  subject: Subject;
  onClose: () => void;
}

const SubjectsConfictsDialog = ({
  onClose,
  classObject,
  conflicts,
  userDetails,
  campus,
  course,
  setConflicts,
  selectedClasses,
  subject,
  ...muiDialogProps
}: Props) => {
  const { update: updateUserDetails } = useFirestoreOperations();

  return (
    <ActionDialog
      variant="warning"
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

                    if (!newValue.length) onClose?.();

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

              return;
            }

            await updateUserDetails<UserDetails>(userDetails?.ref, {
              [`classes.${campus}.${course}.${subject.code}.${classObject.code}`]:
                classObject as any,
            });

            onClose?.();
          },
        },
        {
          className:
            'w-full border-slate-500 !text-slate-500 bg-slate-100 hover:bg-slate-200 hover:border-slate-600 dark:bg-slate-600 dark:!text-slate-200 dark:hover:bg-slate-700 dark:border-transparent',
          variant: 'outlined',
          label: 'Cancelar',
          onClick: () => onClose?.(),
        },
      ]}
      {...muiDialogProps}
    />
  );
};

export default SubjectsConfictsDialog;
