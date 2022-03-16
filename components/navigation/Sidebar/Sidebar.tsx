import { SwipeableDrawer, SwipeableDrawerProps } from '@mui/material';
import SidebarNavItems from './Sidebar.NavItems';
import classNames from 'clsx';

interface Props extends SwipeableDrawerProps {}

const Sidebar = ({ className, ...muiSwipeableDrawerProps }: Props) => {
  return (
    <SwipeableDrawer
      className={classNames('w-4/12')}
      classes={{
        paper: 'static bg-slate-50 dark:bg-slate-900/80 xl:dark:bg-slate-900/50 p-2.5',
      }}
      variant="temporary"
      anchor={'left'}
      ModalProps={{ keepMounted: true }}
      {...muiSwipeableDrawerProps}
    >
      <SidebarNavItems />
    </SwipeableDrawer>
  );
};

export default Sidebar;
