import classNames from 'clsx';
import { GitHubIcon } from '@components/decoration/icons/outlined';
import { IconButton, Tooltip } from '@mui/material';
import { PrinterIcon, SunIcon, SwitchVerticalIcon } from '@heroicons/react/outline';

interface Props {}

const Navbar = ({ className }: Props & ComponentProps<'header'>) => {
  return (
    <header
      className={classNames(
        className,
        'w-full h-14 px-5 flex justify-between shadow-sm transition-colors duration-500 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 dark:bg-transparent'
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
            ></path>
          </svg>
        </a>
      </div>
      <div className="h-full flex items-center gap-x-1">
        <Tooltip title="Escolher Tema" arrow>
          <IconButton className="group">
            <SunIcon className="h-5 w-auto group-hover:text-gray-600" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Mudar para Layout Horizontal" arrow>
          <IconButton className="group">
            <SwitchVerticalIcon className="h-5 w-auto group-hover:text-gray-600" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Imprimir Cronograma" arrow>
          <IconButton className="group">
            <PrinterIcon className="h-5 w-auto group-hover:text-gray-600" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};

export default Navbar;
