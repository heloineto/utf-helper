import { ThemeOptions, createTheme } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../tailwind.config.js';
import twColors from 'tailwindcss/colors';

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

if (themeOptions.palette?.primary) {
  themeOptions.palette.primary = {
    ...twColors.sky,
    main: twColors.sky[500],
    light: twColors.sky[500],
    dark: twColors.sky[500],
  };
}

const theme = createTheme(themeOptions);

export default theme;
