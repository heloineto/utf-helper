import { SwitchVerticalIcon } from '@heroicons/react/outline';
import { SettingsContext } from '@lib/context';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';
import classNames from 'clsx';

type Props = {};

const NavbarDirectionButton = (props: Props) => {
  const { direction, setDirection } = useContext(SettingsContext);

  console.log({ direction });

  return (
    <Tooltip title="Mudar para Layout Horizontal" arrow>
      <IconButton className="group">
        <SwitchVerticalIcon
          className={classNames(
            direction === 'horizontal' ? '-rotate-90' : 'rotate-0',
            'transition-transform duration-500 h-5 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400'
          )}
          onClick={() =>
            setDirection?.((value) =>
              value === 'horizontal' ? 'vertical' : 'horizontal'
            )
          }
        />
      </IconButton>
    </Tooltip>
  );
};

export default NavbarDirectionButton;
