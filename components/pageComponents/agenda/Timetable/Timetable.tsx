import TimetableSchedule from './Timetable.Schedule';
import { TimetableContext } from './lib/context';
import useTimetable from './lib/hooks/useTimetable';
import TimetableSidebar from './Timetable.Sidebar';
import TimetableTopbar from './Timetable.Topbar';

type Props = {};

const Timetable = (props: Props) => {
  const value = useTimetable();

  return (
    <>
      <TimetableContext.Provider value={value}>
        <TimetableTopbar />
        <div className="h-[calc(100%-3rem)] flex">
          <TimetableSidebar />
          <div className="overflow-y-scroll flex-grow">
            <TimetableSchedule />
          </div>
        </div>
      </TimetableContext.Provider>
    </>
  );
};

export default Timetable;
