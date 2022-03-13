import { UserDataContext } from '@lib/context';
import { GraduationCap } from 'phosphor-react';
import { useContext, useMemo } from 'react';

type Props = {};

const EnrollTopbarTotalHours = (props: Props) => {
  const { userDetails } = useContext(UserDataContext);
  const classes = userDetails?.classes;

  const totalTime = useMemo(() => {
    if (!classes) return 0;

    let total = 0;

    Object.entries(classes).forEach(([campusKey, campus]) => {
      Object.entries(campus).forEach(([courseKey, course]) => {
        Object.entries(course).forEach(([subjectKey, subject]) => {
          Object.entries(subject).forEach(([classKey, classObject]) => {
            if (!classObject?.weeklyLessons) return;

            total += classObject.weeklyLessons;
          });
        });
      });
    });

    return total;
  }, [classes]);

  return (
    <div className="text-[0.7rem] sm:text-[0.8rem] h-9 font-medium gap-x-1 sm:gap-x-2 text-slate-700 dark:text-slate-300 bg-slate-400/10 rounded-md px-1.5 sm:px-3 flex items-center">
      <GraduationCap className="h-4 w-auto hidden sm:block" weight="bold" />
      <span>{totalTime} Aulas Semanais</span>
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
