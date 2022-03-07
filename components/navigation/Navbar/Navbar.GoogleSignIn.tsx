import { GoogleLogomark } from '@components/decoration/logos/google';
import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import useSignInWithGoogle from '@lib/database/user/useSignInWithGoogle';
import { ButtonProps, Tooltip } from '@mui/material';
import classNames from 'clsx';

interface Props extends ButtonProps {}

const NavbarGoogleSignIn = ({ className, ...muiButtonProps }: Props) => {
  const signInWithGoogle = useSignInWithGoogle();

  return (
    <Tooltip title="Entre com o Google Salvar seus Dados" arrow>
      <div className={classNames(className, 'w-40')}>
        <PrimaryButton size="small" onClick={signInWithGoogle} {...muiButtonProps}>
          Entar
          <GoogleLogomark className="ml-2" />
        </PrimaryButton>
      </div>
    </Tooltip>
  );
};

export default NavbarGoogleSignIn;
