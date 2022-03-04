import { IconButton, Tooltip } from '@mui/material';
import { ClipboardCopyIcon } from '@heroicons/react/outline';
import { useContext, useState } from 'react';
import { UserDataContext } from '@lib/context';
import { isEmpty } from 'lodash';
import ReviewDialog from '@components/elements/modals/ReviewDialog';

type Props = {};

const EnrollTopbarReviewButton = (props: Props) => {
  const [reportOpen, setReportOpen] = useState(false);
  const { selectedClasses } = useContext(UserDataContext);

  return (
    <>
      <Tooltip title="Criar Relatório" arrow>
        <IconButton
          className="group"
          onClick={() => {
            if (selectedClasses && !isEmpty(selectedClasses)) setReportOpen(true);
          }}
        >
          <ClipboardCopyIcon className="h-6 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400" />
        </IconButton>
      </Tooltip>
      <ReviewDialog open={reportOpen} onClose={() => setReportOpen(false)} />
    </>
  );
};

export default EnrollTopbarReviewButton;
