import { DateTime, Info, Interval, StringUnitlength } from 'luxon';
import { toStartCase } from './typescript';

export const getDateStr = (date: DateTime) => {
  return toStartCase(
    date.setLocale('pt-BR').toLocaleString({
      weekday: 'long',
      month: 'long',
      day: '2-digit',
    })
  );
};

export const getWeekdaysStr = (
  weekStartsSunday: boolean = true,
  length: StringUnitlength = 'long'
) => {
  const weekdays = Info.weekdays(length, { locale: 'pt-BR' }).map(
    (weekday) => weekday.charAt(0).toUpperCase() + weekday.slice(1)
  );

  if (weekStartsSunday) {
    const sunday = weekdays.pop();
    if (sunday) weekdays.unshift(sunday);
  }

  return weekdays;
};

export const getWeekInterval = (date: DateTime) => {
  const startDay = date.startOf('week');
  const endDay = date.endOf('week');

  return Interval.fromDateTimes(startDay, endDay);
};
