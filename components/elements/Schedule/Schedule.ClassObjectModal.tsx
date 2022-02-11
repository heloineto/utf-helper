import { UserDataContext } from '@lib/context';
import { unselectGroup } from '@lib/utils/schedule';
import { Button, Dialog, DialogProps } from '@mui/material';
import { useContext } from 'react';
import SubjectsDayTimeCell from '../Subjects/Subjects.DayTimeCell';

type Props = {
  classObject: ClassObject | null;
  onClose: () => void;
};

const ScheduleClassDialog = ({
  classObject,
  open,
  onClose,
  ...dialogProps
}: Props & Omit<DialogProps, keyof Props>) => {
  const { setSelectedClasses, setSchedule, selectedClasses } =
    useContext(UserDataContext);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      classes={{
        paper: 'bg-white dark:bg-slate-900 px-8 py-6',
      }}
      {...dialogProps}
    >
      <div>
        <div className="flex justify-center items-center text-slate-800 dark:text-slate-200 text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 -mx-8 -mt-8 pt-8 pb-6 mb-4">
          <span className="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md px-2 py-1 mr-3 text-base">
            {classObject?.code}
          </span>
          <span className="uppercase">{classObject?.subjectName}</span>
        </div>
        <div>
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
              <dt className="text-sm text-slate-500 dark:text-slate-400">
                Aulas Semanais
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                {classObject?.weeklyLessons}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm text-slate-500 dark:text-slate-400">
                Enquadramento
              </dt>
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
              <dt className="text-sm text-slate-500 dark:text-slate-400">
                Vagas Calouros
              </dt>
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
                {classObject?.schedule.map(({ dayTimeCode, locationCode }, index) => (
                  <SubjectsDayTimeCell
                    key={index}
                    className="relative"
                    dayTimeCode={dayTimeCode}
                    locationCode={locationCode}
                    selected={true}
                  />
                ))}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm text-slate-500 dark:text-slate-400">
                Enquadramento
              </dt>
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
        <div className="border-t border-slate-200 dark:border-slate-700 -mx-8 px-8 mt-3 pt-6 flex flex-col justify-between md:flex-row gap-5 ">
          <Button
            className="w-1/4 border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent"
            variant="outlined"
            onClick={() => {
              if (!setSelectedClasses || !setSchedule || !selectedClasses || !classObject)
                return;

              unselectGroup(
                setSelectedClasses,
                setSchedule,
                classObject,
                selectedClasses
              );

              onClose();
            }}
          >
            Remover
          </Button>
          <Button
            className="w-1/4 border-sky-500 text-sky-500 bg-sky-100 hover:bg-sky-200 hover:border-sky-600 dark:bg-sky-600 dark:text-sky-200 dark:hover:bg-sky-700 dark:border-transparent"
            variant="outlined"
            onClick={onClose as any}
            type="submit"
          >
            Ok
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ScheduleClassDialog;
