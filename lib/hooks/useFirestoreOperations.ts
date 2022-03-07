import { UpdateData, updateDoc } from 'firebase/firestore';
import { useSnackbar } from 'notistack';

const useUserOperations = () => {
  const { enqueueSnackbar } = useSnackbar();

  const update = async <T>(userRef: DocumentReference<T>, updates: UpdateData<T>) => {
    await updateDoc(userRef, updates).catch((error) => {
      enqueueSnackbar('Não foi possível atualizar dados do usuário', {
        variant: 'error',
      });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });
  };

  return { update };
};

export default useUserOperations;
