import classNames from 'clsx';
import NavbarThemeSwitch from './Navbar.ThemeSwitch';
import NavbarCampusAndCourse from './Navbar.CampusAndCourse';
import NavbarContributeButton from './Navbar.ContributeButton';
import NavbarItems from './Navbar.Items';
import NavbarGoogleSignIn from './Navbar.GoogleSignIn';

interface Props extends ComponentProps<'header'> {}

const Navbar = ({ className }: Props) => {
  return (
    <header
      className={classNames(
        className,
        'w-full h-28 lg:h-14 px-5 bg-white dark:bg-slate-900 flex flex-col lg:flex-row justify-between shadow-sm lg:border-b lg:pb-px lg:border-slate-900/10 dark:border-slate-50/[0.06]'
      )}
    >
      <div className="h-full w-1/3 hidden xl:flex items-center">
        <NavbarContributeButton />
      </div>
      <div className="h-full w-full xl:w-1/3 flex items-center justify-center lg:justify-start xl:justify-center">
        <NavbarItems />
      </div>
      <div className="h-full w-full xl:w-1/3 flex items-center justify-end gap-x-2">
        <div className="w-full flex lg:justify-end">
          <NavbarCampusAndCourse className="text-left lg:text-right" />
        </div>
        <NavbarGoogleSignIn className="mr-2.5" />
        <NavbarThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
