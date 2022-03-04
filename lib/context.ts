import { createContext } from 'react';

import type { useSettings, useUserData, useUserDataNew } from './hooks';

export const SettingsContext = createContext<Partial<ReturnType<typeof useSettings>>>({});

export const UserDataContext = createContext<Partial<ReturnType<typeof useUserData>>>({});

export const UserDataNewContext = createContext<
  Partial<ReturnType<typeof useUserDataNew>>
>({});
