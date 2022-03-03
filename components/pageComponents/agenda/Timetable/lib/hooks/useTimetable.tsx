import { useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
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
