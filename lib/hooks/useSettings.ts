import { useEffect } from 'react';
import { useDarkMode, useLocalStorage, useWindowSize } from 'usehooks-ts';

const useSettings = () => {
  const { width, height } = useWindowSize();
  const { isDarkMode: darkMode, toggle: toggleDarkMode } = useDarkMode(true);
  const [direction, setDirection] = useLocalStorage<Direction>(
    'direction',
    width > height ? 'horizontal' : 'vertical'
  );

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
