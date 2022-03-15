import { CaretRight, GithubLogo } from 'phosphor-react';

type Props = {};

const NavbarContributeButton = (props: Props) => {
  return (
    <a
      className="group h-7 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full px-3 flex items-center hover:bg-sky-400/20"
      target="_blank"
      href="https://github.com/heloineto/utf-helper"
      rel="noopener noreferrer"
    >
      <GithubLogo className="h-4 w-auto" weight="bold" />
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="ml-2 text-sky-600 dark:text-sky-400/70"
      >
        <circle cx="1" cy="1" r="1"></circle>
      </svg>
      <span className="ml-2">@heloineto/utf-helper</span>
      <CaretRight
        className="group-hover:ml-4 transition-all h-3 w-auto ml-3 overflow-visible text-sky-300 dark:text-sky-400"
        weight="bold"
      />
    </a>
  );
};

export default NavbarContributeButton;
