import { createContext } from 'react';
import type { useEnroll, useSettings, useUserData } from './hooks';

export const SettingsContext = createContext<Partial<ReturnType<typeof useSettings>>>({});

export const UserDataContext = createContext<Partial<ReturnType<typeof useUserData>>>({});

export const EnrollContext = createContext<Partial<ReturnType<typeof useEnroll>>>({});
