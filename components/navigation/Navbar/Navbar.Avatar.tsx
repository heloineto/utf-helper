import {
  Avatar,
  Button,
  IconButton,
  IconButtonProps,
  Popover,
  Tooltip,
} from '@mui/material';
import classNames from 'clsx';
import { SignOut } from 'phosphor-react';
import { useState } from 'react';

interface Props extends IconButtonProps {
  userDetails: UserDetails;
}

const NavbarAvatar = ({ className, userDetails, ...IconButtonProps }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <Tooltip title="Abrir Menu" arrow>
        <IconButton
          className={classNames(className, 'p-0')}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          {...IconButtonProps}
        >
          <Avatar
            className="font-semibold ring-2 ring-sky-500"
            alt={'avatar'}
            src={userDetails?.photoUrl}
          >
            {userDetails.name?.charAt(0)}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Popover
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        open={!!anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper:
            'bg-white rounded-lg shadow-lg ring-1 ring-slate-900/10 dark:ring-white/10 overflow-hidden w-36 py-1 dark:bg-slate-900 mt-4',
        }}
      >
        <ul>
          <li className="py-1 px-2 flex items-center cursor-pointer">
            <Button className="justify-start py-2 px-1 m-0 text-sm text-slate-700 font-semibold dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800">
              <SignOut className="h-5 w-auto mr-2 text-slate-500" weight="bold" />
              Sair
            </Button>
          </li>
        </ul>
      </Popover>
    </>
  );
};

export default NavbarAvatar;
