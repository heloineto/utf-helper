import { DateTime } from 'luxon';
import { createContext } from 'react';
import useMonth from './hooks/useMonth';

export const MonthContext = createContext<
  Partial<ReturnType<typeof useMonth>> & { monthDate: DateTime }
>({
  monthDate: DateTime.now(),
});
