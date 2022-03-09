interface Subjects {
  [k: string]: Subject;
}

interface Subject {
  code: string;
  name: string;
  weeklyLessons: number;
  classes: {
    [x: string]: ClassObject;
  };
}

type ScheduleCell = { startTimeCode: string; length: number; locationCodes: string[] };

type ScheduleCells = {
  [dayCode: string]: ScheduleCell[];
};

interface ClassObject {
  subjectCode: string;
  subjectName: string;
  weeklyLessons: number;
  code: string;
  framing: string | null;
  vacanciesTotal: number;
  vacanciesFreshman: number;
  reservationType: string;
  priorityMajors: string;
  paCode: string | null;
  pa?: PA;
  schedule: {
    dayTimeCode: string;
    locationCode: string;
  }[];
  scheduleCells: ScheduleCells;
  teacher: string;
  optional: string;
}

interface SelectedClasses {
  [x: string]: { [x: string]: ClassObject | undefined } | undefined;
}

interface PA {
  code: string | null;
  subjectCode: string;
  className: string;
  classCode: string;
  professor: string;
  lessons: { [k: string]: Lesson };
}

interface Lesson {
  index: string;
  date: string;
  dateStr: string;
  type: string;
  isSync: boolean;
  numberOfLessonsOrWeight: string;
  numberOfSyncLessons: number;
  description: string;
}

interface CompleteLesson extends Lesson {
  dayCode: string;
  scheduleCell: ScheduleCell;
  classObject: ClassObject;
}

interface CompleteLessons {
  [timeCode: string]: CompleteLesson;
}

interface CompleteLessonsObject {
  [dayCode: string]: CompleteLessons;
}
