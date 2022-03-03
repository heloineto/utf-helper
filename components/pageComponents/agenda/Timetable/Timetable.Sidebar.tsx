import Month from '@components/pageComponents/calendar/Month';
import useCalendarData from '@lib/hooks/useCalendarData';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { TimetableContext } from './lib/context';

type Props = {};

const TimetableSidebar = (props: Props) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('md'));
  const { yearInfo } = useCalendarData();
  const [drawerContainer, setDrawerContainer] = useState<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const { displayDate } = useContext(TimetableContext);

  const monthIndex = displayDate?.get.month ?? 0;

  useEffect(() => {
    setDrawerContainer(mobile ? document.body : divRef.current);

    return () => {};
  }, [mobile]);

  return (
    <Drawer
      className="w-3/12 h-full"
      classes={{
        paper: 'static bg-slate-50 dark:bg-slate-900/50 p-2.5',
      }}
      container={drawerContainer}
      anchor="left"
      variant={mobile ? 'temporary' : 'permanent'}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      // Better open performance on mobile
      ModalProps={{ keepMounted: true }}
    >
      <Month
        className=""
        month={monthIndex}
        monthInfo={yearInfo.months[monthIndex - 1]}
      />
    </Drawer>
  );
};

export default TimetableSidebar;
