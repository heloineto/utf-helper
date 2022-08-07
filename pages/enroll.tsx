import { EnrollContext, SettingsContext } from '@lib/context';
import { useEnroll } from '@lib/hooks';
import { useContext, useEffect } from 'react';
import classNames from 'clsx';
import EnrollTopbar from '@components/pageComponents/enroll/EnrollTopbar';
import { useMediaQuery, useTheme } from '@mui/material';
import Enroll from '@components/pageComponents/enroll/Enroll';

const EnrollPage: NextPage = () => {
  const { direction, setDirection } = useContext(SettingsContext);

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
        <Enroll />
      </div>
    </EnrollContext.Provider>
  );
};

export default EnrollPage;
