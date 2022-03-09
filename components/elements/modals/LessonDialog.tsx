import CustomDialog from '@components/elements/modals/CustomDialog';
import { SettingsContext } from '@lib/context';
import { getDateStr } from '@lib/utils/luxon';
import { DialogProps } from '@mui/material';
import { DateTime } from 'luxon';
import { useContext } from 'react';
import { useColor } from '@lib/hooks';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

interface Props extends Omit<DialogProps, 'color'> {
  lesson: CompleteLesson;
  onClose: () => void;
}

const LessonDialog = ({ lesson, onClose, ...muiDialogProps }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const { classObject, dayCode } = lesson;

  const { color } = useColor(classObject.subjectCode);
  const isInPerson = classObject.framing !== 'R' && lesson.isSync;

  const dateStr = lesson?.date && getDateStr(DateTime.fromISO(lesson.date));

  return (
    <CustomDialog onClose={onClose} {...muiDialogProps}>
      <div className="px-6 py-8 flex items-center justify-start gap-x-3 border-b border-slate-200 dark:border-slate-700">
        <div
          className="rounded h-14 w-20 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10 flex flex-col justify-center items-center text-sm font-bold"
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
          <div className="text-slate-900 dark:text-slate-100 text-xl">
            {classObject.subjectName}
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <div className="text-slate-900 dark:text-slate-100">
              {isInPerson ? (
                <div className="underline">Aula Presencial</div>
              ) : (
                <div>Aula Remota {lesson.isSync ? 'Síncrona' : 'Assíncrona'}</div>
              )}
            </div>
            {dateStr && <div className="leading-6 dark:text-slate-500">{dateStr}</div>}
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
          <div className="sm:col-span-4">
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Conteúdo Previsto
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {lesson?.description}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Data Prevista</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {lesson?.dateStr}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Tipo</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {lesson?.type}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Aula Número</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {lesson?.index}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Aulas/peso</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {lesson?.numberOfLessonsOrWeight}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Quant. de Aulas Síncronas
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {lesson?.numberOfSyncLessons}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Professor</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject.teacher}
            </dd>
          </div>
        </dl>
      </div>
      <div className="px-6 py-8 border-t border-slate-200 dark:border-slate-700 flex justify-between flex-row gap-5 ">
        {classObject?.paCode && (
          <a
            href={`https://sistemas2.utfpr.edu.br/dpls/sistema/aluno06/mpPlanejamentoAula.pcPlanejFinalizado?p_turmidvc=${classObject.paCode}&p_print=1`}
            target="_blank"
            className="w-1/3" rel="noreferrer"
          >
            <SecondaryButton>Ver PA</SecondaryButton>
          </a>
        )}

        <PrimaryButton className="w-1/3" onClick={onClose}>
          Ok
        </PrimaryButton>
      </div>
    </CustomDialog>
  );
};

export default LessonDialog;
