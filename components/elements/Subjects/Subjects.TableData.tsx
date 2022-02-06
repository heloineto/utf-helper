import classNames from 'clsx';

const SubjectsTableData = ({ className, ...rest }: ComponentProps<'td'>) => {
  return (
    <td
      className={classNames('px-6 py-4 text-sm font-medium text-slate-900', className)}
      {...rest}
    />
  );
};

export default SubjectsTableData;
