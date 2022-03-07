import { Button, Dialog, DialogProps } from '@mui/material';
import { useSnackbar } from 'notistack';
import CustomDialog from '../CustomDialog';
import ReviewClasses from './ReviewClasses';

interface Props extends DialogProps {
  classes: ClassMap<ClassObject>;
  onClose: () => void;
}

const ReviewDialog = ({ onClose, classes, ...dialogProps }: Props) => {
  return (
    <CustomDialog onClose={onClose} {...dialogProps}>
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
    </CustomDialog>
  );
};

export default ReviewDialog;
