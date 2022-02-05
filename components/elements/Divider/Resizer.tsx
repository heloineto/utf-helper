import { MenuAlt4Icon } from '@heroicons/react/outline';
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
    <div className="w-full h-2.5 bg-white ring-1 shadow ring-slate-700/5 flex items-center justify-center dark:bg-indigo-500 dark:text-white dark:highlight-white/10">
      <div
        className="w-14 h-14 bg-white flex justify-center items-center cursor-ns-resize rounded-full ring-1 ring-slate-900/10 shadow"
        ref={handleRef}
      >
        <MenuAlt4Icon className="h-6 w-auto text-gray-500" />
      </div>
    </div>
  );
};

export default Resizer;
