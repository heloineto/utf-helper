import { styled } from '@mui/material/styles';
import { SettingsContext } from '@lib/context';
import { Button, ButtonProps } from '@mui/material';
import classNames from 'clsx';
import { useContext, useMemo } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends ButtonProps {
  colorName?: keyof typeof twColors;
}

const PrimaryButton = ({ className, colorName = 'sky', ...muiButtonProps }: Props) => {
  const color = twColors[colorName] as any;
  const { darkMode } = useContext(SettingsContext);

  const StyledButton = useMemo(
    () =>
      styled(Button)(() => ({
        backgroundColor: `${color[darkMode ? 700 : 100]} !important`,
        color: color[darkMode ? 200 : 500],
        borderColor: color[400],
        '&:hover': {
          backgroundColor: `${color[darkMode ? 600 : 200]} !important`,
          borderColor: color[500],
          color: color[darkMode ? 100 : 600],
        },
      })),
    [darkMode, color]
  );

  return (
    <StyledButton
      className={classNames(
        className,
        'border-2 dark:border-none border-solid text-base py-2 font-semibold transition-colors duration-500'
      )}
      variant="contained"
      {...muiButtonProps}
    />
  );
};

export default PrimaryButton;
