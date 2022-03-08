import MainShell from '@components/appShells/MainShell';
import { Logomark } from '@components/decoration/logos/utfHelper';
import Home from '@components/pageComponents/home/Home';

const HomePage: NextPage = () => {
  return (
    <MainShell>
      <Home />
    </MainShell>
  );
};

export default HomePage;
