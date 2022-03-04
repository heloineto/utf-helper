import Navbar from '@components/navigation/Navbar';

interface Props {
  children: ReactNode;
}

const MainShell = ({ children }: Props) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar className="flex-shrink-0" />
      <main className="overflow-hidden h-full bg-slate-100 dark:bg-slate-800">
        {children}
      </main>
    </div>
  );
};

export default MainShell;
