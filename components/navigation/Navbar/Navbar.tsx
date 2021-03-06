import classNames from 'clsx';
import NavbarThemeSwitch from './Navbar.ThemeSwitch';
import NavbarCampus from './Navbar.Campus';
import NavbarContributeButton from './Navbar.ContributeButton';
import NavbarItems from './Navbar.Items';
import NavbarGoogleSignIn from './Navbar.GoogleSignIn';
import { useContext, useState } from 'react';
import { UserDataContext } from '@lib/context';
import NavbarAvatar from './Navbar.Avatar';
import { IconButton, Skeleton, useMediaQuery, useTheme } from '@mui/material';
import { List } from 'phosphor-react';
import Sidebar from '../Sidebar';

interface Props extends ComponentProps<'header'> {}

const Navbar = ({ className }: Props) => {
  const { user, userDetails, loading } = useContext(UserDataContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('sm'));

  return (
    <header
      className={classNames(
        className,
        'w-full h-14 sm:h-28 lg:h-14 px-5 bg-white dark:bg-slate-900 flex flex-col lg:flex-row justify-between shadow-sm lg:border-b lg:pb-px lg:border-slate-900/10 dark:border-slate-50/[0.06]'
      )}
    >
      <div className="h-full w-1/3 hidden xl:flex items-center">
        <NavbarContributeButton />
      </div>
      <div className="h-full w-full xl:w-1/3 hidden sm:flex items-center justify-center lg:justify-start xl:justify-center">
        <NavbarItems />
      </div>
      <div className="h-full w-full xl:w-1/3 flex items-center justify-end gap-x-2">
        <div className="w-full flex lg:justify-end">
          {mobile && (
            <>
              <IconButton
                className="text-sky-600 h-11"
                onClick={() => setSidebarOpen(true)}
                edge="start"
              >
                <List className="h-7 w-auto" />
              </IconButton>
              <Sidebar
                open={sidebarOpen}
                onOpen={() => setSidebarOpen(true)}
                onClose={() => setSidebarOpen(false)}
              />
            </>
          )}
          <NavbarCampus className="text-left lg:text-right" />
        </div>
        {loading ? (
          <Skeleton className="mr-2.5 h-10 w-10 flex-shrink-0" variant="circular" />
        ) : userDetails && !user?.isAnonymous ? (
          <NavbarAvatar className="mr-2.5" userDetails={userDetails} />
        ) : (
          <NavbarGoogleSignIn className="mr-2.5" />
        )}
        <NavbarThemeSwitch />
      </div>
    </header>
  );
};

export default Navbar;
