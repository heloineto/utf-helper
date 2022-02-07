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
              'bg-red-600 hover:bg-red-700 dark:hover:bg-red-500 shadow-sm hover:shadow hover:shadow-red-700 shadow-red-700',
            label: 'Limpar',
            onClick: () => {
              setSelectedClasses?.({});
              setSchedule?.(scheduleInitialValue);
              setResetDialogOpen(false);
            },
          },
          {
            className:
              'border-slate-400 !text-slate-800 dark:!text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm hover:shadow text-base',
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

export default NavbarResetButton;
