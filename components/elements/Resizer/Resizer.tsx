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
    <div className="z-10 w-full h-2.5 transition-colors duration-500 bg-white dark:bg-slate-600 ring-1 shadow ring-slate-700/5 dark:ring-slate-500 flex items-center justify-center dark:text-white dark:highlight-white/10">
      <div
        className="group w-7 h-7 bg-white dark:bg-slate-400 transition-all ease-in-out hover:w-12 hover:h-12 flex justify-center items-center cursor-ns-resize rounded-full ring-1 ring-slate-900/10 shadow"
        ref={handleRef}
      >
        <SwitchVerticalIcon className="h-4 group-hover:h-6 transition-colors duration-500 text-slate-500 dark:text-slate-50 group-hover:text-slate-600 dark:text-slate-400 dark:group-hover:text-white w-auto ease-in-out" />
      </div>
    </div>
  );
};

export default Resizer;
