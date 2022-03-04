import { SettingsContext } from '@lib/context';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';
import classNames from 'clsx';
import { ArrowsDownUp } from 'phosphor-react';

type Props = {};

const EnrollTopbarDirectionButton = (props: Props) => {
  const { direction, setDirection } = useContext(SettingsContext);

  return (
    <Tooltip
      title={`Mudar para Layout ${
        direction === 'horizontal' ? 'Vertical' : 'Horizontal'
      }`}
      arrow
    >
      <IconButton
        className="group"
        onClick={() =>
          setDirection?.((value) => (value === 'horizontal' ? 'vertical' : 'horizontal'))
        }
      >
        <ArrowsDownUp
          className={classNames(
            direction === 'horizontal' ? '-rotate-90' : 'rotate-0',
            'transition-transform duration-500 h-6 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400'
          )}
          weight="bold"
        />
      </IconButton>
    </Tooltip>
  );
};

export default EnrollTopbarDirectionButton;
