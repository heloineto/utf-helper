import classNames from 'clsx';
import { ArrowsDownUp } from 'phosphor-react';
import { forwardRef, useEffect, useRef, useState } from 'react';

const setStylesOnElement = function (styles: any, element: HTMLElement) {
  Object.assign(element.style, styles);
};

interface Props extends ComponentProps<'div'> {
  direction?: Direction;
}

const Resizer = forwardRef<HTMLButtonElement, Props>(function Resizer(
  { direction = 'vertical', ...divProps },
  ref
) {
  const [resizing, setResizing] = useState(false);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const resizeStart = () => {
    document.body.classList.add('select-none');

    setResizing(true);
  };

  useEffect(() => {
    const firstElem = document.getElementById('first') as HTMLElement;
    const secondElem = document.getElementById('second') as HTMLElement;

    if (!firstElem || !secondElem) return;

    const resize = (e: MouseEvent) => {
      if (!resizing) return;

      if (direction === 'horizontal') {
        const percentage = (e.clientX * 100) / window.innerWidth;

        secondElem.style.width = `${100 - percentage}%`;

        return;
      }

      const percentage = (e.clientY * 100) / window.innerHeight;

      secondElem.style.height = `${100 - percentage}%`;
    };

    const resizeEnd = (e: MouseEvent) => {
      document.body.classList.remove('select-none');
      setResizing(false);

      if (direction === 'horizontal') {
        const percentage = (e.clientX * 100) / window.innerWidth;
        firstElem.style.width = `${percentage}%`;

        return;
      }

      const percentage = (e.clientY * 100) / window.innerHeight;
      firstElem.style.height = `${percentage}%`;
    };

    window.addEventListener('pointermove', resize);
    window.addEventListener('pointerup', resizeEnd);

    return () => {
      window.removeEventListener('pointermove', resize);
      window.removeEventListener('pointerup', resizeEnd);
    };
  }, [resizing, firstRef, secondRef, direction]);

  return (
    <div
      className={classNames(
        direction === 'horizontal'
          ? 'min-w-[0.625rem] h-full'
          : 'w-full min-h-[0.625rem]',
        'relative z-10 bg-white dark:bg-slate-600 ring-1 shadow ring-slate-700/5 dark:ring-slate-500 flex items-center justify-center'
      )}
      {...divProps}
    >
      <button
        onPointerDown={resizeStart}
        className={classNames(
          direction === 'horizontal'
            ? 'cursor-col-resize w-6 h-8 hover:w-12 hover:h-12'
            : 'cursor-row-resize w-8 h-6 hover:w-12 hover:h-12',
          resizing && '!w-12 !h-12',
          'absolute group bg-white dark:bg-slate-400 transition-all ease-in-out flex justify-center items-center rounded-full ring-1 ring-slate-900/10 shadow z-[100]'
        )}
      >
        <ArrowsDownUp
          className={classNames(
            direction === 'horizontal' ? '-rotate-90' : 'rotate-0',
            resizing && '!h-6 !text-slate-600 dark:!text-white',
            'h-4 group-hover:h-6 transition-all text-slate-500 dark:text-slate-50 group-hover:text-slate-600 dark:group-hover:text-white w-auto ease-in-out'
          )}
          weight="bold"
        />
      </button>
    </div>
  );
});

export default Resizer;
