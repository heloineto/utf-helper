import MainShell from '@components/appShells/MainShell';
import Divider from '@components/elements/Divider';
import Schedule from '@components/Schedule';
import { useRef } from 'react';

const Home: NextPage = () => {
  const resizeRef = useRef<HTMLDivElement>(null);

  return (
    <MainShell>
      <div className="h-full w-full flex flex-col overflow-hidden">
        <div className="bg-red-200 h-2/3" ref={resizeRef}></div>
        <Divider resizeRef={resizeRef} />
        <div className="bg-blue-200 flex-grow flex overflow-auto">
          <Schedule />
        </div>
      </div>
    </MainShell>
  );
};

export default Home;
