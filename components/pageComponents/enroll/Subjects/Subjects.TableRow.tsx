import { UserDataContext } from '@lib/context';
import { useContext, useState } from 'react';
import SubjectsDayTimeCells from './Subjects.DayTimeCells';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';
import { IconButton, Tooltip } from '@mui/material';
import { useFirestoreOperations } from '@lib/hooks';
import { getConflicts, getFramingDescription } from '@lib/utils/schedule';
import { deleteField } from 'firebase/firestore';
import SubjectsConfictsDialog from './Subjects.ConfictsDialog';
import useHighlights from '@lib/hooks/useHighlights';
import Highlights from '@components/elements/feedback/Highlights';

interface Props extends ComponentProps<'tr'> {
  classObject: ClassObject;
  subject: Subject;
  campus: string;
  course: string;
  rows: {
    schedule: boolean;
    teacher: boolean;
    framing: boolean;
    optional: boolean;
  };
}

const SubjectsTableRow = ({
  classObject,
  subject,
  campus,
  course,
  rows,
  className,
  ...trProps
}: Props) => {
  const { highlights, addHighlights, removeHighlights } = useHighlights();

  const [conflicts, setConflicts] = useState<Conflict[] | null>(null);
  const [conflictsDialogOpen, setConflictsDialogOpen] = useState(false);
  const { userDetails } = useContext(UserDataContext);
  const { update: updateUserDetails } = useFirestoreOperations();

  const selectedClasses = userDetails?.classes?.[campus]?.[course];
  const selected = !!selectedClasses?.[subject.code]?.[classObject.code];

  const toggleSelected = async () => {
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

    removeHighlights(classObject.schedule.map(({ dayTimeCode }) => dayTimeCode));
  };

  return (
    <>
      {highlights && <Highlights highlights={highlights} />}
      <tr
        className={classNames(
          className,
          selected
            ? 'bg-sky-500/30 hover:bg-sky-300 dark:hover:bg-sky-700/80'
            : 'bg-white dark:bg-slate-800 hover:bg-sky-100 dark:hover:bg-sky-900/50 odd:bg-slate-100/90 dark:odd:bg-slate-800/80',
          'cursor-pointer relative'
        )}
        onClick={toggleSelected}
        onMouseEnter={() =>
          !selected &&
          addHighlights(
            classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
            'sky'
          )
        }
        onMouseLeave={() =>
          !selected &&
          removeHighlights(classObject.schedule.map(({ dayTimeCode }) => dayTimeCode))
        }
        {...trProps}
      >
        <SubjectsTableData
          className={classNames(
            selected &&
              'first:after:z-50 first:after:top-0 first:after:absolute first:after:left-0 first:after:h-full first:after:w-full first:after:border-2 first:after:border-sky-500',
            'text-center'
          )}
        >
          {classObject.code}
        </SubjectsTableData>
        {rows.schedule && (
          <SubjectsTableData className="grid columns-2 max-h-[9rem] overflow-y-auto">
            <SubjectsDayTimeCells className="relative" schedule={classObject.schedule} />
          </SubjectsTableData>
        )}
        {rows.teacher && (
          <SubjectsTableData className="break-all text-[0.8rem]">
            {classObject.teacher}
          </SubjectsTableData>
        )}
        {rows.framing && (
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
        )}
        {rows.optional && (
          <SubjectsTableData className="text-right break-words w-80">
            {classObject.optional}
          </SubjectsTableData>
        )}
      </tr>
      <SubjectsConfictsDialog
        open={conflictsDialogOpen}
        onClose={() => setConflictsDialogOpen(false)}
        classObject={classObject}
        conflicts={conflicts}
        userDetails={userDetails}
        campus={campus}
        course={course}
        setConflicts={setConflicts}
        selectedClasses={selectedClasses}
        subject={subject}
      />
    </>
  );
};

export default SubjectsTableRow;
