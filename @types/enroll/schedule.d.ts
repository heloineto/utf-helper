type ScheduleObject = {
  [x: string]: {
    start: string;
    end: string;
    days: {
      [x: number | string]: ClassObject | null;
    };
  };
};

type SelectedDayTime = { [x: string]: ClassObject };

type Conflict = { withClass: ClassObject; dayTimeCodes: string[] };

type ScheduleMap<T> = { [timeCode: string]: { [dayCode: string]: T } };

type Highlights = { [dayTimeCode: string]: string[] };

interface ClassCell {
  classObject: ClassObject;
  length: number;
  campus: string;
  course: string;
}
