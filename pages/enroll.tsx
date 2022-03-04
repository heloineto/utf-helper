import MainShell from '@components/appShells/MainShell';
import Divider from '@components/pageComponents/enroll/Resizer';
import Schedule from '@components/pageComponents/enroll/Schedule';
import Table from '@components/pageComponents/enroll/Subjects';
import { SettingsContext } from '@lib/context';
import { useResize } from '@lib/hooks';
import { useContext } from 'react';
import classNames from 'clsx';

const Enroll: NextPage = () => {
  const { direction } = useContext(SettingsContext);
  const { handleRef, resize1Ref, resize2Ref, resizing } = useResize(direction);

  return (
    <MainShell>
      <div
        className={classNames(
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          'h-full w-full flex overflow-hidden'
        )}
      >
        <div className="h-2/3 w-1/2 overflow-auto" ref={resize1Ref}>
          <Table />
        </div>
        <Divider direction={direction} ref={handleRef} resizing={resizing} />
        <div className="flex-grow flex overflow-auto" ref={resize2Ref}>
          <Schedule />
        </div>
      </div>
    </MainShell>
  );
};

export default Enroll;
