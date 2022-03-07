import { isEmpty, omit } from 'lodash';
import { Interval } from 'luxon';
import { useMemo } from 'react';

const usePas = (classes: ClassMap<ClassObject> | undefined, weekDates: Interval[]) => {
  const pas = useMemo(() => {
    if (!classes) return;

    return weekDates.map(({ start }) => {
      const pas: PA[] = [];

      const jsDate = start.toJSDate();

      Object.entries(classes).forEach(([campusKey, campus]) => {
        Object.entries(campus).forEach(([courseKey, course]) => {
          Object.entries(course).forEach(([subjectKey, subject]) => {
            Object.entries(subject).forEach(([classKey, classObject]) => {
              const lessons: Lesson[] = [];

              classObject.pa.lessons.forEach((lesson) => {
                const lessonDate = new Date(lesson.date);
                if (!lessonDate) return;

                if (
                  lessonDate.getDate() === jsDate.getDate() &&
                  Math.abs(lessonDate.getTime() - jsDate.getTime()) < 24 * 60 * 60 * 1000
                ) {
                  lessons.push(lesson);
                }
              });

              if (!isEmpty(lessons)) {
                const pa: PA = omit(classObject.pa, 'lessons') as any;
                pa.lessons = lessons;
                pas.push(pa);
              }
            });
          });
        });
      });

      return pas;
    });
  }, [classes, weekDates]);

  return pas;
};

export default usePas;
