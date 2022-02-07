import MainShell from '@components/appShells/MainShell';
import Divider from '@components/elements/Resizer';
import Schedule from '@components/elements/Schedule';
import Table from '@components/elements/Subjects';
import { SettingsContext } from '@lib/context';
import { useResize } from '@lib/hooks';
import { useContext } from 'react';
import classNames from 'clsx';

//! Changes
//! change "theme" in settings to be "darkMode" and be a boolean;
//! Update Schedule state (highlights) declaratively
//! Add search bar
//! Add modal to select campus and course
//! Subject colors will be assigned randonly based on an hashing function;
//! Add ability to remove classes on the scheduler

const Home: NextPage = () => {
  const { direction, selectedClasses } = useContext(SettingsContext);
  const { handleRef, resize1Ref, resize2Ref } = useResize(direction);

  return (
    <MainShell>
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
    </MainShell>
  );
};

export default Home;
