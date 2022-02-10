import { createContext, SetValue } from 'react';

export const SettingsContext = createContext<{
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  direction?: Direction;
  setDirection?: SetValue<Direction>;
}>({});

export const UserDataContext = createContext<{
  selectedClasses?: SelectedClasses;
  setSelectedClasses?: Dispatch<SetStateAction<SelectedClasses>>;
  schedule?: ScheduleObject;
  setSchedule?: Dispatch<SetStateAction<ScheduleObject>>;
}>({});
