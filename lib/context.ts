import { createContext } from 'react';

export const ScheduleContext = createContext<{
  schedule: TimeCodeObject | null;
  setSchedule: Dispatch<SetStateAction<TimeCodeObject>> | null;
}>({
  schedule: null,
  setSchedule: null,
});
