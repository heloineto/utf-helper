import useCalendarData from '@lib/hooks/useCalendarData';
import { colord } from 'colord';

type Props = {};

const Captions = (props: Props) => {
  const { captions } = useCalendarData();

  return (
    <div className="h-80 md:h-64 xl:h-48 2xl:h-40 px-5 py-2.5 border-2 border-slate-400 border-dashed rounded-lg mb-5 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5">
      {captions.map(({ label, color, symbol }) => {
        const lighterColor = colord(color).lighten(0.25).toHex();

        return (
          <div key={color ?? symbol} className="flex items-center gap-x-2">
            <div
              className="rounded-lg h-6 w-6 flex-shrink-0"
              style={{
                background: `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`,
              }}
            ></div>
            <div className="dark:text-slate-100 text-xs sm:text-sm font-medium">
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Captions;
