import classNames from 'clsx';

type Props = { subject: Subject };

const SubjectsWeeklyLessons = ({
  subject,
  className,
}: Props & Omit<ComponentProps<'span'>, keyof Props>) => {
  const { weeklyLessons } = subject;

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
