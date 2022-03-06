import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useSettings = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);
  const [direction, setDirection] = useLocalStorage<Direction>('direction', 'horizontal');

  useEffect(() => {
    if (darkMode) {
      document.querySelector('body')?.classList.add('dark');
      return;
    }

    document.querySelector('body')?.classList.remove('dark');
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode: () => setDarkMode((value) => !value),
    direction,
    setDirection,
  };
};

export default useSettings;
