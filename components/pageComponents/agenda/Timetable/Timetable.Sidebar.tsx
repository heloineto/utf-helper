import Month from '@components/pageComponents/calendar/Month';
import useCalendarData from '@lib/hooks/useCalendarData';
import { Drawer, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { TimetableContext } from './lib/context';
import { CaretLeft, CaretRight } from 'phosphor-react';

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
      <div className="bg-white rounded-lg shadow ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 p-1 mb-2.5 flex justify-between">
        <IconButton className="dark:text-white p-1 h-7 w-7 sm:h-8 sm:w-8">
          <CaretLeft size={32} weight="bold" />
        </IconButton>
        <IconButton className="dark:text-white p-1 h-7 w-7 sm:h-8 sm:w-8">
          <CaretRight size={32} weight="bold" />
        </IconButton>
      </div>
      <Month month={monthIndex} monthInfo={yearInfo.months[monthIndex - 1]} />
    </Drawer>
  );
};

export default TimetableSidebar;
