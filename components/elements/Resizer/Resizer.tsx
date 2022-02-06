import { ArrowsExpandIcon, SwitchVerticalIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import useResize from './utils/useResize';

type Props = {
  direction?: 'vertical' | 'horizontal';
  resizeRef: RefObject<HTMLDivElement>;
};

const Resizer = ({ direction = 'horizontal', resizeRef }: Props) => {
  const handleRef = useRef<HTMLDivElement>(null);
  useResize(resizeRef, handleRef);

  return (
    <div className="z-10 w-full h-2.5 bg-white ring-1 shadow ring-slate-700/5 flex items-center justify-center dark:bg-indigo-500 dark:text-white dark:highlight-white/10">
      <div
        className="group w-7 h-7 transition-all ease-in-out hover:w-12 hover:h-12 bg-white flex justify-center items-center cursor-ns-resize rounded-full ring-1 ring-slate-900/10 shadow"
        ref={handleRef}
      >
        <SwitchVerticalIcon className="h-4 group-hover:h-6 group-hover:text-slate-600 text-slate-500 w-auto transition-all ease-in-out" />
      </div>
    </div>
  );
};

export default Resizer;
