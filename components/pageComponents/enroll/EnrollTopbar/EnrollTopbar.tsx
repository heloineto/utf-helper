import EnrollTopbarResetButton from './EnrollTopbar.ResetButton';
import EnrollTopbarReviewButton from './EnrollTopbar.ReviewButton';
import EnrollTopbarTotalHours from './EnrollTopbar.TotalHours';
import EnrollTopbarDirectionButton from './EnrollTopbar.DirectionButton';
import Topbar from '@components/navigation/Topbar';

type Props = {};

const EnrollTopbar = (props: Props) => {
  return (
    <Topbar>
      <div className="h-full w-1/3 hidden xl:flex items-center">
        <EnrollTopbarTotalHours />
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
