import { AcademicCapIcon } from '@heroicons/react/outline';
import { UserDataContext } from '@lib/context';
import { useContext, useMemo } from 'react';

type Props = {};

const NavbarTotalHours = (props: Props) => {
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
    <div className="text-[0.8rem] h-9 font-medium gap-x-2 text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full px-3 flex items-center hover:bg-sky-400/20">
      <AcademicCapIcon className="h-[1.2rem] w-auto" />
      <span className="">{totalTime} Aulas Semanais</span>
      <svg
        width="2"
        height="2"
        fill="currentColor"
        aria-hidden="true"
        className="text-sky-600 dark:text-sky-400/70"
      >
        <circle cx="1" cy="1" r="1"></circle>
      </svg>

      <span className="">{totalTime * 15}h Total</span>
    </div>
  );
};

export default NavbarTotalHours;
