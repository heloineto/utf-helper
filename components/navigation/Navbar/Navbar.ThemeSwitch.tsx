import { SunIcon } from '@heroicons/react/solid';
import Switch from '@mui/material/Switch';
import { useContext, useState } from 'react';
import classNames from 'clsx';
import { SettingsContext } from '@lib/context';

type Props = {};

const NavbarThemeSwitch = (props: Props) => {
  const { theme, setTheme } = useContext(SettingsContext);

  return (
    <div className="flex">
      <button className="relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-cyan-500 dark:bg-slate-700 text-cyan-200 dark:text-slate-400 focus-visible:ring-cyan-600 dark:focus-visible:ring-slate-500">
        <SunIcon className="h-6 w-6 transform transition-transform scale-0 dark:scale-100 duration-500 dark:duration-300" />
        <MoonIcon className="h-6 w-6 ml-3.5 transform transition-transform scale-100 dark:scale-0 duration-300 dark:duration-500" />
        <span
          className="absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform dark:translate-x-[2.625rem]"
          onClick={() => setTheme?.((value) => (value === 'dark' ? 'light' : 'dark'))}
        >
          <SunIcon className="h-6 w-6 flex-none transition duration-500 transform text-cyan-500 opacity-100 dark:opacity-0 scale-100 dark:scale-0" />
          <MoonIcon className="h-6 w-6 flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 dark:opacity-100 scale-0 dark:scale-100" />
        </span>
      </button>
    </div>
  );
};

const MoonIcon = (props: ComponentProps<'svg'>) => (
  <svg fill="none" {...props}>
    <path
      d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NavbarThemeSwitch;
