import { DateTime } from 'luxon';
import { toStartCase } from './typescript';

export const getDateStr = (date: DateTime) => {
  return toStartCase(
    date.toLocaleString({
      weekday: 'long',
      month: 'long',
      day: '2-digit',
    })
  );
};
