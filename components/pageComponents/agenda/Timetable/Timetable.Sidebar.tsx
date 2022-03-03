import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import TimetableTopbar from './Timetable.Topbar';

type Props = {};

const TimetableSidebar = (props: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('md'));
  const [drawerContainer, setDrawerContainer] = useState<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDrawerContainer(mobile ? document.body : divRef.current);

    return () => {};
  }, [mobile]);

  return (
    <Drawer
      className="w-3/12"
      container={drawerContainer}
      anchor="left"
      variant={mobile ? 'temporary' : 'permanent'}
      open={drawerOpen}
      PaperProps={{ sx: { position: 'static' } }}
      onClose={() => setDrawerOpen(false)}
      // Better open performance on mobile
      ModalProps={{ keepMounted: true }}
    >
      <div>mobile</div>
    </Drawer>
  );
};

export default TimetableSidebar;
