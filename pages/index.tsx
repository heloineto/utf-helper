import MainShell from '@components/appShells/MainShell';
import Divider from '@components/elements/Resizer';
import Schedule from '@components/elements/Schedule';
import Table from '@components/elements/Subjects';
import { ScheduleContext, SettingsContext } from '@lib/context';
import { useResize, useSchedule } from '@lib/hooks';
import { useContext, useRef } from 'react';
import classNames from 'clsx';

const Home: NextPage = () => {
  const { schedule, setSchedule } = useSchedule();
  const { direction } = useContext(SettingsContext);
  const { handleRef, resize1Ref, resize2Ref } = useResize(direction);

  return (
    <MainShell>
      <ScheduleContext.Provider value={{ schedule, setSchedule }}>
        <div
          className={classNames(
            direction === 'horizontal' ? 'flex-row' : 'flex-col',
            'h-full w-full flex overflow-hidden'
          )}
        >
          <div className="h-2/3 overflow-auto" ref={resize1Ref}>
            <Table />
          </div>
          <Divider direction={direction} ref={handleRef} />
          <div className="flex-grow flex overflow-auto" ref={resize2Ref}>
            <Schedule />
          </div>
        </div>
      </ScheduleContext.Provider>
    </MainShell>
  );
};

export default Home;
