import { auth, firestore, googleAuthProvider } from '@lib/firebase';
import { converter } from '@lib/utils/firebase';
import {
  User,
  UserCredential,
  linkWithPopup,
  linkWithRedirect,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { isNil, omitBy } from 'lodash';
import { useSnackbar } from 'notistack';

const useSignInWithGoogle = () => {
  const { enqueueSnackbar } = useSnackbar();

  const signIn = async () => {
    let userCredential: void | UserCredential | undefined;
    let authError: any;

    userCredential = await signInWithPopup(auth, googleAuthProvider).catch((error) => {
      if (process.env.NODE_ENV === 'development') console.error(error);

      authError = error;
    });

    if (authError?.code === 'auth/popup-blocked') {
      userCredential = await signInWithRedirect(auth, googleAuthProvider).catch(
        (error) => {
          if (process.env.NODE_ENV === 'development') console.error(error);

          authError = error;
        }
      );
    }

    if (!userCredential) {
      enqueueSnackbar('Não foi possível entrar', { variant: 'error' });
      return;
    }

    return userCredential;
  };

  const link = async (user: User) => {
    let userCredential: void | UserCredential | undefined;
    let authError: any;

    userCredential = await linkWithPopup(user, googleAuthProvider).catch((error) => {
      if (process.env.NODE_ENV === 'development') console.error(error);

      authError = error;
    });

    if (authError?.code === 'auth/popup-blocked') {
      userCredential = await linkWithRedirect(user, googleAuthProvider).catch((error) => {
        if (process.env.NODE_ENV === 'development') console.error(error);

        authError = error;
      });
    }

    if (!userCredential) {
      enqueueSnackbar('Erro ao atualizar conta anônima', { variant: 'error' });
      return;
    }

    return userCredential;
  };

  const signInWithGoogle = async () => {
    let userCredential: void | UserCredential | undefined;

    if (auth.currentUser) {
      userCredential = await link(auth.currentUser);
    } else {
      userCredential = await signIn();
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
