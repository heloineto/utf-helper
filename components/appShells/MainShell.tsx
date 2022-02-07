import Navbar from '@components/navigation/Navbar';
import { SettingsContext } from '@lib/context';
import classNames from 'clsx';
import { useContext } from 'react';

interface Props {
  children: ReactNode;
}

const MainShell = ({ children }: Props) => {
  return (
    <div className="h-screen flex flex-col bg-slate-100 dark:bg-slate-900">
      <Navbar className="flex-shrink-0" />
      <main className="h-[calc(100%-3.5rem)]">{children}</main>
    </div>
  );
};

export default MainShell;
