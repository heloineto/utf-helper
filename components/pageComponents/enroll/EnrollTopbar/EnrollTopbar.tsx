import EnrollTopbarResetButton from './EnrollTopbar.ResetButton';
import EnrollTopbarReviewButton from './EnrollTopbar.ReviewButton';
import EnrollTopbarTotalHours from './EnrollTopbar.TotalHours';
import EnrollTopbarDirectionButton from './EnrollTopbar.DirectionButton';
import Topbar from '@components/navigation/Topbar';
import SearchBar from './EnrollTopbar.Search';

type Props = {};

const EnrollTopbar = (props: Props) => {
  return (
    <Topbar>
      <div className="h-full w-2/3 hidden xl:flex items-center gap-x-2">
        <EnrollTopbarTotalHours />
        <div className="w-64">
          <SearchBar variant="outlined" placeholder="Pesquisar" />
        </div>
      </div>

      <div className="h-full w-full xl:w-1/3 flex items-center justify-between flex-row-reverse sm:flex-row sm:justify-end gap-x-2">
        <EnrollTopbarDirectionButton />
        <EnrollTopbarReviewButton />
        <EnrollTopbarResetButton />
      </div>
    </Topbar>
  );
};

export default EnrollTopbar;
