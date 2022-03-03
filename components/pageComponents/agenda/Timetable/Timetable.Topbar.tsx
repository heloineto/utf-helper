import SecondaryButton from '@components/elements/buttons/SecondaryButton';
import { IconButton, Tooltip } from '@mui/material';
import { DateTime } from 'luxon';
import { getDateStr } from '@lib/utils/luxon';
import { useContext } from 'react';
import { TimetableContext } from './lib/context';
import { List } from 'phosphor-react';

type Props = {};

const TimetableTopbar = (props: Props) => {
  const { mobile, setSidebarOpen, setDisplayDate, setSelectedDate } =
    useContext(TimetableContext);

  const today = DateTime.now();
  const todayStr = getDateStr(today);

  return (
    <div className="w-full flex-shrink-0 h-14 px-5 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between shadow-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
      <div className="flex items-center h-full gap-x-2.5">
        {mobile && (
          <IconButton
            className="dark:text-white h-11"
            onClick={() => setSidebarOpen?.(true)}
            edge="start"
          >
            <List className="h-7 w-auto" weight="bold" />
          </IconButton>
        )}

        <Tooltip title={todayStr} arrow>
          <div>
            <SecondaryButton
              onClick={() => {
                setDisplayDate?.(today);
                setSelectedDate?.(today);
              }}
            >
              Hoje
            </SecondaryButton>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default TimetableTopbar;
