import classNames from 'clsx';
import { GitHubIcon } from '@components/decoration/icons/outlined';
import { IconButton, Tooltip } from '@mui/material';
import { PrinterIcon } from '@heroicons/react/outline';
import NavbarThemeSwitch from './Navbar.ThemeSwitch';
import NavbarDirectionButton from './Navbar.DirectionButton';
import NavbarResetButton from './Navbar.ResetButton';
import { ChevronRightIcon } from '@heroicons/react/solid';

type Props = {};

const NavbarContributeButton = (props: Props) => {
  return (
    <a
      className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full px-3 hidden xl:flex items-center hover:bg-sky-400/20"
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
      <ChevronRightIcon className="w-4 h-8 ml-3 overflow-visible text-sky-300 dark:text-sky-400" />
    </a>
  );
};

export default NavbarContributeButton;
