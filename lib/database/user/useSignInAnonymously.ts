import { auth, firestore } from '@lib/firebase';
import { converter, docExists } from '@lib/utils/firebase';
import { signInAnonymously } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { isNil, omitBy } from 'lodash';
import { useSnackbar } from 'notistack';

const useSignInAnonymously = () => {
  const { enqueueSnackbar } = useSnackbar();

  const _signInAnonymously = async () => {
    const response = await signInAnonymously(auth).catch((error) => {
      enqueueSnackbar('Não foi possível entrar', { variant: 'error' });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });

    if (!response) return;

    const user = response.user;
    if (await docExists(`users/${user.uid}`)) return;

    const userRef = doc(firestore, `users/${user.uid}`).withConverter(
      converter<UserDetails>()
    );

    await setDoc(userRef, { isAnonymous: true }).catch((error) => {
      enqueueSnackbar('Não foi possível criar usuário no banco de dados', {
        variant: 'error',
      });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });

    return userRef;
  };

  return _signInAnonymously;
};

export default useSignInAnonymously;
