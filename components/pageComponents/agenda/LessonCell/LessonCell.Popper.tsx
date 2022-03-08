import { DateTime } from 'luxon';
import { Popper, PopperProps } from '@mui/material';
import { getDateStr } from '@lib/utils/luxon';
import { useColor } from '@lib/hooks';

interface Props extends PopperProps {
  lesson: CompleteLesson;
}

const LessonCellPopper = ({ lesson, ...popoverProps }: Props) => {
  const timeCode = lesson.scheduleCell.startTimeCode;
  const length = lesson.scheduleCell.length;
  const { classObject, dayCode } = lesson;

  const isSync = classObject.framing !== 'R' && lesson.isSync;

  const [color] = useColor(classObject.subjectCode);

  const dateStr = lesson?.date && getDateStr(DateTime.fromISO(lesson.date));

  return (
    <Popper
      className="text-base bg-slate-50 text-left w-[28rem] rounded-xl shadow-xl ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 divide-y divide-slate-100 my-auto dark:divide-slate-200/5 dark:highlight-white/10 z-[10000]"
      {...popoverProps}
    >
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
              {isSync ? <div className="underline">Aula Presencial</div> : 'Aula Remota'}
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
    </Popper>
  );
};

export default LessonCellPopper;
