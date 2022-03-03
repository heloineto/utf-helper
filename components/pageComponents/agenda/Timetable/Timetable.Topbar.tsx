import SecondaryButton from '@components/buttons/SecondaryButton';
import { Tooltip } from '@mui/material';
import { DateTime } from 'luxon';
import { getDateStr } from '@lib/utils/luxon';

type Props = {};

const TimetableTopbar = (props: Props) => {
  const today = DateTime.now();
  const todayStr = getDateStr(today);

  return (
    <div className="w-full h-28 sm:h-14 px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between shadow-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
      <Tooltip title={todayStr} arrow>
        <div>
          <SecondaryButton className="h-full">Hoje</SecondaryButton>
        </div>
      </Tooltip>
    </div>
  );
};

export default TimetableTopbar;
