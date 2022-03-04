import classNames from 'clsx';

interface Props extends ComponentProps<'div'> {}

const Topbar = ({ className, ...divProps }: Props) => {
  return (
    <div
      className={classNames(
        className,
        'w-full flex-shrink-0 h-12 px-5 bg-slate-50 dark:bg-slate-900/50 flex flex-col sm:flex-row justify-between shadow-sm lg:border-b lg:pb-px lg:border-slate-900/10 dark:border-slate-50/[0.06]'
      )}
      {...divProps}
    />
  );
};

export default Topbar;
