import { auth, firestore, googleAuthProvider } from '@lib/firebase';
import { converter } from '@lib/utils/firebase';
import { UserCredential, linkWithPopup, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { isNil, omitBy } from 'lodash';
import { useSnackbar } from 'notistack';

const useSignInWithGoogle = () => {
  const { enqueueSnackbar } = useSnackbar();

  const signInWithGoogle = async () => {
    let userCredential: void | UserCredential | undefined;

    if (auth.currentUser) {
      userCredential = await linkWithPopup(auth.currentUser, googleAuthProvider).catch(
        (error) => {
          enqueueSnackbar('Erro ao atualizar conta anônima', { variant: 'error' });

          if (process.env.NODE_ENV === 'development') console.error(error);
        }
      );
    } else {
      userCredential = await signInWithPopup(auth, googleAuthProvider).catch((error) => {
        enqueueSnackbar('Não foi possível entrar', { variant: 'error' });

        if (process.env.NODE_ENV === 'development') console.error(error);
      });
    }

    if (!userCredential) return;
    const user = userCredential.user;

    const userRef = doc(firestore, `users/${user.uid}`).withConverter(
      converter<UserDetails>()
    );

    const userDetails = omitBy(
      { email: user.email, photoUrl: user.photoURL, name: user.displayName },
      isNil
    );

    await setDoc(userRef, userDetails, { merge: true }).catch((error) => {
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
