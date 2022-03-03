import { Button, ButtonProps } from '@mui/material';
import classNames from 'clsx';

interface Props extends ButtonProps {}

const SecondaryButton = ({ className, ...muiButtonProps }: Props) => {
  return (
    <Button
      className={classNames(className, '')}
      variant="outlined"
      {...muiButtonProps}
    />
  );
};

export default SecondaryButton;
