import { auth, firestore, googleAuthProvider } from '@lib/firebase';
import { converter, docExists } from '@lib/utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { isNil, omitBy } from 'lodash';
import { useSnackbar } from 'notistack';

const useSignInWithGoogle = () => {
  const { enqueueSnackbar } = useSnackbar();

  const signInWithGoogle = async () => {
    const response = await signInWithPopup(auth, googleAuthProvider).catch((error) => {
      if (process.env.NODE_ENV === 'development') console.error(error);
    });

    if (!response) {
      enqueueSnackbar('Não foi possível entrar', { variant: 'error' });
      return;
    }

    const user = response.user;
    if (await docExists(`users/${user.uid}`)) return;

    const userRef = doc(firestore, `users/${user.uid}`).withConverter(
      converter<UserDetails>()
    );

    const userDetails = omitBy(
      { email: user.email, photoUrl: user.photoURL, name: user.displayName },
      isNil
    );

    await setDoc(userRef, userDetails);
  };

  return signInWithGoogle;
};

export default useSignInWithGoogle;
