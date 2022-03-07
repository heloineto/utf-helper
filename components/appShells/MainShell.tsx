import Navbar from '@components/navigation/Navbar';
import classNames from 'clsx';

interface Props {
  children: ReactNode;
  classes?: {
    main?: string;
  };
}

const MainShell = ({ children, classes }: Props) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar className="flex-shrink-0" />
      <main
        className={classNames(
          classes?.main,
          'overflow-hidden h-full bg-slate-100 dark:bg-slate-800'
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default MainShell;
