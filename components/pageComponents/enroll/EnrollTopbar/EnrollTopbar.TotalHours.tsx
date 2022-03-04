import { UserDataContext } from '@lib/context';
import { GraduationCap } from 'phosphor-react';
import { useContext, useMemo } from 'react';

type Props = {};

const EnrollTopbarTotalHours = (props: Props) => {
  const { selectedClasses } = useContext(UserDataContext);

  const totalTime = useMemo(() => {
    if (!selectedClasses) return 0;

    let total = 0;

    Object.values(selectedClasses).forEach((classObjects) => {
      if (!classObjects) return;

      Object.values(classObjects).forEach((classObject) => {
        if (!classObject?.weeklyLessons) return;

        total += classObject.weeklyLessons;
      });
    });
    return total;
  }, [selectedClasses]);

  return (
    <div className="text-[0.8rem] h-9 font-medium gap-x-2 text-slate-700 dark:text-slate-300 bg-slate-400/10 rounded-md px-3 flex items-center">
      <GraduationCap className="h-4 w-auto" weight="bold" />
      <span className="">{totalTime} Aulas Semanais</span>
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="text-slate-700 dark:text-slate-300/70"
      >
        <circle cx="1" cy="1" r="1"></circle>
      </svg>

      <span className="">{totalTime * 15}h Total</span>
    </div>
  );
};

export default EnrollTopbarTotalHours;
