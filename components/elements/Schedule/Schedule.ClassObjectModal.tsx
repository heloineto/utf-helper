import { UserDataContext } from '@lib/context';
import { unselectGroup } from '@lib/utils/schedule';
import { Button, Dialog, DialogProps } from '@mui/material';
import { useContext } from 'react';

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
        <div></div>
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
