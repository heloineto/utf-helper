import { IconButton, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import { UserDataContext } from '@lib/context';
import ReviewDialog from '@components/elements/modals/ReviewDialog';
import { ClipboardText } from 'phosphor-react';

type Props = {};

const EnrollTopbarReviewButton = (props: Props) => {
  const [reportOpen, setReportOpen] = useState(false);
  const { userDetails } = useContext(UserDataContext);

  const classes = userDetails?.classes;

  return (
    <>
      <Tooltip title="Criar Relatório" arrow>
        <IconButton
          className="text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 dark:text-slate-400"
          onClick={() => {
            if (classes) setReportOpen(true);
          }}
        >
          <ClipboardText className="h-6 " weight="regular" />
        </IconButton>
      </Tooltip>
      {classes && (
        <ReviewDialog
          open={reportOpen}
          onClose={() => setReportOpen(false)}
          classes={classes}
        />
      )}
    </>
  );
};

export default EnrollTopbarReviewButton;
