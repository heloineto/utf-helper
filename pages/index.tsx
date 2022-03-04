import MainShell from '@components/appShells/MainShell';
import { Logomark } from '@components/decoration/logo';

const Home: NextPage = () => {
  return (
    <MainShell>
      <div className="bg-slate-100 dark:bg-slate-800 p-5 h-full overflow-y-scroll">
        <div className="w-full flex justify-center items-center">
          <Logomark />
        </div>
      </div>
    </MainShell>
  );
};

export default Home;
