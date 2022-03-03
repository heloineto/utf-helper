import MainShell from '@components/appShells/MainShell';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

const Agenda: NextPage = () => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('md'));
  const [drawerContainer, setDrawerContainer] = useState<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDrawerContainer(mobile ? document.body : divRef.current);

    return () => {};
  }, [mobile, divRef.current]);

  console.log(mobile);

  return (
    <MainShell>
      <div
        className="h-full w-full flex overflow-hidden bg-red-100 relative"
        ref={divRef}
      >
        {/* Static sidebar for desktop */}
        {drawerContainer && (
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
        )}
        <div className="bg-blue-400 w-full h-14">
          <div></div>
        </div>
        <div></div>
      </div>
    </MainShell>
  );
};

export default Agenda;
