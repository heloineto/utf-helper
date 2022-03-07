import { createContext } from 'react';
import type { useSettings, useUserData } from './hooks';
import useHighlight from './hooks/useHighlight';

export const SettingsContext = createContext<Partial<ReturnType<typeof useSettings>>>({});

export const UserDataContext = createContext<Partial<ReturnType<typeof useUserData>>>({});

export const HighlightContext = createContext<Partial<ReturnType<typeof useHighlight>>>(
  {}
);
