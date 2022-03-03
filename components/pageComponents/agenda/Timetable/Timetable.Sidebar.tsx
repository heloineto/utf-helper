import Month from '@components/pageComponents/calendar/Month';
import useCalendarData from '@lib/hooks/useCalendarData';
import { Drawer, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { TimetableContext } from './lib/context';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { toStartCase } from '@lib/utils/typescript';

type Props = {};

const TimetableSidebar = (props: Props) => {
  const { yearInfo } = useCalendarData();
  const [drawerContainer, setDrawerContainer] = useState<HTMLElement | null>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const { mobile, sidebarOpen, setSidebarOpen, displayDate, setDisplayDate } =
    useContext(TimetableContext);

  useEffect(() => {
    setDrawerContainer(mobile ? document.body : divRef.current);
  }, [mobile]);

  return (
    <Drawer
      className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 h-full"
      classes={{
        paper: 'static bg-slate-50 dark:bg-slate-900/50 p-2.5',
      }}
      container={drawerContainer}
      anchor="left"
      variant={mobile ? 'temporary' : 'permanent'}
      open={sidebarOpen}
      onClose={() => setSidebarOpen?.(false)}
      // Better open performance on mobile
      ModalProps={{ keepMounted: true }}
    >
      {displayDate && (
        <>
          <div className="bg-white rounded-lg shadow ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 p-1 mb-2.5 flex justify-between">
            <IconButton
              className="dark:text-white p-1 h-7 w-7 sm:h-8 sm:w-8"
              onClick={() => setDisplayDate?.(displayDate.plus({ months: 1 }))}
            >
              <CaretLeft size={32} weight="bold" />
            </IconButton>
            <div className="flex items-center justify-center text-slate-800 dark:text-slate-100 font-medium text-xl">
              {`${toStartCase(displayDate.monthLong)} ${displayDate.year}`}
            </div>
            <IconButton
              className="dark:text-white p-1 h-7 w-7 sm:h-8 sm:w-8"
              onClick={() => setDisplayDate?.(displayDate.minus({ months: 1 }))}
            >
              <CaretRight size={32} weight="bold" />
            </IconButton>
          </div>
          <Month
            month={displayDate.month}
            monthInfo={yearInfo.months[displayDate.month - 1]}
            classes={{ monthHeader: 'hidden' }}
          />
        </>
      )}
    </Drawer>
  );
};

export default TimetableSidebar;
