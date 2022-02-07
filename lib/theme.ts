import { ThemeOptions, createTheme } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../tailwind.config.js';

const { theme: twTheme } = resolveConfig(tailwindConfigModule as any);
const themeOptions: ThemeOptions = {};

if (twTheme.screens) {
  themeOptions.breakpoints = {
    values: Object.entries(twTheme.screens).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: parseInt(value) }),
      {}
    ) as any,
  };
}

const theme = createTheme(themeOptions);

export default theme;
