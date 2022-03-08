import { Button, ButtonProps } from '@mui/material';
import classNames from 'clsx';

interface Props extends ButtonProps {}

const SecondaryButton = ({ className, ...muiButtonProps }: Props) => {
  return (
    <Button
      className={classNames(
        className,
        ' border-sky-400 hover:border-sky-500 text-sky-500 text-base py-2 font-semibold dark:text-sky-400 dark:hover:text-sky-300 transition-colors duration-500'
      )}
      variant="outlined"
      {...muiButtonProps}
    />
  );
};

export default SecondaryButton;
