import MainShell from '@components/appShells/MainShell';
import { Logomark } from '@components/decoration/logos/utfHelper';
import Rename from '@components/pageComponents/home/Rename';

const Home: NextPage = () => {
  return (
    <MainShell>
      <div className="bg-slate-100 dark:bg-slate-800 p-5 h-full overflow-y-scroll">
        <div className="w-full flex justify-center items-center">
          <Logomark />
        </div>
      </div>

      <Rename />
    </MainShell>
  );
};

export default Home;
