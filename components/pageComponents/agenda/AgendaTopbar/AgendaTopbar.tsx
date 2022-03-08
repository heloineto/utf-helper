import SecondaryButton from '@components/elements/buttons/SecondaryButton';
import { IconButton, Tooltip } from '@mui/material';
import { DateTime } from 'luxon';
import { getDateStr } from '@lib/utils/luxon';
import { useContext } from 'react';
import { AgendaContext } from '../Agenda/lib/context';
import { Funnel, List } from 'phosphor-react';
import Topbar from '@components/navigation/Topbar';

type Props = {};

const AgendaTopbar = (props: Props) => {
  const { mobile, setSidebarOpen, setDisplayDate, setSelectedDate } =
    useContext(AgendaContext);

  const today = DateTime.now();
  const todayStr = getDateStr(today);

  return (
    <Topbar>
      <div className="flex items-center h-full gap-x-2.5">
        {mobile && (
          <IconButton
            className="text-sky-600 h-11"
            onClick={() => setSidebarOpen?.(true)}
            edge="start"
          >
            <List className="h-7 w-auto" />
          </IconButton>
        )}

        <Tooltip title={todayStr} arrow>
          <div>
            <SecondaryButton
              size="small"
              onClick={() => {
                setDisplayDate?.(today);
                setSelectedDate?.(today);
              }}
            >
              Hoje
            </SecondaryButton>
          </div>
        </Tooltip>

        {/* <Tooltip title="Filtrar" arrow>
          <IconButton className="text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 dark:text-slate-400">
            <Funnel className="h-6" />
          </IconButton>
        </Tooltip> */}
        {/* <div className="flex text-md">
          <div className="flex items-center">
            <Checkbox defaultChecked size="small" />
            Aulas Presenciais
          </div>
          <div className="flex items-center">
            <Checkbox defaultChecked size="small" />
            Aulas Remotas
          </div>
        </div> */}
      </div>
    </Topbar>
  );
};

export default AgendaTopbar;
