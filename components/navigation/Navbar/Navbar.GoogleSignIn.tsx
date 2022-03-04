import { GoogleLogomark } from '@components/decoration/logos/google';
import { Button, ButtonProps, Tooltip } from '@mui/material';
import classNames from 'clsx';
import useSignInWithGoogle from './lib/hooks/useSignInWithGoogle';

interface Props extends ButtonProps {}

const NavbarGoogleSignIn = ({ className, ...muiButtonProps }: Props) => {
  const signInWithGoogle = useSignInWithGoogle();

  return (
    <Tooltip
      title="Entre com o google para poder acessar seus dados em qualquer dispositivo."
      arrow
    >
      <Button
        size="small"
        className={classNames(
          className,
          'w-40 bg-transparent hover:bg-sky-100 border-2 dark:border-none border-solid border-sky-400 hover:border-sky-500 text-sky-400 text-base py-2 font-semibold dark:bg-sky-900 dark:highlight-white/20 dark:hover:bg-sky-400 dark:text-sky-300 dark:hover:text-sky-900'
        )}
        onClick={signInWithGoogle}
        {...muiButtonProps}
      >
        Entar
        <GoogleLogomark className="ml-2" />
      </Button>
    </Tooltip>
  );
};

export default NavbarGoogleSignIn;
