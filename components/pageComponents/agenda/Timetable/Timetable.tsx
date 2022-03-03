import { TimetableContext } from './lib/context';
import useTimetable from './lib/hooks/useTimetable';
import TimetableSidebar from './Timetable.Sidebar';
import TimetableTopbar from './Timetable.Topbar';

type Props = {};

const Timetable = (props: Props) => {
  const value = useTimetable();

  return (
    <div className="h-full flex flex-col overflow-hidden bg-gray-100 dark:bg-slate-800 relative">
      <TimetableContext.Provider value={value}>
        <TimetableTopbar />
        <div className="h-full">
          <TimetableSidebar />
        </div>
      </TimetableContext.Provider>
    </div>
  );
};

export default Timetable;
