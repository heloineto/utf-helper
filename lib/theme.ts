//@ts-nocheck

import { createTheme } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfigModule from '../tailwind.config.js';

const tailwindConfig = resolveConfig(tailwindConfigModule);

const theme = createTheme({
  breakpoints: {
    values: {
      sm: tailwindConfig.theme.screens.sm,
      md: tailwindConfig.theme.screens.md,
      lg: tailwindConfig.theme.screens.lg,
      xl: tailwindConfig.theme.screens.xl,
      '2xl': tailwindConfig.theme.screens['2xl'],
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

export default theme;
