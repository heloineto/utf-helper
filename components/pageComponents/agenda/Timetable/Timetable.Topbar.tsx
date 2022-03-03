import SecondaryButton from '@components/buttons/SecondaryButton';
import { Tooltip } from '@mui/material';
import { DateTime } from 'luxon';

type Props = {};

const TimetableTopbar = (props: Props) => {
  const today = DateTime.now().setLocale('br');

  return (
    <div className="w-full h-28 sm:h-14 px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between shadow-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
      <Tooltip title={today.toFormat('EEEE MMMM, dd')} arrow>
        <SecondaryButton className="w-20">Hoje</SecondaryButton>
      </Tooltip>
    </div>
  );
};

export default TimetableTopbar;
