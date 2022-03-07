import { Button, Dialog, DialogProps } from '@mui/material';
import { useSnackbar } from 'notistack';
import ReviewClasses from './ReviewClasses';

interface Props extends DialogProps {
  classes: ClassMap<ClassObject>;
  onClose: () => void;
}

const ReviewDialog = ({ onClose, classes, ...dialogProps }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  // const selectedClassesArr = useMemo(() => {
  //   if (!selectedClasses) return [];

  //   const result: ClassObject[] = [];

  //   Object.values(selectedClasses).map((selectedClass) => {
  //     if (!selectedClass) return;

  //     Object.values(selectedClass).map((classObject) => {
  //       if (classObject) result.push(classObject);
  //     });
  //   });

  //   return result;
  // }, [selectedClasses]);

  const copyText = (str: string) => {
    navigator.clipboard.writeText(str);
    enqueueSnackbar('Copiado para a área de transferência', {
      variant: 'success',
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'bottom',
      },
      autoHideDuration: 2000,
    });
  };

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      classes={{
        paper: 'bg-white dark:bg-slate-900 ring-1 ring-slate-700/5 dark:ring-white/10',
      }}
      onClose={onClose}
      {...dialogProps}
    >
      <div>
        <div className="flex flex-col justify-center items-center text-slate-800 dark:text-slate-200 text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 pt-8 pb-6">
          Relatório das Matérias
          <span className="text-sm font-medium text-slate-500">Clique para copiar</span>
        </div>
        <div className="text-sm text-slate-900 dark:text-slate-200 sm:mt-0 sm:col-span-2">
          <ReviewClasses classes={classes} />
        </div>
        <div className="px-8 py-6 border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-row justify-end gap-5 ">
          <Button
            className="w-1/4 border-sky-500 text-sky-500 bg-sky-100 hover:bg-sky-200 hover:border-sky-600 dark:bg-sky-600 dark:text-sky-200 dark:hover:bg-sky-700 dark:border-transparent"
            variant="outlined"
            onClick={onClose}
            type="submit"
          >
            Ok
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ReviewDialog;
