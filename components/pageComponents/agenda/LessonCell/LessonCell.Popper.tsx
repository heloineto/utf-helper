import { DateTime } from 'luxon';
import { Popper, PopperProps } from '@mui/material';
import { getDateStr } from '@lib/utils/luxon';
import { TailwindColorGroup } from 'tailwindcss/tailwind-config';

interface Props extends Omit<PopperProps, 'color'> {
  lesson: CompleteLesson;
  color: TailwindColorGroup;
}

const LessonCellPopper = ({ lesson, color, ...popperProps }: Props) => {
  const timeCode = lesson.scheduleCell.startTimeCode;
  const length = lesson.scheduleCell.length;
  const { classObject, dayCode } = lesson;

  const isInPerson = classObject.framing !== 'R' && lesson.isSync;

  const dateStr = lesson?.date && getDateStr(DateTime.fromISO(lesson.date));

  return (
    <Popper
      className="overflow-hidden text-base bg-slate-50 text-left w-[28rem] rounded-xl shadow-xl ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 divide-y divide-slate-100 my-auto dark:divide-slate-200/5 dark:highlight-white/10 z-[10000]"
      {...popperProps}
    >
      <div className="p-3 flex items-center justify-start gap-x-3">
        <div
          className="rounded h-10 w-16 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 flex flex-col justify-center items-center text-xs font-bold"
          style={{
            background: color
              ? `linear-gradient(225deg, ${color[400]} 0%, ${color[300]} 100%)`
              : undefined,
            color: color[900],
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
              {isInPerson ? (
                <div className="underline">Aula Presencial</div>
              ) : (
                <div>Aula Remota {lesson.isSync ? 'Síncrona' : 'Assíncrona'}</div>
              )}
            </div>
            {dateStr && (
              <div className="text-sm leading-6 dark:text-slate-500">{dateStr}</div>
            )}
          </div>
        </div>
      </div>
      <div className="p-3">
        <div>
          <div className="text-[0.9rem] font-medium text-slate-500 dark:text-slate-100">
            Conteúdo Previsto
          </div>
          <div className="mt-1 text-sm text-slate-900 dark:text-slate-300 font-light">
            {lesson.description}
          </div>
        </div>
      </div>
      {/* {JSON.stringify(lesson, null, 2)} */}
      <div
        className="w-full h-6 text-xs flex justify-center items-center"
        style={{ backgroundColor: color[800] }}
      >
        Clique para ver mais
      </div>
    </Popper>
  );
};

export default LessonCellPopper;
