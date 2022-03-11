import classNames from 'clsx';

interface Props extends ComponentProps<'div'> {}

const Badge = ({ className, ...divProps }: Props) => {
  return (
    <div
      className={classNames(
        className,
        'whitespace-nowrap border border-slate-500 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-200 ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.8rem] font-medium'
      )}
      {...divProps}
    />
  );
};

export default Badge;
