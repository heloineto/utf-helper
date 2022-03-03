import clsx from 'clsx';
import { DateTime } from 'luxon';
import { useMemo, useState } from 'react';

const useMonth = (month?: number, year?: number) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const monthDate = useMemo(
    () => DateTime.fromObject({ month, year }) || DateTime.now(),
    [month, year]
  );

  return {
    selectedDate,
    setSelectedDate,
    monthDate,
  };
};

export default useMonth;
