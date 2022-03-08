import SecondaryButton from '@components/elements/buttons/SecondaryButton';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import { DateTime } from 'luxon';
import { getDateStr } from '@lib/utils/luxon';
import { useContext } from 'react';
import { TimetableContext } from './lib/context';
import { List } from 'phosphor-react';
import Topbar from '@components/navigation/Topbar';

type Props = {};

const TimetableTopbar = (props: Props) => {
  const { mobile, setSidebarOpen, setDisplayDate, setSelectedDate } =
    useContext(TimetableContext);

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

export default TimetableTopbar;
