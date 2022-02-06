import classNames from 'clsx';

const SubjectsTableData = ({ className, ...rest }: ComponentProps<'td'>) => {
  return (
    <td
      className={classNames(
        'px-4 py-2 text-sm font-medium text-slate-900 dark:text-slate-200',
        className
      )}
      {...rest}
    />
  );
};

export default SubjectsTableData;
