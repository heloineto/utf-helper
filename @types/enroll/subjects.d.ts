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

type ScheduleCell = { startTimeCode: string; length: number };

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
  pa: PA;
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
  type: string;
  isSync: boolean;
  numberOfLessonsOrWeight: string;
  numberOfSyncLessons: number;
  description: string;
}

interface CompleteLesson extends Lesson {
  pa: Omit<PA, 'lessons'>;
  dayCode: string;
  scheduleCells: ScheduleCell[];
}
