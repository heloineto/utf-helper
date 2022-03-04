interface UserDetails {
  email?: string;
  photoUrl?: string;
  name?: string;
  campus?: string;
  course?: string;
}

type UserDetailsWithRef = UserDetails & { ref: FirebaseRef };
