import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import TimetableSidebar from './Timetable.Sidebar';
import TimetableTopbar from './Timetable.Topbar';

type Props = {};

const Timetable = (props: Props) => {
  return (
    <div className="h-full flex flex-col overflow-hidden bg-gray-100 dark:bg-slate-800 relative">
      <TimetableTopbar />
      <div>
        <TimetableSidebar />
      </div>
    </div>
  );
};

export default Timetable;
