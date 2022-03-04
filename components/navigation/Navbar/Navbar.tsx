import classNames from 'clsx';
import NavbarThemeSwitch from './Navbar.ThemeSwitch';
import NavbarCampusAndCourse from './Navbar.CampusAndCourse';
import NavbarContributeButton from './Navbar.ContributeButton';

interface Props extends ComponentProps<'header'> {}

const Navbar = ({ className }: Props) => {
  return (
    <header
      className={classNames(
        className,
        'w-full h-28 sm:h-14 px-5 bg-white dark:bg-slate-900 flex flex-col sm:flex-row justify-between shadow-sm lg:border-b lg:pb-px lg:border-slate-900/10 dark:border-slate-50/[0.06]'
      )}
    >
      <div className="h-full w-1/3 hidden xl:flex items-center">
        <NavbarContributeButton />
      </div>
      <div className="h-full w-full xl:w-1/3 flex items-center">
        <NavbarCampusAndCourse />
      </div>
      <div className="h-full w-full xl:w-1/3 flex items-center justify-between flex-row-reverse sm:flex-row sm:justify-end gap-x-2">
        <NavbarThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
