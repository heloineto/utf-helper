import MainShell from '@components/appShells/MainShell';
import Timetable from '@components/pageComponents/agenda/Timetable';

const Agenda: NextPage = () => {
  return (
    <MainShell>
      <Timetable />
    </MainShell>
  );
};

export default Agenda;
