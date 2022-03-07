import { updateDoc } from 'firebase/firestore';
import { useSnackbar } from 'notistack';

const useSubjectsOperations = () => {
  const { enqueueSnackbar } = useSnackbar();

  const getSubjects = async (userRef: FirebaseRef, updates: Partial<UserDetails>) => {
    await updateDoc(userRef, updates).catch((error) => {
      enqueueSnackbar('Não foi possível atualizar dados do usuário', {
        variant: 'error',
      });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });
  };

  return { getSubjects };
};

export default useSubjectsOperations;
