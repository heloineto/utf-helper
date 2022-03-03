import Month from '@components/pageComponents/calendar/Month';
import useCalendarData from '@lib/hooks/useCalendarData';
import { Drawer, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { toStartCase } from '@lib/utils/typescript';
import { DateTime } from 'luxon';

const useTimetable = () => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xl'));

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(DateTime.now());
  const [displayDate, setDisplayDate] = useState(DateTime.now());

  return {
    selectedDate,
    setSelectedDate,
    displayDate,
    setDisplayDate,
    sidebarOpen,
    setSidebarOpen,
    mobile,
  };
};

export default useTimetable;
