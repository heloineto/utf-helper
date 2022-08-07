import SubjectsDayTimeCells from '@components/pageComponents/enroll/Subjects/Subjects.DayTimeCells';
import { UserDataContext } from '@lib/context';
import { useFirestoreOperations } from '@lib/hooks';
import { Dialog, DialogProps } from '@mui/material';
import { deleteField } from 'firebase/firestore';
import { useContext } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

interface Props extends DialogProps {
  classObject: ClassObject | null;
  onClose: () => void;
  campus: string;
  course: string;
}

const ClassDialog = ({
  classObject,
  open,
  campus,
  course,
  onClose,
  ...dialogProps
}: Props) => {
  const { userDetails } = useContext(UserDataContext);
  const { update: updateUserDetails } = useFirestoreOperations();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      classes={{
        paper:
          'bg-white dark:bg-slate-900 ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10',
      }}
      {...dialogProps}
    >
      <header className="flex justify-center items-center text-slate-800 dark:text-slate-200 text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 pt-8 pb-6 px-8">
        <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md px-2 py-1 mr-3 text-base">
          {classObject?.code}
        </span>
        <span className="uppercase">{classObject?.subjectName}</span>
      </header>
      <div className="overflow-y-auto px-8 py-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Matéria</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.subjectName}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Código da Matéria
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.subjectCode}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Código da Turma
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.code}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Aulas Semanais</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.weeklyLessons}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Enquadramento</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.subjectName}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Vagas Total</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.vacanciesTotal}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Vagas Calouros</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.vacanciesFreshman}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Reserva</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.reservationType}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Prioridade - Curso
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.priorityMajors}
            </dd>
          </div>

          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Professor</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.teacher}
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Optativa (Observar Equivalências)
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.optional}
            </dd>
          </div>

          <div className="sm:col-span-2">
            <dt className="text-sm text-slate-500 dark:text-slate-400">
              Horário (dia/turno/aula)
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.schedule && (
                <SubjectsDayTimeCells
                  className="relative"
                  schedule={classObject.schedule}
                />
              )}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-sm text-slate-500 dark:text-slate-400">Enquadramento</dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {classObject?.framing === 'P'
                ? 'P - Turma 100% Presencial, conforme Resolução 123/2021 - COGEP'
                : classObject?.framing === 'H'
                ? 'H - Turma híbrida, com atividades desenvolvidas de forma mista entre remoto e presencial conforme Resolução 123/2021-COGEP'
                : 'R - Turma 100% remota, conforme Resolução 123/2021 - COGEP'}
            </dd>
          </div>
        </dl>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-700 pt-6 flex justify-between flex-row gap-5 px-8 py-6">
        <PrimaryButton
          className="w-1/3 sm:w-1/4"
          colorName="red"
          onClick={async () => {
            if (!userDetails?.ref || !classObject) return;

            await updateUserDetails<UserDetails>(userDetails?.ref, {
              [`classes.${campus}.${course}.${classObject?.subjectCode}.${classObject.code}`]:
                deleteField(),
            });

            onClose();
          }}
        >
          Remover
        </PrimaryButton>
        <PrimaryButton
          className="w-1/3 sm:w-1/4"
          variant="outlined"
          onClick={onClose as any}
          type="submit"
        >
          Ok
        </PrimaryButton>
      </div>
    </Dialog>
  );
};

export default ClassDialog;
