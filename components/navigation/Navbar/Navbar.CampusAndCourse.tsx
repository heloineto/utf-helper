import CustomAutocomplete from '@components/inputs/CustomAutocomplete';
import { Button, Dialog, Tooltip } from '@mui/material';
import { NotePencil } from 'phosphor-react';
import { useState } from 'react';
import classNames from 'clsx';
import { useCampuses } from '@lib/hooks';
import { Form } from 'react-final-form';
import { Autocomplete } from 'mui-rff';

interface Props extends ComponentProps<'button'> {}

const NavbarCampusAndCourse = ({ className, ...buttonProps }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const campuses = useCampuses();

  return (
    <>
      <Tooltip title="Selecionar Câmpus e Curso" arrow>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={classNames(className, 'rounded-md px-2.5 relative')}
          onClick={() => setDialogOpen(true)}
          {...buttonProps}
        >
          {hover && (
            <div className="flex justify-center items-center absolute w-full h-full bg-slate-900/10 dark:bg-slate-50/10 top-0 left-0 rounded-md">
              <NotePencil
                className="h-7 w-auto text-slate-900/50 dark:text-slate-50/50"
                weight="bold"
              />
            </div>
          )}
          <p className="text-sky-500 dark:text-sky-400 text-sm">Ponta Grossa</p>
          <p className="text-slate-700 dark:text-slate-500 text-sm">
            Ciência Da Computação
          </p>
        </button>
      </Tooltip>
      <Dialog
        maxWidth="sm"
        fullWidth
        classes={{
          paper: 'bg-white ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10',
        }}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <Form
          onSubmit={() => {
            setDialogOpen(false);
          }}
        >
          {({ handleSubmit, submitting, submitError }) => (
            <form className="flex flex-col w-full gap-y-4 p-8" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center text-slate-800 dark:text-slate-200 text-2xl font-semibold border-b border-slate-200 dark:border-slate-700 -mx-8 -mt-8 p-4">
                Selecione um Câmpus e Curso
              </div>
              <Autocomplete label="Câmpus" name="campus" options={[]} />
              <Autocomplete label="Curso" name="course" options={[]} />
              <div className="mt-5 dark:border-slate-700 flex flex-row justify-end">
                <Button
                  className="w-1/4 border-sky-500 text-sky-500 bg-sky-100 hover:bg-sky-200 hover:border-sky-600 dark:bg-sky-600 dark:text-sky-200 dark:hover:bg-sky-700 dark:border-transparent"
                  variant="outlined"
                  type="submit"
                >
                  Ok
                </Button>
              </div>
            </form>
          )}
        </Form>
      </Dialog>
    </>
  );
};

export default NavbarCampusAndCourse;
