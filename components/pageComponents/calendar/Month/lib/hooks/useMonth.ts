import { DateTime } from 'luxon';
import { useMemo } from 'react';

const useMonth = (month?: number, year?: number) => {
  const monthDate = useMemo(
    () => DateTime.fromObject({ month, year }) || DateTime.now(),
    [month, year]
  );

  return {
    monthDate,
  };
};

export default useMonth;
