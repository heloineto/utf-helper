import { useEffect, useState } from 'react';

const useSettings = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [direction, setDirection] = useState<Direction>('vertical');

  useEffect(() => {
    const settingsStr = localStorage.getItem('settings');
    if (!settingsStr) return;

    let settings;
    try {
      settings = JSON.parse(settingsStr);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') console.error(error);
    }

    if (!settings) return;

    setTheme(settings.theme);
    setDirection(settings.direction);
  }, []);

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify({ theme, direction }));
  }, [theme, direction]);

  return { theme, setTheme, direction, setDirection };
};

export default useSettings;
