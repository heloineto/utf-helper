import { Avatar, AvatarProps, Tooltip } from '@mui/material';
import classNames from 'clsx';

interface Props extends AvatarProps {
  userDetails: UserDetails;
}

const NavbarAvatar = ({ className, userDetails }: Props) => {
  return (
    <Tooltip title="Abrir menu" arrow>
      <Avatar
        className={classNames(className, 'font-semibold ring-2 ring-sky-500')}
        alt={'avatar'}
        src={userDetails?.photoUrl}
      >
        {userDetails.name?.charAt(0)}
      </Avatar>
    </Tooltip>
  );
};

export default NavbarAvatar;
