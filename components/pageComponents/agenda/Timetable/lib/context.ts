import { DateTime } from 'luxon';
import { createContext } from 'react';
import useTimetable from './hooks/useTimetable';

export const TimetableContext = createContext<
  Partial<ReturnType<typeof useTimetable>> & {
    selectedDate: DateTime;
  }
>({
  selectedDate: DateTime.now(),
});
