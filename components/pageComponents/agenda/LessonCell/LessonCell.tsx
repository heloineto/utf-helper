import { useContext, useRef, useState } from 'react';
import { SettingsContext } from '@lib/context';
import { useColor } from '@lib/hooks';
import { limitText } from '@lib/utils/typescript';
import LessonCellPopover from './LessonCell.Popover';
import classNames from 'clsx';

interface Props extends ComponentProps<'div'> {
  lesson: CompleteLesson;
}

const LessonCell = ({ lesson, ...divProps }: Props) => {
  const timeCode = lesson.scheduleCell.startTimeCode;
  const length = lesson.scheduleCell.length;
  const { classObject, dayCode } = lesson;

  const isSync = classObject.framing !== 'R' && lesson.isSync;

  // const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const { darkMode } = useContext(SettingsContext);
  const [hover, setHover] = useState(false);

  const [color] = useColor(classObject.subjectCode);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex absolute top-0 left-0 w-full cursor-pointer py-1 "
      style={{
        height: `${100 * length}%`,
      }}
      ref={divRef}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...divProps}
    >
      <div
        className={classNames(
          'w-full h-full rounded mx-1 p-1 text-left flex flex-col border-2'
        )}
        style={
          {
            backgroundColor: color ? color[darkMode ? 600 : 200] : undefined,
            borderColor: color ? color[darkMode ? 500 : 300] : undefined,
            opacity: isSync ? undefined : darkMode ? 0.75 : 0.85,
            '--tw-ring-color': color ? color[darkMode ? 500 : 300] : undefined,
          } as any
        }
      >
        <div
          className="font-semibold break-all overflow-hidden text-ellipsis"
          style={{
            color: color ? color[darkMode ? 100 : 800] : undefined,
            lineHeight: '.9rem',
          }}
        >
          {limitText(classObject.subjectName, 50)}
        </div>
        <div
          className="text-[0.7rem] font-medium"
          style={{
            color: color ? color[darkMode ? 200 : 600] : undefined,
          }}
        >
          {`${classObject.subjectCode} - ${classObject.code}`}
        </div>
        <div
          className="text-[0.75rem] font-medium -mt-0.5"
          style={{
            color: color ? color[darkMode ? 200 : 600] : undefined,
          }}
        >
          {isSync ? (
            <div className="underline font-semibold">Aula Presencial</div>
          ) : (
            'Aula Remota'
          )}
        </div>
      </div>
      <LessonCellPopover
        anchorEl={divRef.current}
        open={hover}
        sx={{
          pointerEvents: 'none',
        }}
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
      />
    </div>
  );
};

export default LessonCell;
