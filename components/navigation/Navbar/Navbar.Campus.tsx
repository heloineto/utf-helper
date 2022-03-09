import { Skeleton, Tooltip } from '@mui/material';
import { NotePencil } from 'phosphor-react';
import { useContext, useState } from 'react';
import classNames from 'clsx';
import { UserDataContext } from '@lib/context';
import CustomDialog from '@components/elements/modals/CustomDialog';
import CampusForm from '@components/elements/forms/CampusForm';
import { useCampuses } from '@lib/hooks';

interface Props extends ComponentProps<'button'> {}

const NavbarCampus = ({ className, ...buttonProps }: Props) => {
  const [campusDialogOpen, setCampusDialogOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const { userDetails, loading } = useContext(UserDataContext);
  const campuses = useCampuses();

  const campus = userDetails?.campus;
  const course = userDetails?.course;

  if (loading) {
    return (
      <div className="px-2.5 flex flex-col items-end">
        <Skeleton className="mr-2.5 h-5 w-28 rounded-md flex-shrink-0" />
        <Skeleton className="mr-2.5 h-5 w-40 rounded-md flex-shrink-0" />
      </div>
    );
  }

  return (
    <>
      <Tooltip title="Selecionar Câmpus e Curso" arrow>
        <button
          className={classNames(className, 'rounded-md px-2.5 relative')}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setCampusDialogOpen(true)}
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
          <p className="text-sky-500 dark:text-sky-400 text-sm font-medium">
            {campus ? campuses[campus].label : 'Selecione um Campus'}
          </p>
          <p className="text-slate-700 dark:text-slate-500 text-sm font-medium">
            {campus && course
              ? campuses[campus].courses[course].label
              : 'Selecione um Curso'}
          </p>
        </button>
      </Tooltip>

      <CustomDialog onClose={() => setCampusDialogOpen(false)} open={campusDialogOpen}>
        <CampusForm afterSubmit={() => setCampusDialogOpen(false)} />
      </CustomDialog>
    </>
  );
};

export default NavbarCampus;
