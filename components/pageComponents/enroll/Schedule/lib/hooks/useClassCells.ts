import { UserDataContext } from '@lib/context';
import { useContext, useMemo } from 'react';

const useClassCells = () => {
  const { userDetails } = useContext(UserDataContext);
  const classes = userDetails?.classes;

  const classCells = useMemo(() => {
    if (!classes) return;

    const classCells: { [k: string]: { [k: string]: ClassCell } } = {};

    Object.entries(classes).forEach(([campusKey, campus]) => {
      Object.entries(campus).forEach(([courseKey, course]) => {
        Object.entries(course).forEach(([subjectKey, subject]) => {
          Object.entries(subject).forEach(([classKey, classObject]) => {
            if (!classObject?.scheduleCells) return;

            Object.entries(classObject.scheduleCells).forEach(([dayCode, cellInfo]) => {
              cellInfo.forEach(({ startTimeCode, length }) => {
                if (!classCells?.[startTimeCode]) {
                  classCells[startTimeCode] = {};
                }

                classCells[startTimeCode][dayCode] = {
                  classObject,
                  length,
                  campus: campusKey,
                  course: courseKey,
                };
              });
            });
          });
        });
      });
    });

    return classCells;
  }, [classes]);

  return classCells;
};

export default useClassCells;
