import { Drawer, useMediaQuery, useTheme } from '@mui/material';
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
        variant="temporary"
        anchor={'left'}
        open={open}
        onClose={onClose}
        classes={{ paper: 'w-28' }}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarNavItems expanded={false} />
      </Drawer>
    </div>
  );
};

export default Sidebar;
