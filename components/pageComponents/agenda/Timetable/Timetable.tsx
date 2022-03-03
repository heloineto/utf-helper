import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

type Props = {};

const Timetable = (props: Props) => {
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
    <div
      className="h-full w-full flex overflow-hidden bg-gray-100 dark:bg-slate-800 relative"
      ref={divRef}
    >
      {/* Static sidebar for desktop */}
      {/* {drawerContainer && (
        <Drawer
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
      )} */}
    </div>
  );
};

export default Timetable;
