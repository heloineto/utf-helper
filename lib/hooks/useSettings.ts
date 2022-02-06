import { useState } from 'react';

const useSettings = () => {
  const [theme, setTheme] = useState<Theme>('light');

  return { theme, setTheme };
};

export default useSettings;
