import MainShell from '@components/appShells/MainShell';
import Schedule from '@components/Schedule';

const Home: NextPage = () => {
  return (
    <MainShell>
      <div className="bg-red-200" style={{ height: `50%` }}></div>
      <div className="bg-blue-200" style={{ height: `50%` }}>
        {/* <Schedule /> */}
      </div>
    </MainShell>
  );
};

export default Home;
