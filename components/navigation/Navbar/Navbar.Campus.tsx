import { Button, Dialog, Tooltip } from '@mui/material';
import { NotePencil } from 'phosphor-react';
import { useMemo, useState } from 'react';
import classNames from 'clsx';
import { useCampuses } from '@lib/hooks';
import { Form } from 'react-final-form';
import { Autocomplete } from '@components/elements/inputs/Autocomplete';
import CampusDialog from '@components/elements/modals/CampusDialog';

interface Props extends ComponentProps<'button'> {}

const NavbarCampus = ({ className, ...buttonProps }: Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [hover, setHover] = useState(false);

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

      <CampusDialog onClose={() => setDialogOpen(false)} open={dialogOpen} />
    </>
  );
};

export default NavbarCampus;
