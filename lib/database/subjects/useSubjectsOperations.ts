import { useSnackbar } from 'notistack';

const useSubjectsOperations = () => {
  const { enqueueSnackbar } = useSnackbar();

  const getSubjects = async (
    campus: FirebaseRef,
    course: Partial<UserDetails>,
    year: string,
    period: string
  ) => {
    // .catch((error) => {
    //   enqueueSnackbar('Não foi possível atualizar dados do usuário', {
    //     variant: 'error',
    //   });
    //   if (process.env.NODE_ENV === 'development') console.error(error);
    // });
  };

  return { getSubjects };
};

export default useSubjectsOperations;
