import { DateTime } from 'luxon';
import { useState } from 'react';

const useTimetable = () => {
  const [selectedDate, setSelectedDate] = useState(DateTime.now());
  const [displayDate, setDisplayDate] = useState(DateTime.now());

  return {
    selectedDate: { get: selectedDate, set: setSelectedDate },
    displayDate: { get: displayDate, set: setDisplayDate },
  };
};

export default useTimetable;
