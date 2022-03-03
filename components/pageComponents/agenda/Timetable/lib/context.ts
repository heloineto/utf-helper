import { createContext } from 'react';
import useTimetable from './hooks/useTimetable';

export const TimetableContext = createContext<Partial<ReturnType<typeof useTimetable>>>(
  {}
);
