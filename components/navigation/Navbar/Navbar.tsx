import classNames from 'clsx';
import { GitHubIcon } from '@components/decoration/icons/outlined';
import { IconButton, Tooltip } from '@mui/material';
import { PrinterIcon } from '@heroicons/react/outline';
import NavbarThemeSwitch from './Navbar.ThemeSwitch';
import NavbarDirectionButton from './Navbar.DirectionButton';

interface Props {}

const Navbar = ({ className }: Props & ComponentProps<'header'>) => {
  return (
    <header
      className={classNames(
        className,
        'w-full h-14 px-5 bg-white dark:bg-slate-900 flex justify-between shadow-sm lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06]'
      )}
    >
      <div className="h-full flex items-center">
        <a
          className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20"
          target="_blank"
          href="https://github.com/heloineto/utf-helper"
          rel="noreferrer"
        >
          <GitHubIcon className="h-4 w-auto" />
          <svg
            width="2"
            height="2"
            fill="currentColor"
            aria-hidden="true"
            className="ml-2 text-sky-600 dark:text-sky-400/70"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
          <span className="ml-2">Contribua para o projeto no Github!</span>
          <svg
            width="3"
            height="6"
            className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
            aria-hidden="true"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="h-full flex items-center gap-x-1">
        <NavbarThemeSwitch />
        <NavbarDirectionButton />
        <Tooltip title="Imprimir Cronograma" arrow>
          <IconButton className="group">
            <PrinterIcon className="h-5 w-auto group-hover:text-slate-600 dark:group-hover:text-slate-300 dark:text-slate-400" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};

export default Navbar;
