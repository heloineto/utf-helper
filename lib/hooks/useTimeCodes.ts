import { useMemo } from 'react';

const useTimeCodes = () => {
  const timeCodes = useMemo(
    () => [
      'M1',
      'M2',
      'M3',
      'M4',
      'M5',
      'M6',
      'T1',
      'T2',
      'T3',
      'T4',
      'T5',
      'T6',
      'N1',
      'N2',
      'N3',
      'N4',
      'N5',
    ],
    []
  );
  return timeCodes;
};

export default useTimeCodes;
