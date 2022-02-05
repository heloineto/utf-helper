import MainShell from '@components/appShells/MainShell';
import Divider from '@components/elements/Divider';
import Schedule from '@components/Schedule';
import { useRef } from 'react';

const Home: NextPage = () => {
  const resizeRef = useRef<HTMLDivElement>(null);

  return (
    <MainShell>
      <div className="h-full w-full overflow-hidden">
        <div className="bg-red-200 h-full" ref={resizeRef}></div>
        <Divider resizeRef={resizeRef} />
        <div className="bg-blue-200 h-full">{/* <Schedule /> */}</div>
      </div>
    </MainShell>
  );
};

export default Home;
