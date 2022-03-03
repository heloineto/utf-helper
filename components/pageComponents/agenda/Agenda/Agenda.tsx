import SecondaryButton from '@components/buttons/SecondaryButton';
import { Drawer, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

type Props = {};

const Agenda = (props: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('md'));
  const [drawerContainer, setDrawerContainer] = useState<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDrawerContainer(mobile ? document.body : divRef.current);

    return () => {};
  }, [mobile, divRef.current]);

  return (
    <div
      className="h-full w-full flex overflow-hidden bg-gray-100 dark:bg-slate-800 relative"
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
      <div className="w-full h-28 sm:h-14 px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between shadow-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]">
        <Tooltip title={''} arrow>
          <SecondaryButton className="w-20">Hoje</SecondaryButton>
        </Tooltip>
      </div>
      <div></div>
    </div>
  );
};

export default Agenda;
