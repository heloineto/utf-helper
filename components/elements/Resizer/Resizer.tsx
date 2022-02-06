import { SwitchVerticalIcon } from '@heroicons/react/outline';
import { useRef } from 'react';
import useResize from './utils/useResize';
import classNames from 'clsx';

type Props = {
  direction?: 'vertical' | 'horizontal';
  resizeRef: RefObject<HTMLDivElement>;
};

const Resizer = ({ direction = 'vertical', resizeRef }: Props) => {
  const handleRef = useRef<HTMLDivElement>(null);
  useResize(resizeRef, handleRef);

  return (
    <div
      className={classNames(
        direction === 'horizontal' ? 'w-2.5 h-full' : 'w-full h-2.5',
        'relative z-10 transition-colors duration-500 bg-white dark:bg-slate-600 ring-1 shadow ring-slate-700/5 dark:ring-slate-500 flex items-center justify-center'
      )}
    >
      <div
        className={classNames(
          direction === 'horizontal'
            ? 'cursor-col-resize w-6 h-8 hover:w-12 hover:h-12'
            : 'cursor-row-resize w-8 h-6 hover:w-12 hover:h-12',
          'absolute group bg-white dark:bg-slate-400 transition-all ease-in-out flex justify-center items-center rounded-full ring-1 ring-slate-900/10 shadow'
        )}
        ref={handleRef}
      >
        <SwitchVerticalIcon
          className={classNames(
            direction === 'horizontal' ? '-rotate-90' : 'rotate-0',
            'h-4 group-hover:h-6 transition-all text-slate-500 dark:text-slate-50 group-hover:text-slate-600 dark:group-hover:text-white w-auto ease-in-out'
          )}
        />
      </div>
    </div>
  );
};

export default Resizer;
