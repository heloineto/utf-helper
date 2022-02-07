import { TrashIcon } from '@heroicons/react/outline';
import { SettingsContext } from '@lib/context';
import useScheduleInitialValue from '@lib/hooks/useScheduleInitialValue';
import { IconButton, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import ActionDialog from '@components/modals/ActionDialog';

type Props = {};

const NavbarResetButton = (props: Props) => {
  const { setSchedule, setSelectedClasses } = useContext(SettingsContext);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const scheduleInitialValue = useScheduleInitialValue();

  return (
    <>
      <Tooltip title="Limpar Cronograma" arrow>
        <IconButton className="group" onClick={() => setResetDialogOpen(true)}>
          <TrashIcon className="h-5 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400" />
        </IconButton>
      </Tooltip>
      <ActionDialog
        open={resetDialogOpen}
        onClose={() => setResetDialogOpen(false)}
        variant="warning"
        title="Limpar o Cronograma"
        subtitle="Todas as matérias seram removidas e o cronograma voltará para o estado inicial."
        actionButtons={[
          {
            className:
              'w-full border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent',
            variant: 'outlined',
            label: 'Limpar',
            onClick: () => {
              setSelectedClasses?.({});
              setSchedule?.(scheduleInitialValue);
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

{
  /* <Button
className="w-1/4 border-red-500 text-red-500 bg-red-100 hover:bg-red-200 hover:border-red-600 dark:bg-red-600 dark:text-red-200 dark:hover:bg-red-700 dark:border-transparent"
variant="outlined"
onClick={onClose as any}
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
</Button> */
}

export default NavbarResetButton;
