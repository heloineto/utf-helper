type Subject = {
  code: string;
  name: string;
  weeklyLessons: number;
  classes: {
    [x: string]: ClassObject;
  };
};

type ClassObject = {
  subjectCode: string;
  subjectName: string;
  weeklyLessons: number;
  code: string;
  framing: string | null;
  vacanciesTotal: number;
  vacanciesFreshman: number;
  reservationType: string;
  priorityMajors: string;
  schedule: {
    dayTimeCode: string;
    locationCode: string;
  }[];
  teacher: string;
  optional: string;
};

type SelectedClasses = {
  [x: string]: { [x: string]: ClassObject | undefined } | undefined;
};
