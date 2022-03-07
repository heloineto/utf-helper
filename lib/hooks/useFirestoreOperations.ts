import {
  SetOptions,
  UpdateData,
  WithFieldValue,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { useSnackbar } from 'notistack';

const useFirestoreOperations = () => {
  const { enqueueSnackbar } = useSnackbar();

  const update = async <T>(reference: DocumentReference<T>, updates: UpdateData<T>) => {
    await updateDoc(reference, updates).catch((error) => {
      enqueueSnackbar('Não foi possível atualizar dados', {
        variant: 'error',
      });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });
  };

  const set = async <T>(
    reference: DocumentReference<T>,
    data: WithFieldValue<T>,
    options: SetOptions
  ) => {
    await setDoc(reference, data, options).catch((error) => {
      enqueueSnackbar('Não foi possível definir dados', {
        variant: 'error',
      });

      if (process.env.NODE_ENV === 'development') console.error(error);
    });
  };

  return { update, set };
};

export default useFirestoreOperations;
