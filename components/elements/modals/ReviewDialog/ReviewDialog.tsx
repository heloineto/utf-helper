import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import { DialogProps } from '@mui/material';
import CustomDialog from '../CustomDialog';
import ReviewDialogClasses from './ReviewDialog.Classes';

interface Props extends DialogProps {
  classes: ClassMap<ClassObject>;
  onClose: () => void;
}

const ReviewDialog = ({ onClose, classes, ...dialogProps }: Props) => {
  return (
    <CustomDialog onClose={onClose} {...dialogProps}>
      <div className="flex flex-col justify-center items-center text-slate-800 dark:text-slate-200 text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 pt-8 pb-6">
        Relatório das Matérias
        <span className="text-sm font-medium text-slate-500">Clique para copiar</span>
      </div>
      <div className="text-sm text-slate-900 dark:text-slate-200 sm:mt-0 sm:col-span-2 overflow-y-auto">
        <ReviewDialogClasses classes={classes} />
      </div>
      <div className="px-8 py-6 border-t border-slate-200 dark:border-slate-700 pt-6 flex flex-row justify-end gap-5 ">
        <PrimaryButton
          className="w-1/4"
          variant="outlined"
          onClick={onClose}
          type="submit"
        >
          Ok
        </PrimaryButton>
      </div>
    </CustomDialog>
  );
};

export default ReviewDialog;
