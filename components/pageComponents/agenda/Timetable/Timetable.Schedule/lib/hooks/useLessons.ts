import { isEmpty, omit } from 'lodash';
import { Interval } from 'luxon';
import { useMemo } from 'react';

const useLessons = (classes: ClassMap<ClassObject> | undefined, interval: Interval[]) => {
  const lessons = useMemo(() => {
    if (!classes) return;

    return interval.map(({ start }, index) => {
      const lessons: CompleteLessons = {};

      const dateStr = start.toFormat('dd/MM/yyyy');

      Object.entries(classes).forEach(([campusKey, campus]) => {
        Object.entries(campus).forEach(([courseKey, course]) => {
          Object.entries(course).forEach(([subjectKey, subject]) => {
            Object.entries(subject).forEach(([classKey, classObject]) => {
              const lesson: Lesson | undefined = classObject.pa.lessons?.[dateStr];
              if (!lesson) return;

              const scheduleCell: ScheduleCell | undefined =
                classObject?.scheduleCells?.[index + 2]?.[0];
              if (!scheduleCell) return;

              const completeLesson: CompleteLesson = {
                dayCode: String(index + 2),
                scheduleCells: classObject.scheduleCells[index + 2],
                classObject: classObject,
                ...lesson,
              };

              lessons[scheduleCell.startTimeCode] = completeLesson;
            });
          });
        });
      });

      return lessons;
    });
  }, [classes, interval]);

  return lessons;
};

export default useLessons;
