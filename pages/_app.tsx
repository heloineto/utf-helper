import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import createEmotionCache from '../lib/createEmotionCache';
import NoAutoCompleteBackground from '@components/styledJsx/NoAutoCompleteBackground';
import CustomScrollBar from '@components/styledJsx/CustomScrollBar';
import { SettingsContext, UserDataContext } from '@lib/context';
import { useSettings, useUserData } from '@lib/hooks';
import CustomSnackbarProvider from '@components/elements/feedback/CustomSnackbarProvider';
import useMuiTheme from '@lib/hooks/useMuiTheme';
import MainShell from '@components/appShells/MainShell';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const settings = useSettings();
  const userData = useUserData();
  const theme = useMuiTheme(settings.darkMode);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>UTF Helper</title>
      </Head>
      <NoAutoCompleteBackground />
      <CustomScrollBar />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SettingsContext.Provider value={settings}>
          <UserDataContext.Provider value={userData}>
            <CustomSnackbarProvider>
              <MainShell>
                <Component {...pageProps} />
              </MainShell>
            </CustomSnackbarProvider>
          </UserDataContext.Provider>
        </SettingsContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
