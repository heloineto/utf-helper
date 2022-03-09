type ClassMap<T> = {
  [campus: string]: {
    [course: string]: { [subject: string]: { [_class: string]: T } };
  };
};

// interface ClassMap {
//   [campus: string]: {
//     [course: string]: { [subject: string]: { [_class: string]: ClassObject } };
//   };
// }

interface UserDetails {
  email?: string;
  photoUrl?: string;
  name?: string;
  campus?: string;
  course?: string;
  classes?: ClassMap<ClassObject>;
}

type UserDetailsWithRef = UserDetails & { ref: DocumentReference };
