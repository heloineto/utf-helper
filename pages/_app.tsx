import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../lib/theme';
import createEmotionCache from '../lib/createEmotionCache';
import NoAutoCompleteBackground from '@components/styledJsx/NoAutoCompleteBackground';
import CustomScrollBar from '@components/styledJsx/CustomScrollBar';
import { SettingsContext, UserDataContext } from '@lib/context';
import { useSettings, useUserData } from '@lib/hooks';
import CustomSnackbarProvider from '@components/feedback/CustomSnackbarProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const settings = useSettings();
  const userData = useUserData();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>UTF Helper</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NoAutoCompleteBackground />
      <CustomScrollBar />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SettingsContext.Provider value={settings}>
          <UserDataContext.Provider value={userData}>
            <CustomSnackbarProvider>
              <Component {...pageProps} />
            </CustomSnackbarProvider>
          </UserDataContext.Provider>
        </SettingsContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
