import { TrashIcon } from '@heroicons/react/outline';
import { SettingsContext } from '@lib/context';
import useScheduleInitialValue from '@lib/hooks/useScheduleInitialValue';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';

type Props = {};

const NavbarResetButton = (props: Props) => {
  const { setSchedule, setSelectedClasses } = useContext(SettingsContext);
  const scheduleInitialValue = useScheduleInitialValue();

  return (
    <Tooltip title="Limpar Cronograma" arrow>
      <IconButton
        className="group"
        onClick={() => {
          setSelectedClasses?.({});
          setSchedule?.(scheduleInitialValue);
        }}
      >
        <TrashIcon className="h-5 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400" />
      </IconButton>
    </Tooltip>
  );
};

export default NavbarResetButton;
