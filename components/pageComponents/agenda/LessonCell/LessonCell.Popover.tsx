import { DateTime } from 'luxon';
import { Popover, PopoverProps } from '@mui/material';
import { getDateStr } from '@lib/utils/luxon';
import { useColor } from '@lib/hooks';
import { useContext, useState } from 'react';
import { SettingsContext } from '@lib/context';

interface Props extends PopoverProps {
  lesson: CompleteLesson;
}

const LessonCellPopover = ({ lesson, ...popoverProps }: Props) => {
  const timeCode = lesson.scheduleCell.startTimeCode;
  const length = lesson.scheduleCell.length;
  const { classObject, dayCode } = lesson;

  const isSync = classObject.framing !== 'R' && lesson.isSync;

  const { darkMode } = useContext(SettingsContext);
  const [color] = useColor(classObject.subjectCode);
  const [hover, setHover] = useState(false);

  const dateStr = lesson?.date && getDateStr(DateTime.fromISO(lesson.date));

  return (
    <Popover
      classes={{
        paper:
          'bg-slate-50 rounded-xl shadow-xl ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 divide-y divide-slate-100 my-auto dark:divide-slate-200/5 dark:highlight-white/10',
      }}
      {...popoverProps}
    >
      <div>
        <div className="p-3 flex items-center justify-start gap-x-3">
          <div
            className="rounded h-10 w-16 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 flex flex-col justify-center items-center text-xs font-bold"
            style={{
              background: color
                ? `linear-gradient(225deg, ${color[400]} 0%, ${color[300]} 100%)`
                : undefined,
              color: color ? color[900] : undefined,
            }}
          >
            <div>{classObject.subjectCode}</div>
            <div>{classObject.code}</div>
          </div>
          <div>
            <div className="text-slate-900 dark:text-slate-100">
              {classObject.subjectName}
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <div className="text-slate-900 text-sm dark:text-slate-100">
                {isSync ? 'Aula Presencial' : 'Aula Remota'}
              </div>
              {dateStr && (
                <div className="text-sm leading-6 dark:text-slate-500">{dateStr}</div>
              )}
            </div>
          </div>
        </div>
        <div className="p-3 max-w-lg">
          <div>
            <div className="text-[0.9rem] font-medium text-slate-500 dark:text-slate-100">
              Conteúdo Previsto
            </div>
            <div className="mt-1 text-sm text-slate-900 dark:text-slate-300 font-light">
              {lesson.description}
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default LessonCellPopover;
