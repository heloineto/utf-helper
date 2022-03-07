import { UserDataContext } from '@lib/context';
import { useContext, useState } from 'react';
import SubjectsDayTimeCell from './Subjects.DayTimeCell';
import SubjectsTableData from './Subjects.TableData';
import classNames from 'clsx';
import { IconButton, Portal, Tooltip } from '@mui/material';
import { useFirestoreOperations } from '@lib/hooks';
import { getConflicts, getFramingDescription } from '@lib/utils/schedule';
import { deleteField } from 'firebase/firestore';
import SubjectsConfictsDialog from './Subjects.ConfictsDialog';
import twColors from 'tailwindcss/colors';
import { colord } from 'colord';

type Props = {
  classObject: ClassObject;
  subject: Subject;
  campus: string;
  course: string;
};

type Highlights = { [dayTimeCode: string]: string[] };

const SubjectsTableRow = ({ classObject, subject, campus, course }: Props) => {
  const [highlights, setHighlights] = useState<Highlights | null>(null);

  const addHighlight = (dayTimeCodes: string[], colorName: string) => {
    setHighlights((value) => {
      let newValue = { ...value };

      dayTimeCodes.forEach((dayTimeCode) => {
        const hexColor = (twColors as any)[colorName][500];

        const color = colord(hexColor);

        newValue[dayTimeCode] = [
          color.alpha(0.6).toRgbString(),
          color.alpha(0.8).toRgbString(),
        ];
      });

      return newValue;
    });
  };

  const removeHighlight = (dayTimeCodes: string[]) => {
    setHighlights((value) => {
      let newValue = { ...value };

      dayTimeCodes.forEach((dayTimeCode) => {
        delete newValue[dayTimeCode];
      });

      return newValue;
    });
  };

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

    addHighlight?.(
      classObject.schedule.map(({ dayTimeCode }) => dayTimeCode),
      'sky'
    );
  };

  return (
    <>
      {highlights &&
        Object.entries(highlights).map(([dayTimeCode, colors]) => (
          <Portal
            key={dayTimeCode}
            container={document && document.getElementById(`schedule-${dayTimeCode}`)}
          >
            <div
              className="absolute top-0 left-0 h-full w-full z-50"
              style={{
                background: `repeating-linear-gradient(45deg, ${colors[0]}, ${colors[0]} 0.25rem, ${colors[1]} 0.25rem, ${colors[1]} 0.5rem)`,
              }}
            />
          </Portal>
        ))}
      <tr
        className={classNames(
          selected
            ? 'bg-sky-500/30 hover:bg-sky-300 dark:hover:bg-sky-700/80'
            : 'hover:bg-sky-100 dark:hover:bg-sky-900/50 odd:bg-slate-100/90 dark:odd:bg-slate-900/30',
          'cursor-pointer relative'
        )}
        onClick={toggleSelected}
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
