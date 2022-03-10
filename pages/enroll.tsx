import MainShell from '@components/appShells/MainShell';
import Divider from '@components/pageComponents/enroll/Resizer';
import Schedule from '@components/pageComponents/enroll/Schedule';
import Subjects, { SubjectsSafeguard } from '@components/pageComponents/enroll/Subjects';
import { SettingsContext, UserDataContext } from '@lib/context';
import { useResize } from '@lib/hooks';
import { useContext, useEffect } from 'react';
import classNames from 'clsx';
import EnrollTopbar from '@components/pageComponents/enroll/EnrollTopbar';
import { useMediaQuery, useTheme } from '@mui/material';

const EnrollPage: NextPage = () => {
  const { direction, setDirection } = useContext(SettingsContext);
  const { userDetails } = useContext(UserDataContext);
  const { handleRef, resize1Ref, resize2Ref, resizing } = useResize(direction);
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xl'));

  useEffect(() => {
    if (mobile) setDirection?.('vertical');
  }, [mobile, setDirection]);

  return (
    <>
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
    </>
  );
};

export default EnrollPage;
