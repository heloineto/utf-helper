import { GoogleLogomark } from '@components/decoration/logos/google';
import PrimaryButton from '@components/elements/buttons/PrimaryButton';
import { SettingsContext } from '@lib/context';
import { auth, googleAuthProvider } from '@lib/firebase';
import { useSignInWithGoogle } from '@lib/hooks';
import { ButtonProps, Tooltip } from '@mui/material';
import classNames from 'clsx';
import { signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';

interface Props extends ButtonProps {}

const NavbarGoogleSignIn = ({ className, ...muiButtonProps }: Props) => {
  const signInWithGoogle = useSignInWithGoogle();
  const { darkMode } = useContext(SettingsContext);

  return (
    <Tooltip title="Entre com o Google Salvar seus Dados" arrow>
      <div className={classNames(className, 'w-40')}>
        <PrimaryButton size="small" onClick={signInWithGoogle} {...muiButtonProps}>
          Entar
          <GoogleLogomark
            className="ml-2"
            style={{
              filter: darkMode ? 'drop-shadow(0 0 2px rgba(0,0,0,0.25))' : undefined,
            }}
          />
        </PrimaryButton>
      </div>
    </Tooltip>
  );
};

export default NavbarGoogleSignIn;
