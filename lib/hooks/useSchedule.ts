import { useEffect, useMemo, useState } from 'react';

const useSchedule = (selectedClasses: SelectedClasses) => {
  const initialValue: ScheduleObject = useMemo(
    () => ({
      M1: {
        start: '07h30',
        end: '08h20',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      M2: {
        start: '08h20',
        end: '09h10',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      M3: {
        start: '09h10',
        end: '10h00',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      M4: {
        start: '10h20',
        end: '11h10',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      M5: {
        start: '11h10',
        end: '12h00',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      M6: {
        start: '12h00',
        end: '12h50',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      T1: {
        start: '13h00',
        end: '13h50',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      T2: {
        start: '13h50',
        end: '14h40',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      T3: {
        start: '14h40',
        end: '15h30',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      T4: {
        start: '15h50',
        end: '16h40',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      T5: {
        start: '16h40',
        end: '17h30',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      T6: {
        start: '17h30',
        end: '18h20',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      N1: {
        start: '18h40',
        end: '19h30',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      N2: {
        start: '19h30',
        end: '20h20',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      N3: {
        start: '20h20',
        end: '21h10',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      N4: {
        start: '21h20',
        end: '22h10',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
      N5: {
        start: '22h10',
        end: '23h00',
        days: { 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {} },
      },
    }),
    []
  );

  const [schedule, setSchedule] = useState<ScheduleObject>(initialValue);

  useEffect(() => {
    if (!selectedClasses) return;

    const newValue = { ...initialValue };

    Object.values(selectedClasses).forEach((classesObject) => {
      if (!classesObject) return;
      Object.values(classesObject).forEach((classObject) => {
        if (!classObject) return;

        classObject.schedule.forEach(({ dayTimeCode }) => {
          const [dayCode, shiftCode, numberCode] = dayTimeCode.split('');

          if (!dayCode || !shiftCode || !numberCode) return;

          newValue[`${shiftCode}${numberCode}`].days[dayCode].classObject = classObject;
        });
      });
    });

    setSchedule(newValue);
  }, [selectedClasses]);

  return { schedule, setSchedule };
};

export default useSchedule;
