import { createContext } from 'react';

export const SettingsContext = createContext<{
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
  direction?: Direction;
  setDirection?: Dispatch<SetStateAction<Direction>>;
  selectedClasses?: SelectedClasses;
  setSelectedClasses?: Dispatch<SetStateAction<SelectedClasses>>;
  schedule?: ScheduleObject;
  setSchedule?: Dispatch<SetStateAction<ScheduleObject>>;
}>({});
