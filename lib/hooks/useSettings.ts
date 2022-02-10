import { useEffect, useState } from 'react';
import { useDarkMode, useLocalStorage } from 'usehooks-ts';

const useSettings = () => {
  const { isDarkMode: darkMode, toggle: toggleDarkMode } = useDarkMode(true);
  const [direction, setDirection] = useLocalStorage<Direction>('direction', 'vertical');

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body')?.classList.add('dark');
      return;
    }

    document.querySelector('body')?.classList.remove('dark');
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode,
    direction,
    setDirection,
  };
};

export default useSettings;
