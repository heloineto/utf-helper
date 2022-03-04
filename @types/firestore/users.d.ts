interface UserDetails {
  email?: string;
  photoUrl?: string;
  name?: string;
}

type UserDetailsWithRef = UserDetails & { ref: FirebaseRef };
