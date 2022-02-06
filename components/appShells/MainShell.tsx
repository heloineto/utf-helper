import Navbar from '@components/navigation/Navbar';
import { useState } from 'react';

interface Props {
  children: ReactNode;
}

const MainShell = ({ children }: Props) => {
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);

  const toggleMobileSideBarOpen = () => setMobileSideBarOpen((value) => !value);

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      <Navbar className="flex-shrink-0" />
      <main className="h-[calc(100%-3.5rem)]">{children}</main>
    </div>
  );
};

export default MainShell;
