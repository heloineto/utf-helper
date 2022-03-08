import { DateTime } from 'luxon';
import { createContext } from 'react';
import useAgenda from './hooks/useAgenda';

export const AgendaContext = createContext<
  Partial<ReturnType<typeof useAgenda>> & {
    selectedDate: DateTime;
  }
>({
  selectedDate: DateTime.now(),
});
