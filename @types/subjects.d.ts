type Subject = {
  code: string;
  name: string;
  classes: {
    [x: string]: ClassObject;
  };
};

type ClassObject = {
  subjectCode: string;
  subjectName: string;
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
