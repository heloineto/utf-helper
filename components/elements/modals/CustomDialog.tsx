import { Dialog, DialogProps } from '@mui/material';

interface Props extends DialogProps {}

const CustomDialog = ({ ...dialogProps }: Props) => {
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      classes={{
        paper: 'bg-white dark:bg-slate-900 ring-1 ring-slate-700/5 dark:ring-white/10',
      }}
      {...dialogProps}
    />
  );
};

export default CustomDialog;
