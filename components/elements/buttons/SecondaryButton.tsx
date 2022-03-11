import { SettingsContext } from '@lib/context';
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import classNames from 'clsx';
import { useContext, useMemo } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends ButtonProps {
  colorName?: keyof typeof twColors;
}

const SecondaryButton = ({ className, colorName = 'sky', ...muiButtonProps }: Props) => {
  const color = twColors[colorName] as any;
  const { darkMode } = useContext(SettingsContext);

  const StyledButton = useMemo(
    () =>
      styled(Button)(() => ({
        color: color[darkMode ? 400 : 500],
        borderColor: color[400],
        '&:hover': {
          borderColor: color[500],
          color: color[darkMode ? 300 : 600],
        },
      })),
    [darkMode, color]
  );

  return (
    <StyledButton
      className={classNames(
        className,
        'text-base py-2 font-semibold transition-colors duration-500'
      )}
      variant="outlined"
      {...muiButtonProps}
    />
  );
};

export default SecondaryButton;
