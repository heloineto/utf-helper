import Navbar from '@components/navigation/Navbar';
import { useState } from 'react';

interface Props {
  children: ReactNode;
}

const MainShell = ({ children }: Props) => {
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);

  const toggleMobileSideBarOpen = () => setMobileSideBarOpen((value) => !value);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* <Navbar /> */}
      <main className="h-full">{children}</main>
    </div>
  );
};

export default MainShell;
