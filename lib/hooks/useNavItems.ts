import { CalendarBlank, Clock, GraduationCap, House } from 'phosphor-react';
import { useMemo } from 'react';

const useNavItems = () => {
  const sidebarNavItems = useMemo(
    () => ({
      home: {
        label: 'Home',
        Icon: House,
        href: '/',
        description: '',
      },
      enroll: {
        label: 'Matrícula',
        Icon: GraduationCap,
        href: '/enroll',
        description: 'Planeje a sua grade com uma interface interativa e fácil de usar',
      },
      calendar: {
        label: 'Calendário',
        Icon: CalendarBlank,
        href: '/calendar',
        description: 'Calendário acadêmico com datas importantes, férias, entre outros',
      },
      agenda: {
        label: 'Agenda',
        Icon: Clock,
        href: '/agenda',
        description: 'Veja quais das suas aulas são presenciais ou remotas',
      },
    }),
    []
  );

  return sidebarNavItems;
};

export default useNavItems;
