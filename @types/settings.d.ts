type Direction = 'horizontal' | 'vertical';
type SelectedClasses = {
  [x: string]: { [x: string]: ClassObject | undefined } | undefined;
};

type Settings = {
  darkMode: boolean;
  direction: Direction;
  selectedClasses: SelectedClasses;
  schedule: ScheduleObject;
};
