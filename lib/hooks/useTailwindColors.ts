import { useMemo } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../../tailwind.config.js';

const { theme: twTheme } = resolveConfig(tailwindConfigModule as any);

const useTailwindColors = () => {
  const tailwindColors = useMemo(() => twTheme.colors, [twTheme]);

  return tailwindColors;
};

export default useTailwindColors;
