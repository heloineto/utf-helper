import { useContext, useRef, useState } from 'react';
import { SettingsContext } from '@lib/context';
import { useColor } from '@lib/hooks';
import { limitText } from '@lib/utils/typescript';
import classNames from 'clsx';
import { colord } from 'colord';
import LessonCellDialog from '../../../elements/modals/LessonDialog';
import { MapPin } from 'phosphor-react';
import LessonCellPopover from './LessonCell.Popover';

interface Props extends ComponentProps<'div'> {
  lesson: CompleteLesson;
}

const LessonCell = ({ lesson, ...divProps }: Props) => {
  const { classObject, dayCode, scheduleCell } = lesson;
  const timeCode = scheduleCell.startTimeCode;
  const length = scheduleCell.length;

  const isInPerson = classObject.framing !== 'R' && lesson.isSync;

  const { darkMode } = useContext(SettingsContext);
  const [hover, setHover] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { color } = useColor(classObject.subjectCode);

  const getStrippedBackground = (hexColor: string) => {
    const color = colord(hexColor);

    const lighterColor = color.alpha(darkMode ? 0.3 : 0.6).toRgbString();
    const darkerColor = color.alpha(darkMode ? 0.4 : 0.8).toRgbString();

    return `repeating-linear-gradient(45deg, ${lighterColor}, ${lighterColor} 0.25rem, ${darkerColor} 0.25rem, ${darkerColor} 0.5rem)`;
  };

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        className="flex absolute top-0 left-0 w-full cursor-pointer py-1 z-10"
        style={{ height: `${100 * length}%` }}
        ref={divRef}
        onClick={() => {
          setDialogOpen(true);
          setHover(false);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...divProps}
      >
        <div
          className={classNames(
            !lesson.isSync && 'border-dotted',
            'w-full h-full rounded mx-1 p-1 text-left flex flex-col border-2'
          )}
          style={{
            background: isInPerson
              ? undefined
              : getStrippedBackground(color[darkMode ? 600 : 200]),
            backgroundColor: isInPerson ? color[darkMode ? 600 : 200] : undefined,
            borderColor: color[darkMode ? 500 : 300],
            opacity: lesson.isSync ? undefined : darkMode ? 0.85 : 0.95,
          }}
        >
          <div
            className="font-semibold break-all overflow-hidden text-ellipsis"
            style={{
              color: color[darkMode ? 100 : 800],
              lineHeight: '.9rem',
            }}
          >
            {limitText(classObject.subjectName, 50)}
          </div>
          <div
            className="text-xs font-medium"
            style={{ color: color[darkMode ? 200 : 600] }}
          >
            {scheduleCell?.locationCodes ? (
              <div className="flex items-center gap-x-1">
                <MapPin weight="fill" />
                {scheduleCell?.locationCodes?.join(' ou ')}
              </div>
            ) : (
              `${classObject.subjectCode} - ${classObject.code}`
            )}
          </div>
          <div
            className="text-xs font-medium -mt-0.5"
            style={{ color: color[darkMode ? 200 : 600] }}
          >
            {isInPerson ? (
              <div className="underline font-semibold">Aula Presencial</div>
            ) : (
              <div>Aula Remota {lesson.isSync ? 'Síncrona' : 'Assíncrona'}</div>
            )}
          </div>
        </div>
      </div>
      <LessonCellPopover
        anchorEl={divRef.current}
        open={!dialogOpen && hover}
        sx={{ pointerEvents: 'none' }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        disableRestoreFocus
        lesson={lesson}
        color={color}
      />
      <LessonCellDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        lesson={lesson}
        color={color}
      />
    </>
  );
};

export default LessonCell;
