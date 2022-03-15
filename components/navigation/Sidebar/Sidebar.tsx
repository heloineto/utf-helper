import { Drawer } from '@mui/material';
import SidebarNavItems from './Sidebar.NavItems';

interface Props {
  className?: string;
  open: boolean;
  onClose: () => void;
  expanded?: boolean;
  toggleExpanded?: () => void;
}

const Sidebar = ({ className, open, onClose }: Props) => {
  return (
    <div className={className}>
      <Drawer
        className="w-3/12"
        classes={{
          paper: 'static bg-slate-50 dark:bg-slate-900/80 xl:dark:bg-slate-900/50 p-2.5',
        }}
        variant="temporary"
        anchor={'left'}
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarNavItems />
      </Drawer>
    </div>
  );
};

export default Sidebar;
