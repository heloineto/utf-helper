import { Calendar, Clock, GraduationCap, House, Student } from 'phosphor-react';
import { useMemo } from 'react';

const useNavItems = () => {
  const sidebarNavItems = useMemo(
    () => [
      {
        key: 'home',
        label: 'Home',
        Icon: House,
        href: '/',
      },
      {
        key: 'enroll',
        label: 'Matrícula',
        Icon: GraduationCap,
        href: '/enroll',
      },
      {
        key: 'calendar',
        label: 'Calendário',
        Icon: Calendar,
        href: '/calendar',
      },
      {
        key: 'agenda',
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
