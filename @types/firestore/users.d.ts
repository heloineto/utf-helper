interface UserDetails {
  email?: string;
  photoUrl?: string;
  name?: string;
  campus?: Campus;
  course?: Course;
}

interface Campus {
  key: string;
  label: string;
}

interface Course {
  key: string;
  label: string;
  numberCode: string;
}

type UserDetailsWithRef = UserDetails & { ref: FirebaseRef };
