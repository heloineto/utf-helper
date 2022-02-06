import classNames from 'clsx';

const SubjectsTableHeader = ({ className, ...rest }: ComponentProps<'th'>) => {
  return (
    <th
      className={classNames(
        'text-left px-6 py-1 text-xs font-medium text-slate-500 uppercase tracking-wider',
        className
      )}
      {...rest}
    />
  );
};

export default SubjectsTableHeader;
