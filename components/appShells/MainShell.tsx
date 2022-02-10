import Navbar from '@components/navigation/Navbar';
import { UserDataContext } from '@lib/context';
import { useContext, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const MainShell = ({ children }: Props) => {
  const { campus, course } = useContext(UserDataContext);

  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!campus || !course) setDialogOpen(true);
  }, [campus, course]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar className="flex-shrink-0" />
      <main className="h-[calc(100%-3.5rem)]">{children}</main>
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
