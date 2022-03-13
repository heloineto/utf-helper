import EnrollTopbarResetButton from './EnrollTopbar.ResetButton';
import EnrollTopbarReviewButton from './EnrollTopbar.ReviewButton';
import EnrollTopbarTotalHours from './EnrollTopbar.TotalHours';
import EnrollTopbarDirectionButton from './EnrollTopbar.DirectionButton';
import Topbar from '@components/navigation/Topbar';
import SearchBar from './EnrollTopbar.Search';

type Props = {};

const EnrollTopbar = (props: Props) => {
  return (
    <Topbar className="!flex-row">
      <div className="h-full w-2/3 flex items-center gap-x-2">
        <EnrollTopbarTotalHours />
        <SearchBar variant="outlined" />
      </div>

      <div className="h-full w-full xl:w-1/3 flex items-center flex-row-reverse sm:flex-row sm:justify-end gap-x-1 sm:gap-x-2">
        <EnrollTopbarDirectionButton />
        <EnrollTopbarReviewButton />
        <EnrollTopbarResetButton />
      </div>
    </Topbar>
  );
};

export default EnrollTopbar;
