import { useMemo } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../../tailwind.config.js';

const { theme: twTheme } = resolveConfig(tailwindConfigModule as any);

//! REMOVE
const useTailwindColors = () => {
  const tailwindColors = useMemo(() => twTheme.colors, []);

  return tailwindColors;
};

export default useTailwindColors;
