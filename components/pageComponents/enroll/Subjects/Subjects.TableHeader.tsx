import { Tooltip } from '@mui/material';
import classNames from 'clsx';

interface Props extends ComponentProps<'th'> {
  title: string;
}

const SubjectsTableHeader = ({ className, title, ...rest }: Props) => {
  return (
    <Tooltip title={title} arrow>
      <th
        className={classNames(
          'text-left px-6 py-1 whitespace-nowrap text-ellipsis',
          className
        )}
        {...rest}
      />
    </Tooltip>
  );
};

export default SubjectsTableHeader;
