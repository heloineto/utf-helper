import { ThemeOptions, createTheme } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../tailwind.config.js';

const { theme: TwTheme } = resolveConfig(tailwindConfigModule as any);
const themeOptions: ThemeOptions = {};

if (TwTheme.screens) {
  themeOptions.breakpoints = {
    values: Object.entries(TwTheme.screens).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: parseInt(value) }),
      {}
    ) as any,
  };
}

const theme = createTheme(themeOptions);

export default theme;
