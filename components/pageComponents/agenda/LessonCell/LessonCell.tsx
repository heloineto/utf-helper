import { useContext, useRef, useState } from 'react';
import { SettingsContext } from '@lib/context';
import { useColor } from '@lib/hooks';
import { limitText } from '@lib/utils/typescript';
import LessonCellPopover from './LessonCell.Popover';
import classNames from 'clsx';
import { getStrippedBackground } from '@lib/utils/schedule';
import twColors from 'tailwindcss/colors';

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

  let [color] = useColor(classObject.subjectCode);

  if (!color) color = twColors['slate'];

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
        style={{
          background: isSync
            ? undefined
            : getStrippedBackground(color[darkMode ? 600 : 200]),
          backgroundColor: color[darkMode ? 600 : 200],
          borderColor: color[darkMode ? 500 : 300],
          opacity: isSync ? undefined : darkMode ? 0.75 : 0.85,
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
          className="text-[0.7rem] font-medium"
          style={{
            color: color[darkMode ? 200 : 600],
          }}
        >
          {`${classObject.subjectCode} - ${classObject.code}`}
        </div>
        <div
          className="text-[0.75rem] font-medium -mt-0.5"
          style={{
            color: color[darkMode ? 200 : 600],
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
