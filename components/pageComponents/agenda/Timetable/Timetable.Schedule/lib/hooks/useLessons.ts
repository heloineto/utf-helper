import { Interval } from 'luxon';
import { useMemo } from 'react';

const useLessons = (classes: ClassMap<ClassObject> | undefined, interval: Interval[]) => {
  const lessonsObject = useMemo(() => {
    if (!classes) return;

    const lessonsObject: CompleteLessonsObject = {};

    interval.forEach(({ start }, index) => {
      const lessons: CompleteLessons = {};
      const dateStr = start.toFormat('dd/MM/yyyy');
      const dayCode = String(index + 2);

      Object.entries(classes).forEach(([campusKey, campus]) => {
        Object.entries(campus).forEach(([courseKey, course]) => {
          Object.entries(course).forEach(([subjectKey, subject]) => {
            Object.entries(subject).forEach(([classKey, classObject]) => {
              const lesson: Lesson | undefined = classObject?.pa?.lessons?.[dateStr];
              if (!lesson) return;

              const scheduleCell: ScheduleCell | undefined =
                classObject?.scheduleCells?.[dayCode]?.[0];
              if (!scheduleCell) return;

              const completeLesson: CompleteLesson = {
                dayCode,
                scheduleCell,
                classObject: classObject,
                ...lesson,
              };

              lessons[scheduleCell.startTimeCode] = completeLesson;
            });
          });
        });
      });

      lessonsObject[dayCode] = lessons;
    });

    return lessonsObject;
  }, [classes, interval]);

  return lessonsObject;
};

export default useLessons;
