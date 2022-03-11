import { UserDataContext } from '@lib/context';
import { IconButton, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import ActionDialog from '@components/elements/modals/ActionDialog';
import { Trash, Warning } from 'phosphor-react';
import { useFirestoreOperations } from '@lib/hooks';
import { deleteField } from 'firebase/firestore';

type Props = {};

const EnrollTopbarResetButton = (props: Props) => {
  const { userDetails } = useContext(UserDataContext);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const { update: updateUserDetails } = useFirestoreOperations();

  return (
    <>
      <Tooltip title="Limpar Cronograma" arrow>
        <IconButton
          className="text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 dark:text-slate-400"
          onClick={() => setResetDialogOpen(true)}
        >
          <Trash className="h-6" />
        </IconButton>
      </Tooltip>
      <ActionDialog
        open={resetDialogOpen}
        onClose={() => setResetDialogOpen(false)}
        Icon={Warning}
        colorName="red"
        title="Limpar o Cronograma"
        subtitle="Todas as matérias seram removidas e o cronograma voltará para o estado inicial."
        actionButtons={[
          {
            className:
              'w-full border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent',
            variant: 'outlined',
            label: 'Limpar',
            onClick: async () => {
              if (!userDetails?.ref) return;

              await updateUserDetails<UserDetails>(userDetails?.ref, {
                classes: deleteField(),
              });

              setResetDialogOpen(false);
            },
          },
          {
            className:
              'border-slate-500 !text-slate-500 bg-slate-100 hover:bg-slate-200 hover:border-slate-600 dark:bg-slate-600 dark:!text-slate-200 dark:hover:bg-slate-700 dark:border-transparent',
            label: 'Cancelar',
            variant: 'outlined',
            color: 'inherit',
            onClick: () => setResetDialogOpen(false),
          },
        ]}
      />
    </>
  );
};

export default EnrollTopbarResetButton;
