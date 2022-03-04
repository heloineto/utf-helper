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
import { SettingsContext, UserDataContext, UserDataNewContext } from '@lib/context';
import { useSettings, useUserData, useUserDataNew } from '@lib/hooks';
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
  const userDataNew = useUserDataNew();

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
            <UserDataNewContext.Provider value={userDataNew}>
              <CustomSnackbarProvider>
                <Component {...pageProps} />
              </CustomSnackbarProvider>
            </UserDataNewContext.Provider>
          </UserDataContext.Provider>
        </SettingsContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
