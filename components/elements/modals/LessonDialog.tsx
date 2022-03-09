import CustomDialog from '@components/elements/modals/CustomDialog';
import { SettingsContext } from '@lib/context';
import { getDateStr } from '@lib/utils/luxon';
import { DialogProps } from '@mui/material';
import { DateTime } from 'luxon';
import { useContext } from 'react';
import { useColor } from '@lib/hooks';

interface Props extends Omit<DialogProps, 'color'> {
  lesson: CompleteLesson;
}

const LessonDialog = ({ lesson, ...muiDialogProps }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const { classObject, dayCode } = lesson;

  const { color } = useColor(classObject.subjectCode);
  const isInPerson = classObject.framing !== 'R' && lesson.isSync;

  const dateStr = lesson?.date && getDateStr(DateTime.fromISO(lesson.date));

  return (
    <CustomDialog {...muiDialogProps}>
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
    </CustomDialog>
  );
};

export default LessonDialog;
