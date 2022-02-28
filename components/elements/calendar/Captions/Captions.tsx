import useCalendarData from '@lib/hooks/useCalendarData';
import { colord } from 'colord';

type Props = {};

const Captions = (props: Props) => {
  const { captions } = useCalendarData();

  return (
    <div className="bg-white rounded-lg shadow ring-1 ring-slate-700/5 p-2 dark:bg-slate-900 dark:ring-white/10 h-80 md:h-64 xl:h-48 2xl:h-40 px-5 py-2.5 mb-5 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5">
      {captions.map(({ label, color, symbol }) => {
        const lighterColor = colord(color).lighten(0.25).toHex();

        return (
          <div key={color ?? symbol} className="flex items-center gap-x-2">
            {symbol === '◯' ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="14"
                  cy="14"
                  r="11.5"
                  stroke="url(#paint0_linear_812_1341)"
                  stroke-width="5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_812_1341"
                    x1="3.08"
                    y1="24.92"
                    x2="25.2"
                    y2="2.8"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF5459" />
                    <stop offset="1" stop-color="#F9371C" />
                  </linearGradient>
                </defs>
              </svg>
            ) : symbol === '△' ? (
              <svg
                width="26"
                height="25"
                viewBox="0 0 26 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1459 22.5H3.8541C3.48241 22.5 3.24066 22.1088 3.40689 21.7764L12.5528 3.4846C12.737 3.11607 13.263 3.11608 13.4472 3.4846L22.5931 21.7764C22.7593 22.1088 22.5176 22.5 22.1459 22.5Z"
                  stroke="black"
                  stroke-width="5"
                />
                <path
                  d="M22.1459 22.5H3.8541C3.48241 22.5 3.24066 22.1088 3.40689 21.7764L12.5528 3.4846C12.737 3.11607 13.263 3.11608 13.4472 3.4846L22.5931 21.7764C22.7593 22.1088 22.5176 22.5 22.1459 22.5Z"
                  stroke="url(#paint0_linear_812_1339)"
                  stroke-width="5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_812_1339"
                    x1="2.08"
                    y1="21.92"
                    x2="24.2"
                    y2="-0.199999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DA22FE" />
                    <stop offset="1" stop-color="#FA05FF" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <div
                className="rounded h-7 w-7 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10"
                style={{
                  background: `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`,
                }}
              />
            )}
            <div className="dark:text-slate-400 text-xs sm:text-sm font-medium font-mono">
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Captions;
