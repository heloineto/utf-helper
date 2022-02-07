type Theme = 'light' | 'dark';
type Direction = 'horizontal' | 'vertical';
type SelectedClasses = {
  [x: string]: { [x: string]: ClassObject | undefined } | undefined;
};

type Settings = {
  theme: Theme;
  direction: Direction;
  selectedClasses: SelectedClasses;
  schedule: ScheduleObject;
};
