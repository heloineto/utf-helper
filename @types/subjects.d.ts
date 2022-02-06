type Subject = {
  code: string;
  name: string;
  classes: {
    [x: string]: ClassObject;
  };
};

type ClassObject = {
  vacanciesTotal: string;
  vacanciesFreshman: string;
  reservationType: string;
  priorityMajors: string;
  schedule: {
    dayTimeCode: string;
    locationCode: string;
  }[];
  professor: string;
  optional: string;
  subjectCode: string;
  code: string;
};
