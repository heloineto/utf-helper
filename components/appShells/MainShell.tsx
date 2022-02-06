import Navbar from '@components/navigation/Navbar';
import { SettingsContext } from '@lib/context';
import { useState } from 'react';
import classNames from 'clsx';

interface Props {
  children: ReactNode;
}

const MainShell = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <SettingsContext.Provider value={{ theme, setTheme }}>
      <div className={classNames(theme, 'h-screen flex flex-col bg-slate-100')}>
        <Navbar className="flex-shrink-0" />
        <main className="h-[calc(100%-3.5rem)]">{children}</main>
      </div>
    </SettingsContext.Provider>
  );
};

export default MainShell;
