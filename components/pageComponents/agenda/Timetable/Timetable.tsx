import TimetableSchedule from './Timetable.Schedule';
import { TimetableContext } from './lib/context';
import useTimetable from './lib/hooks/useTimetable';
import TimetableSidebar from './Timetable.Sidebar';
import TimetableTopbar from './Timetable.Topbar';

type Props = {};

const Timetable = (props: Props) => {
  const value = useTimetable();

  return (
    <div className="h-full flex flex-col overflow-hidden relative">
      <TimetableContext.Provider value={value}>
        <TimetableTopbar />
        <div className="h-full flex">
          <TimetableSidebar />
          <TimetableSchedule />
        </div>
      </TimetableContext.Provider>
    </div>
  );
};

export default Timetable;
