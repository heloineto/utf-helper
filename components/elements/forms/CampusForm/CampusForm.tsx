import { Button } from '@mui/material';
import { useContext, useMemo } from 'react';
import { useCampuses } from '@lib/hooks';
import { Form } from 'react-final-form';
import { Autocomplete } from '@components/elements/inputs/Autocomplete';
import { UserDataContext } from '@lib/context';
import { useFirestoreOperations, useSignInAnonymously } from '@lib/hooks';
import * as yup from 'yup';
import { makeValidate } from 'mui-rff';
import PrimaryButton from '@components/elements/buttons/PrimaryButton';

type CampusFormValues = {
  campus: string;
  course: string;
};

interface Props {
  afterSubmit?: () => void;
}

const CampusForm = ({ afterSubmit }: Props) => {
  const { userDetails } = useContext(UserDataContext);
  const { update: updateUser } = useFirestoreOperations();
  const signInAnonymously = useSignInAnonymously();
  const campuses = useCampuses();

  const campusFormSchema = yup.object().shape({
    campus: yup.string().required('Forneça o Câmpus'),
    course: yup.string().required('Forneça o Curso'),
  });

  const campusOptions = useMemo(
    () =>
      Object.entries(campuses).map(([key, { label }]) => ({
        label,
        key,
      })),
    [campuses]
  );

  const coursesOptions = useMemo(() => {
    const coursesOptions: {
      [k: string]: {
        label: string;
        key: string;
      }[];
    } = {};

    Object.entries(campuses).forEach(([key, { courses }]) => {
      coursesOptions[key] = Object.entries(courses).map(([key, { label }]) => ({
        label,
        key,
      }));
    });

    return coursesOptions;
  }, [campuses]);

  const onSubmit = async (values: CampusFormValues) => {
    const { campus, course } = values;

    const userRef = userDetails?.ref ?? (await signInAnonymously());

    if (!userRef) return;

    updateUser<UserDetails>(userRef, {
      campus,
      course,
    });

    afterSubmit?.();
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={makeValidate<Partial<CampusFormValues>>(campusFormSchema)}
      initialValues={{
        campus: userDetails?.campus,
        course: userDetails?.course,
      }}
    >
      {({ handleSubmit, submitting, submitError, values }) => (
        <form className="flex flex-col w-full gap-y-4 p-8" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center text-slate-800 dark:text-slate-200 text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 -mx-8 -mt-8 p-4">
            Selecionar Câmpus e Curso
          </div>
          <Autocomplete
            label="Câmpus"
            name="campus"
            options={campusOptions}
            getOptionValue={(option) => option.key}
            disableClearable
          />
          <Autocomplete
            label="Curso"
            name="course"
            disabled={!values.campus}
            options={values?.campus ? coursesOptions[values.campus] : []}
            getOptionValue={(option) => option.key}
            disableClearable
          />
          <div className="mt-5 dark:border-slate-700 flex flex-row justify-end">
            <PrimaryButton type="submit">Confirmar</PrimaryButton>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <pre>{JSON.stringify(values, null, 2)}</pre>
          )}
        </form>
      )}
    </Form>
  );
};

export default CampusForm;
