import { createContext } from 'react';

export const ScheduleContext = createContext<{
  schedule: TimeCodeObject | null;
  setSchedule: Dispatch<SetStateAction<TimeCodeObject>> | null;
}>({
  schedule: null,
  setSchedule: null,
});

export const SettingsContext = createContext<{
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
  direction?: Direction;
  setDirection?: Dispatch<SetStateAction<Direction>>;
}>({});
