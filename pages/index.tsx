import MainShell from '@components/appShells/MainShell';
import Divider from '@components/elements/Divider';
import Schedule from '@components/Schedule';
import { useRef } from 'react';

const Home: NextPage = () => {
  const resizeRef = useRef<HTMLDivElement>(null);

  return (
    <MainShell>
      <div className="bg-red-200" ref={resizeRef} style={{ height: `50%` }}></div>
      <Divider resizeRef={resizeRef} />
      <div className="bg-blue-200" style={{ height: `50%` }}>
        {/* <Schedule /> */}
      </div>
    </MainShell>
  );
};

export default Home;
