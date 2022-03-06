import { Button, Dialog, DialogProps, Tooltip } from '@mui/material';
import { useMemo, useState } from 'react';
import { useCampuses } from '@lib/hooks';
import { Form } from 'react-final-form';
import { Autocomplete } from '@components/elements/inputs/Autocomplete';

interface Props extends DialogProps {}

const CampusDialog = ({ onClose, ...dialogProps }: Props) => {
  const campuses = useCampuses();

  const campusOptions = useMemo(
    () =>
      Object.entries(campuses).map(([key, { label }]) => ({
        label,
        value: key,
      })),
    [campuses]
  );

  const coursesOptions = useMemo(() => {
    const coursesOptions: {
      [k: string]: {
        label: string;
        value: string;
      }[];
    } = {};

    Object.entries(campuses).forEach(([key, { courses }]) => {
      coursesOptions[key] = Object.entries(courses).map(([key, { label }]) => ({
        label,
        value: key,
      }));
    });

    return coursesOptions;
  }, [campuses]);

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      classes={{
        paper: 'bg-white ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10',
      }}
      {...dialogProps}
    >
      <Form
        onSubmit={(values) => {
          onClose();
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
              getOptionValue={(option) => option.value}
            />
            <Autocomplete
              label="Curso"
              name="course"
              disabled={!values.campus}
              options={values.campus ? coursesOptions[values.campus] : []}
              getOptionValue={(option) => option.value}
            />
            <div className="mt-5 dark:border-slate-700 flex flex-row justify-end">
              <Button
                className="border-sky-500 text-sky-500 bg-sky-100 hover:bg-sky-200 hover:border-sky-600 dark:bg-sky-600 dark:text-sky-200 dark:hover:bg-sky-700 dark:border-transparent"
                variant="outlined"
                type="submit"
              >
                Confirmar
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <pre>{JSON.stringify(values, null, 2)}</pre>
            )}
          </form>
        )}
      </Form>
    </Dialog>
  );
};

export default CampusDialog;
