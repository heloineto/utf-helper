import { useState } from 'react';

const useUserData = () => {
  const [selectedClasses, setSelectedClasses] = useState<SelectedClasses>({});
  const [campus, setCampus] = useState(null);
  const [course, setCourse] = useState(null);

  const [schedule, setSchedule] = useState<ScheduleObject>({
    M1: {
      start: '07h30',
      end: '08h20',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    M2: {
      start: '08h20',
      end: '09h10',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    M3: {
      start: '09h10',
      end: '10h00',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    M4: {
      start: '10h20',
      end: '11h10',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    M5: {
      start: '11h10',
      end: '12h00',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    M6: {
      start: '12h00',
      end: '12h50',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    T1: {
      start: '13h00',
      end: '13h50',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    T2: {
      start: '13h50',
      end: '14h40',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    T3: {
      start: '14h40',
      end: '15h30',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    T4: {
      start: '15h50',
      end: '16h40',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    T5: {
      start: '16h40',
      end: '17h30',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    T6: {
      start: '17h30',
      end: '18h20',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    N1: {
      start: '18h40',
      end: '19h30',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    N2: {
      start: '19h30',
      end: '20h20',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    N3: {
      start: '20h20',
      end: '21h10',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    N4: {
      start: '21h20',
      end: '22h10',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
    N5: {
      start: '22h10',
      end: '23h00',
      days: { 2: null, 3: null, 4: null, 5: null, 6: null, 7: null },
    },
  });
};

export default useUserData;
