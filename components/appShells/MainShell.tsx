import Navbar from '@components/navigation/Navbar';
import { UserDataContext } from '@lib/context';
import { useContext } from 'react';

interface Props {
  children: ReactNode;
}

const MainShell = ({ children }: Props) => {
  const userData = useContext(UserDataContext);

  return (
    <div className="h-screen flex flex-col">
      <Navbar className="flex-shrink-0" />
      <main className="overflow-hidden">{children}</main>
      {/* 
      //!
      <CampusAndCourseDialog
        open={dialogOpen}
        onClose={() => {
          if (!campus || !course) return;
          setDialogOpen(false);
        }}
        campus={campus}
        course={course}
      /> */}
    </div>
  );
};

export default MainShell;
