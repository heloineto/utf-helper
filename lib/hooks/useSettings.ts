import { useState } from 'react';

const useSettings = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [direction, setDirection] = useState<Direction>('vertical');

  return { theme, setTheme, direction, setDirection };
};

export default useSettings;
