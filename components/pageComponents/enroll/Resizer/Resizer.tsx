import classNames from 'clsx';
import { ArrowsDownUp } from 'phosphor-react';
import { forwardRef } from 'react';

interface Props extends ComponentProps<'div'> {
  direction?: Direction;
  resizing: boolean;
}

const Resizer = forwardRef<HTMLButtonElement, Props>(function Resizer(
  { direction = 'vertical', resizing, ...divProps },
  ref
) {
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
        ref={ref}
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
