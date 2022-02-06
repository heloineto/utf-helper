import { createContext } from 'react';

export const ScheduleContext = createContext<{
  schedule: TimeCodeObject | null;
  setSchedule: Dispatch<SetStateAction<TimeCodeObject>> | null;
}>({
  schedule: null,
  setSchedule: null,
});

export const SettingsContext = createContext<{
  theme: Theme | null;
  setTheme: Dispatch<SetStateAction<Theme>> | null;
  direction: Direction | null;
  setDirection: Dispatch<SetStateAction<Direction>> | null;
}>({
  theme: null,
  setTheme: null,
  direction: null,
  setDirection: null,
});
