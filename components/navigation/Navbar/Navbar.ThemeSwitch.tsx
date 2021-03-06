import { useContext } from 'react';
import { SettingsContext } from '@lib/context';
import { Tooltip } from '@mui/material';
import { MoonStars, Sun } from 'phosphor-react';

type Props = {};

const NavbarThemeSwitch = (props: Props) => {
  const { darkMode, toggleDarkMode } = useContext(SettingsContext);

  return (
    <Tooltip title={`Mudar para o Tema ${darkMode ? 'Claro' : 'Escuro'}`} arrow>
      <button
        className="relative inline-flex items-center py-2 px-2 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none bg-sky-500 dark:bg-slate-700 text-sky-200 dark:text-slate-400 focus-visible:ring-sky-600 dark:focus-visible:ring-slate-500"
        onClick={toggleDarkMode}
      >
        <Sun
          className="h-6 w-6 transform transition-transform scale-0 dark:scale-100 duration-500 dark:duration-300"
          weight="bold"
        />
        <MoonStars
          className="h-6 w-6 ml-3.5 transform transition-transform scale-100 dark:scale-0 duration-300 dark:duration-500"
          weight="bold"
        />
        <span className="absolute top-1/2 -translate-y-1/2 left-1 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform dark:translate-x-[2.3rem]">
          <Sun
            className="h-6 w-6 flex-none transition duration-500 transform text-sky-500 opacity-100 dark:opacity-0 scale-100 dark:scale-0"
            weight="fill"
          />
          <MoonStars
            className="h-6 w-6 flex-none -ml-6 transition duration-500 transform text-slate-700 opacity-0 dark:opacity-100 scale-0 dark:scale-100"
            weight="fill"
          />
        </span>
      </button>
    </Tooltip>
  );
};

export default NavbarThemeSwitch;
