import { SettingsContext } from '@lib/context';
import { Button, ButtonProps } from '@mui/material';
import classNames from 'clsx';
import { useContext } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends ButtonProps {
  colorName?: keyof typeof twColors;
}

const PrimaryButton = ({ className, colorName, ...muiButtonProps }: Props) => {
  const color = twColors[colorName ?? 'sky'] as any;
  const { darkMode } = useContext(SettingsContext);

  return (
    <Button
      className={classNames(
        className,
        'bg-sky-100 hover:bg-sky-200 border-2 dark:border-none border-solid border-sky-400 hover:border-sky-500 text-sky-500 text-base py-2 font-semibold dark:bg-sky-700  dark:hover:bg-sky-600 dark:text-sky-300 dark:hover:text-sky-200 transition-colors duration-500'
      )}
      {...muiButtonProps}
    />
  );
};

export default PrimaryButton;
