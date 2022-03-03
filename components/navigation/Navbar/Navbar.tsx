import classNames from 'clsx';
import NavbarThemeSwitch from './Navbar.ThemeSwitch';
import NavbarDirectionButton from './Navbar.DirectionButton';
import NavbarResetButton from './Navbar.ResetButton';
import NavbarCampusAndCourse from './Navbar.CampusAndCourse';
import NavbarTotalHours from './Navbar.TotalHours';
import NavbarReviewButton from './Navbar.ReviewButton';

interface Props extends ComponentProps<'header'> {}

const Navbar = ({ className }: Props) => {
  return (
    <header
      className={classNames(
        className,
        'w-full h-28 sm:h-14 px-5 bg-white dark:bg-slate-900 flex flex-col sm:flex-row justify-between shadow-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]'
      )}
    >
      <div className="h-full w-1/3 hidden xl:flex items-center">
        {/* <NavbarContributeButton /> */}
        <NavbarTotalHours />
      </div>
      <div className="h-full w-full xl:w-1/3 flex items-center">
        <NavbarCampusAndCourse />
      </div>
      <div className="h-full w-full xl:w-1/3 flex items-center justify-between flex-row-reverse sm:flex-row sm:justify-end gap-x-2">
        <NavbarThemeSwitch />
        <NavbarReviewButton />
        <NavbarDirectionButton />
        <NavbarResetButton />
      </div>
    </header>
  );
};

export default Navbar;
