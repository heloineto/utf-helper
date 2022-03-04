import { createContext } from 'react';

import type { useSettings, useUserData, useUser } from './hooks';

export const SettingsContext = createContext<Partial<ReturnType<typeof useSettings>>>({});

export const UserDataContext = createContext<Partial<ReturnType<typeof useUserData>>>({});

export const UserContext = createContext<Partial<ReturnType<typeof useUser>>>({});
