import { createContext } from 'react';

export const SettingsContext = createContext<{
  darkMode?: boolean;
  setDarkMode?: Dispatch<SetStateAction<boolean>>;
  direction?: Direction;
  setDirection?: Dispatch<SetStateAction<Direction>>;
  selectedClasses?: SelectedClasses;
  setSelectedClasses?: Dispatch<SetStateAction<SelectedClasses>>;
  schedule?: ScheduleObject;
  setSchedule?: Dispatch<SetStateAction<ScheduleObject>>;
}>({});
