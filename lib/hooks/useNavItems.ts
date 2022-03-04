import { Calendar, Clock, House, Student } from 'phosphor-react';
import { useMemo } from 'react';

const useNavItems = () => {
  const sidebarNavItems = useMemo(
    () => [
      {
        name: 'home',
        label: 'Home',
        Icon: House,
        href: '/',
      },
      {
        name: 'enroll',
        label: 'Matrícula',
        Icon: Student,
        href: '/enroll',
      },
      {
        name: 'calendar',
        label: 'Calendário',
        Icon: Calendar,
        href: '/calendar',
      },
      {
        name: 'agenda',
        label: 'Agenda',
        Icon: Clock,
        href: '/agenda',
      },
    ],
    []
  );

  return sidebarNavItems;
};

export default useNavItems;
