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
      enqueueSnackbar('Não foi possível entrar', { variant: 'error' });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });

    if (!response) return;

    const user = response.user;
    if (await docExists(`users/${user.uid}`)) return;

    const userRef = doc(firestore, `users/${user.uid}`).withConverter(
      converter<UserDetails>()
    );

    const userDetails = omitBy(
      { email: user.email, photoUrl: user.photoURL, name: user.displayName },
      isNil
    );

    await setDoc(userRef, userDetails).catch((error) => {
      enqueueSnackbar('Não foi possível criar usuário no banco de dados', {
        variant: 'error',
      });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });

    return userRef;
  };

  return signInWithGoogle;
};

export default useSignInWithGoogle;
