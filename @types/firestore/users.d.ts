interface UserDetailsClasses {
  [campus: string]: {
    [course: string]: { [subject: string]: { [_class: string]: ClassObject } };
  };
}

interface UserDetails {
  email?: string;
  photoUrl?: string;
  name?: string;
  isAnonymous?: boolean;
  campus?: string;
  course?: string;
  classes?: UserDetailsClasses;
}

type UserDetailsWithRef = UserDetails & { ref: DocumentReference };
