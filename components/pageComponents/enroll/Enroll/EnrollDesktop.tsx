import Subjects, { SubjectsSafeguard } from '@components/pageComponents/enroll/Subjects';
import { SettingsContext, UserDataContext } from '@lib/context';
import { useContext } from 'react';
import Schedule from '@components/pageComponents/enroll/Schedule';
import Resizer from '@components/pageComponents/enroll/Resizer';

interface Props {}

const EnrollDesktop = (props: Props) => {
  const { direction, setDirection } = useContext(SettingsContext);
  const { userDetails } = useContext(UserDataContext);

  return (
    <>
      <div
        id="first"
        className="overflow-auto"
        style={direction === 'horizontal' ? { width: '50%' } : { height: '50%' }}
      >
        {userDetails?.campus && userDetails?.course ? (
          <Subjects campus={userDetails?.campus} course={userDetails?.course} />
        ) : (
          <SubjectsSafeguard />
        )}
      </div>

      <div
        className="flex bg-red-500"
        id="second"
        style={
          direction === 'horizontal'
            ? {
                flexDirection: 'row',
                position: 'absolute',
                right: 0,
                width: '50%',
                height: '100%',
              }
            : {
                flexDirection: 'column',
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '50%',
              }
        }
      >
        <Resizer direction={direction} />
        <Schedule />
      </div>
    </>
  );
};

export default EnrollDesktop;
