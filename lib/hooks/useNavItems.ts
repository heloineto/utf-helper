import { CalendarBlank, Clock, GraduationCap, House } from 'phosphor-react';
import { useMemo } from 'react';

const useNavItems = () => {
  const sidebarNavItems = useMemo(
    () => ({
      home: {
        label: 'Home',
        Icon: House,
        href: '/',
      },
      enroll: {
        label: 'Matrícula',
        Icon: GraduationCap,
        href: '/enroll',
      },
      calendar: {
        label: 'Calendário',
        Icon: CalendarBlank,
        href: '/calendar',
      },
      agenda: {
        label: 'Agenda',
        Icon: Clock,
        href: '/agenda',
      },
    }),
    []
  );

  return sidebarNavItems;
};

export default useNavItems;
