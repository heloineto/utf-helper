import { Button, Dialog, DialogProps } from '@mui/material';
import { useContext, useMemo } from 'react';
import { useCampuses } from '@lib/hooks';
import { Form } from 'react-final-form';
import { Autocomplete } from '@components/elements/inputs/Autocomplete';
import { UserDataContext } from '@lib/context';
import useUserOperations from '@lib/database/user/useUserOperations';
import useSignInAnonymously from '@lib/database/user/useSignInAnonymously';

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
