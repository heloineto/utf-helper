import MainShell from '@components/appShells/MainShell';
import Divider from '@components/elements/Resizer';
import Schedule from '@components/elements/Schedule';
import { ScheduleContext } from '@lib/context';
import { useSchedule } from '@lib/hooks';
import { useRef } from 'react';

const Home: NextPage = () => {
  const resizeRef = useRef<HTMLDivElement>(null);
  const { schedule, setSchedule } = useSchedule();

  return (
    <MainShell>
      <ScheduleContext.Provider value={{ schedule, setSchedule }}>
        <div className="h-full w-full flex flex-col overflow-hidden">
          <div className="h-2/3" ref={resizeRef}></div>
          <Divider resizeRef={resizeRef} />
          <div className="flex-grow flex overflow-auto">
            <Schedule />
          </div>
        </div>
      </ScheduleContext.Provider>
    </MainShell>
  );
};

export default Home;
