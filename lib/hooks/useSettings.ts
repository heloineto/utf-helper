import { useEffect, useState } from 'react';

const useSettings = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [direction, setDirection] = useState<Direction>('vertical');
  const [selectedClasses, setSelectedClasses] = useState<SelectedClasses>();

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

    setTheme(settings.theme);
    setDirection(settings.direction);
    setSelectedClasses(settings.selectedClasses);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'settings',
      JSON.stringify({ theme, direction, selectedClasses })
    );
  }, [theme, direction, selectedClasses]);

  return {
    theme,
    setTheme,
    direction,
    setDirection,
    selectedClasses,
    setSelectedClasses,
  };
};

export default useSettings;
