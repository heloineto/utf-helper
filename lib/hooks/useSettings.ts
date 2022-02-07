import { useEffect, useState } from 'react';
import useScheduleInitialValue from './useScheduleInitialValue';

const useSettings = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [direction, setDirection] = useState<Direction>('vertical');
  const [selectedClasses, setSelectedClasses] = useState<SelectedClasses>({});

  const scheduleInitialValue = useScheduleInitialValue();
  const [schedule, setSchedule] = useState<ScheduleObject>(scheduleInitialValue);

  useEffect(() => {
    const settingsStr = localStorage.getItem('settings');
    if (!settingsStr) return;

    let settings: Settings | undefined;
    try {
      settings = JSON.parse(settingsStr);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') console.error(error);
    }

    if (!settings) return;

    settings.darkMode && setDarkMode(settings.darkMode);
    settings.direction && setDirection(settings.direction);
    settings.selectedClasses && setSelectedClasses(settings.selectedClasses);
    settings.schedule && setSchedule(settings.schedule);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'settings',
      JSON.stringify({ darkMode, direction, selectedClasses, schedule })
    );
  }, [darkMode, direction, selectedClasses, schedule]);

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body')?.classList.add('dark');
      return;
    }

    document.querySelector('body')?.classList.remove('dark');
  }, [darkMode]);

  return {
    darkMode,
    setDarkMode,
    direction,
    setDirection,
    selectedClasses,
    setSelectedClasses,
    schedule,
    setSchedule,
  };
};

export default useSettings;
