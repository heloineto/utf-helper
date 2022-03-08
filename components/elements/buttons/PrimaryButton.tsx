import { Button, ButtonProps } from '@mui/material';
import classNames from 'clsx';

interface Props extends ButtonProps {}

const PrimaryButton = ({ className, ...muiButtonProps }: Props) => {
  return (
    <Button
      className={classNames(
        className,
        'bg-sky-100 hover:bg-sky-200 border-2 dark:border-none border-solid border-sky-400 hover:border-sky-500 text-sky-500 text-base py-2 font-semibold dark:bg-sky-900  dark:hover:bg-sky-600 dark:text-sky-300 dark:hover:text-sky-200 transition-colors duration-500'
      )}
      {...muiButtonProps}
    />
  );
};

export default PrimaryButton;
