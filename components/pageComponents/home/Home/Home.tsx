import { Logomark } from '@components/decoration/logos/utfHelper';
import { useNavItems } from '@lib/hooks';
import { omit } from 'lodash';
import HomeLink from './Home.Link';

type Props = {};

const Home = (props: Props) => {
  const navItems = useNavItems();

  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-5 h-full overflow-y-scroll">
      <div className="w-full grid place-content-center flex-shrink-0 pt-6">
        <Logomark className="h-32 w-auto" />
      </div>
      <div className="max-w-xl mx-auto py-6 sm:py-6">
        <div className="text-center">
          <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-slate-300 tracking-tight sm:text-5xl uppercase">
            UTF Helper
          </h1>
          <p className="mt-2 mx-5 text-slate-500 dark:text-slate-400">
            O UTF Helper é um site de aulo para aluno que facilita sua vida universitária
            na UTFPR
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
            Páginas
          </h2>
          <ul
            role="list"
            className="mt-4 border-t border-b border-slate-300 dark:border-slate-700 divide-y divide-slate-300 dark:divide-slate-700"
          >
            {Object.entries(omit(navItems, 'home')).map(
              ([key, { href, label, Icon, description }]) => (
                <li key={key}>
                  <HomeLink
                    href={href}
                    label={label}
                    Icon={Icon}
                    description={description}
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
