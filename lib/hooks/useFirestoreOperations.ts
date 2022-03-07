import { UpdateData, updateDoc } from 'firebase/firestore';
import { useSnackbar } from 'notistack';

const useFirestoreOperations = () => {
  const { enqueueSnackbar } = useSnackbar();

  const update = async <T>(ref: DocumentReference<T>, updates: UpdateData<T>) => {
    await updateDoc(ref, updates).catch((error) => {
      enqueueSnackbar('Não foi possível atualizar dados do usuário', {
        variant: 'error',
      });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });
  };

  return { update };
};

export default useFirestoreOperations;
