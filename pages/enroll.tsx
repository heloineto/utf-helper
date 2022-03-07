import MainShell from '@components/appShells/MainShell';
import Divider from '@components/pageComponents/enroll/Resizer';
import Schedule from '@components/pageComponents/enroll/Schedule';
import Subjects, { SubjectsSafeguard } from '@components/pageComponents/enroll/Subjects';
import { SettingsContext, UserDataContext } from '@lib/context';
import { useResize } from '@lib/hooks';
import { useContext } from 'react';
import classNames from 'clsx';
import EnrollTopbar from '@components/pageComponents/enroll/EnrollTopbar';

const Enroll: NextPage = () => {
  const { direction } = useContext(SettingsContext);
  const { userDetails } = useContext(UserDataContext);
  const { handleRef, resize1Ref, resize2Ref, resizing } = useResize(direction);

  return (
    <MainShell>
      <EnrollTopbar />
      <div
        className={classNames(
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          'h-[calc(100%-3rem)] flex overflow-hidden'
        )}
      >
        <div className="h-2/3 w-1/2 overflow-auto" ref={resize1Ref}>
          {userDetails?.campus && userDetails?.course ? (
            <Subjects campus={userDetails?.campus} course={userDetails?.course} />
          ) : (
            <SubjectsSafeguard />
          )}
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
