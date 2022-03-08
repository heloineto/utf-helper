import AgendaSchedule from '../AgendaSchedule';
import { AgendaContext } from './lib/context';
import useAgenda from './lib/hooks/useAgenda';
import AgendaSidebar from './Agenda.Sidebar';
import AgendaTopbar from '../AgendaTopbar/AgendaTopbar';

type Props = {};

const Agenda = (props: Props) => {
  const value = useAgenda();

  return (
    <>
      <AgendaContext.Provider value={value}>
        <AgendaTopbar />
        <div className="h-[calc(100%-3rem)] flex">
          <AgendaSidebar />
          <div className="overflow-y-scroll flex-grow">
            <AgendaSchedule />
          </div>
        </div>
      </AgendaContext.Provider>
    </>
  );
};

export default Agenda;
