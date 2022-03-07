interface Campus {
  key: string;
  label: string;
}

interface Course {
  key: string;
  label: string;
  numberCode: string;
}

interface UserDetailsClasses {
  [campus: string]: Exclude<Campus, 'key'> & {
    courses: {
      [course: string]: Exclude<Course, 'key'> & {
        subjects: Subjects;
      };
    };
  };
}

interface UserDetails {
  email?: string;
  photoUrl?: string;
  name?: string;
  isAnonymous?: boolean;
  campus?: Campus;
  course?: Course;
  classes?: UserDetailsClasses;
}

type UserDetailsWithRef = UserDetails & { ref: DocumentReference };
