import { DateTime } from 'luxon';
import { useState } from 'react';

const useTimetable = () => {
  const [selectedDate, setSelectedDate] = useState(DateTime.now());
  const [displayDate, setDisplayDate] = useState(DateTime.now());

  return {
    selectedDate,
    setSelectedDate,
    displayDate,
    setDisplayDate,
  };
};

export default useTimetable;
