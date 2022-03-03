import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import TimetableTopbar from './Timetable.Topbar';

type Props = {};

const Timetable = (props: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="h-full w-full flex overflow-hidden bg-gray-100 dark:bg-slate-800 relative"
      ref={divRef}
    >
      <TimetableTopbar />
      <div></div>
    </div>
  );
};

export default Timetable;
