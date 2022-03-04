import { GoogleLogomark } from '@components/decoration/logos/google';
import { Button, ButtonProps, Tooltip } from '@mui/material';
import classNames from 'clsx';
import { GoogleChromeLogo, GoogleLogo } from 'phosphor-react';

interface Props extends ButtonProps {}

const NavbarGoogleSignIn = ({ className, ...muiButtonProps }: Props) => {
  return (
    <Tooltip
      title="Entre com o google para poder acessar seus dados em qualquer dispositivo."
      arrow
    >
      <Button
        size="small"
        className={classNames(
          className,
          'bg-transparent hover:bg-sky-100 border-2 dark:border-none border-solid border-sky-400 hover:border-sky-500 text-sky-400 text-base py-2 font-semibold w-auto dark:bg-sky-900 dark:highlight-white/20 dark:hover:bg-sky-400 dark:text-sky-300 dark:hover:text-sky-900'
        )}
        {...muiButtonProps}
      >
        Entar
        <GoogleLogomark className="ml-2" />
      </Button>
    </Tooltip>
  );
};

export default NavbarGoogleSignIn;
