interface Campus {
  key: string;
  label: string;
}

interface Course {
  key: string;
  label: string;
  numberCode: string;
}

interface UserDetails {
  email?: string;
  photoUrl?: string;
  name?: string;
  isAnonymous?: boolean;
  campus?: Campus;
  course?: Course;
}

type UserDetailsWithRef = UserDetails & { ref: FirebaseRef };
