import classNames from 'clsx';

type Props = { subject: Subject };

const SubjectsWeeklyLessons = ({
  subject,
  className,
}: Props & Omit<ComponentProps<'span'>, keyof Props>) => {
  const { weeklyLessons } = subject;

  // const styles = useMemo(() => {
  //   if (weeklyLessons <= 2)
  //     return 'border border-emerald-500 bg-emerald-100 dark:bg-emerald-600 text-emerald-500 dark:text-emerald-200';
  //   if (weeklyLessons <= 4)
  //     return 'border border-lime-500 bg-lime-100 dark:bg-lime-600 text-lime-500 dark:text-lime-200';
  //   if (weeklyLessons <= 9)
  //     return 'border border-amber-500 bg-amber-100 dark:bg-amber-600 text-amber-500 dark:text-amber-200';

  //   return 'border border-red-500 bg-red-100 dark:bg-red-600 text-red-500 dark:text-red-200';
  // }, [weeklyLessons]);

  return (
    <span
      className={classNames(
        className,
        'border border-slate-500 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-200 ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.8rem] font-medium'
      )}
    >
      {weeklyLessons} Aulas Semanais
    </span>
  );
};

export default SubjectsWeeklyLessons;
