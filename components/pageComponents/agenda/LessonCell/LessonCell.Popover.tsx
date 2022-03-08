import { DateTime } from 'luxon';
import { Popover, PopoverProps } from '@mui/material';
import { CircleIcon, TriangleIcon } from '@components/decoration/icons/outlined';
import { colord } from 'colord';
import { getDateStr } from '@lib/utils/luxon';
import { useColor } from '@lib/hooks';
import { useContext } from 'react';
import { SettingsContext } from '@lib/context';

interface Props extends PopoverProps {
  lesson: CompleteLesson;
}

const LessonCellPopover = ({ lesson, ...popoverProps }: Props) => {
  const timeCode = lesson.scheduleCell.startTimeCode;
  const length = lesson.scheduleCell.length;
  const { classObject, dayCode } = lesson;

  const { darkMode } = useContext(SettingsContext);
  const [color] = useColor(classObject.subjectCode);

  const dateStr = lesson?.date && getDateStr(DateTime.fromISO(lesson.date));

  return (
    <Popover
      classes={{
        paper:
          'bg-slate-50 rounded-xl shadow-xl ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 divide-y divide-slate-100 my-auto dark:divide-slate-200/5 dark:highlight-white/10',
      }}
      {...popoverProps}
    >
      <div className="p-3 flex items-center justify-center gap-x-3">
        <div
          className="rounded h-10 w-10 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10"
          style={{
            background: color
              ? `linear-gradient(225deg, ${color[500]} 0%, ${color[300]} 100%)`
              : undefined,
          }}
        />
        <div>
          <div className="text-slate-900 truncate sm:pr-20 dark:text-slate-100">
            {/* {dayInfo?.extraDayInfo?.label ?? dayInfo?.legend?.label} */}
          </div>
          {dateStr && (
            <div className="text-sm leading-6 dark:text-slate-500">{dateStr}</div>
          )}
        </div>
      </div>
    </Popover>
  );
};

export default LessonCellPopover;
