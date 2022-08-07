import Subjects, { SubjectsSafeguard } from '@components/pageComponents/enroll/Subjects';
import { EnrollContext, SettingsContext, UserDataContext } from '@lib/context';
import { useEnroll, useResize } from '@lib/hooks';
import { useContext, useEffect } from 'react';
import classNames from 'clsx';
import EnrollTopbar from '@components/pageComponents/enroll/EnrollTopbar';
import { useMediaQuery, useTheme } from '@mui/material';
import Schedule from '@components/pageComponents/enroll/Schedule';
import Resizer from '@components/pageComponents/enroll/Resizer';

const EnrollPage: NextPage = () => {
  const { direction, setDirection } = useContext(SettingsContext);
  const { userDetails } = useContext(UserDataContext);
  const { resizing, resizeButtonRef, firstRef, secondRef, secondStyles } =
    useResize(direction);
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('xl'));
  const value = useEnroll();

  useEffect(() => {
    if (mobile) setDirection?.('vertical');
  }, [mobile, setDirection]);

  return (
    <EnrollContext.Provider value={value}>
      <EnrollTopbar />
      <div
        className={classNames(
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          'h-[calc(100%-3rem)] flex overflow-hidden relative'
        )}
      >
        <div
          className="overflow-auto"
          style={direction === 'horizontal' ? { width: '50%' } : { height: '50%' }}
          ref={firstRef}
        >
          {userDetails?.campus && userDetails?.course ? (
            <Subjects campus={userDetails?.campus} course={userDetails?.course} />
          ) : (
            <SubjectsSafeguard />
          )}
        </div>
        <div className="flex bg-red-500" style={secondStyles} ref={secondRef}>
          <Resizer direction={direction} resizing={resizing} ref={resizeButtonRef} />
          <Schedule />
        </div>
      </div>
    </EnrollContext.Provider>
  );
};

export default EnrollPage;
