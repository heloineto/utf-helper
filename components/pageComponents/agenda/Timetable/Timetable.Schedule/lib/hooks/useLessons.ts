import { isEmpty, omit } from 'lodash';
import { Interval } from 'luxon';
import { useMemo } from 'react';

const useLessons = (
  classes: ClassMap<ClassObject> | undefined,
  weekDates: Interval[]
) => {
  const lessons = useMemo(() => {
    if (!classes) return;

    return weekDates.map(({ start }, index) => {
      const lessons: CompleteLesson[] = [];

      const dateStr = start.toFormat('dd/MM/yyyy');

      Object.entries(classes).forEach(([campusKey, campus]) => {
        Object.entries(campus).forEach(([courseKey, course]) => {
          Object.entries(course).forEach(([subjectKey, subject]) => {
            Object.entries(subject).forEach(([classKey, classObject]) => {
              const lesson: Lesson | undefined = classObject.pa.lessons?.[dateStr];

              if (lesson) {
                const completeLesson: CompleteLesson = {
                  pa: omit(classObject.pa, 'lessons'),
                  dayCode: String(index + 2),
                  scheduleCells: classObject.scheduleCells[index + 2],
                  ...lesson,
                };

                lessons.push(completeLesson);
              }
            });
          });
        });
      });

      return lessons;
    });
  }, [classes, weekDates]);

  return lessons;
};

export default useLessons;
