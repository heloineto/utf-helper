import EnrollTopbarResetButton from './EnrollTopbar.ResetButton';
import EnrollTopbarReviewButton from './EnrollTopbar.ReviewButton';
import EnrollTopbarTotalHours from './EnrollTopbar.TotalHours';
import EnrollTopbarDirectionButton from './EnrollTopbar.DirectionButton';
import Topbar from '@components/navigation/Topbar';
import SearchBar from './EnrollTopbar.Search';
import { useMediaQuery, useTheme } from '@mui/material';

const EnrollTopbar = () => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xl'));

  return (
    <Topbar className="!flex-row">
      <div className="h-full w-2/3 flex items-center gap-x-2">
        <EnrollTopbarTotalHours />
        <SearchBar />
      </div>

      <div className="h-full w-full xl:w-1/3 flex items-center flex-row-reverse sm:flex-row sm:justify-end gap-x-1 sm:gap-x-2">
        {!mobile && <EnrollTopbarDirectionButton />}
        <EnrollTopbarReviewButton />
        <EnrollTopbarResetButton />
      </div>
    </Topbar>
  );
};

export default EnrollTopbar;
