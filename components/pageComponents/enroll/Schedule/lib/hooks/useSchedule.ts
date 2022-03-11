import { UserDataContext } from '@lib/context';
import { useContext, useMemo } from 'react';

const useSchedule = () => {
  const { userDetails } = useContext(UserDataContext);
  const classes = userDetails?.classes;

  const schedule = useMemo(() => {
    if (!classes) return;

    const schedule: any = {};

    Object.entries(classes).forEach(([campusKey, campus]) => {
      Object.entries(campus).forEach(([courseKey, course]) => {
        Object.entries(course).forEach(([subjectKey, subject]) => {
          Object.entries(subject).forEach(([classKey, classObject]) => {
            if (!classObject?.scheduleCells) return;

            Object.entries(classObject.scheduleCells).forEach(([dayCode, cellInfo]) => {
              cellInfo.forEach(({ startTimeCode, length }) => {
                if (!schedule?.[startTimeCode]) {
                  schedule[startTimeCode] = {};
                }

                schedule[startTimeCode][dayCode] = { classObject, length };
              });
            });
          });
        });
      });
    });

    return schedule;
  }, [classes]);

  return schedule;
};

export default useSchedule;
