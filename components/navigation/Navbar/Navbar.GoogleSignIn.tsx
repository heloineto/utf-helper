import { GoogleLogomark } from '@components/decoration/logos/google';
import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import useSignInWithGoogle from '@lib/database/user/useSignInWithGoogle';
import { Button, ButtonProps, Tooltip } from '@mui/material';
import classNames from 'clsx';

interface Props extends ButtonProps {}

const NavbarGoogleSignIn = ({ className, ...muiButtonProps }: Props) => {
  const signInWithGoogle = useSignInWithGoogle();

  return (
    <Tooltip title="Entre com o google salvar seus dados" arrow>
      <PrimaryButton
        size="small"
        className={classNames(className, 'w-40')}
        onClick={signInWithGoogle}
        {...muiButtonProps}
      >
        Entar
        <GoogleLogomark className="ml-2" />
      </PrimaryButton>
    </Tooltip>
  );
};

export default NavbarGoogleSignIn;
