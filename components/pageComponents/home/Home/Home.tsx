import { Logomark } from '@components/decoration/logos/utfHelper';
import { useNavItems } from '@lib/hooks';
import { Button } from '@mui/material';
import { omit } from 'lodash';
import Link from 'next/link';
import { CaretRight } from 'phosphor-react';
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
          <p className="mt-2 text-lg text-slate-500">O UTF Helper te ajuda </p>
        </div>
        <div className="mt-10">
          <h2 className="text-sm font-semibold text-slate-500 tracking-wide uppercase">
            Páginas
          </h2>
          <ul
            role="list"
            className="mt-4 border-t border-b border-slate-200 divide-y divide-slate-200"
          >
            {Object.entries(omit(navItems, 'home')).map(
              ([key, { href, label, Icon }]) => (
                <HomeLink key={key} href={href} label={label} Icon={Icon} />
              )
            )}
          </ul>
        </div>
      </div>
      {/* <footer className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200 py-12 text-center md:flex md:justify-between">
          <p className="text-base text-slate-400">
            &copy; Workflow, Inc. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center space-x-8 md:mt-0">
            {social.map((item, itemIdx) => (
              <a
                key={itemIdx}
                href={item.href}
                className="inline-flex text-slate-400 hover:text-slate-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
