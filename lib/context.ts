import { createContext } from 'react';

export const ScheduleContext = createContext<{
  schedule: ScheduleObject | null;
  setSchedule: Dispatch<SetStateAction<ScheduleObject>> | null;
}>({
  schedule: null,
  setSchedule: null,
});

export const SettingsContext = createContext<{
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
  direction?: Direction;
  setDirection?: Dispatch<SetStateAction<Direction>>;
  selectedClasses?: SelectedClasses;
  setSelectedClasses?: Dispatch<SetStateAction<SelectedClasses>>;
}>({});
