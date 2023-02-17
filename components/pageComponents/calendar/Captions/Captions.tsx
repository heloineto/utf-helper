import {
    CircleIcon,
    TriangleIcon
} from '@components/decoration/icons/outlined';
import { captions } from '@lib/constants/calendar/captions';
import { colord } from 'colord';

type Props = {};

const Captions = (props: Props) => {
    return (
        <div className="bg-white rounded-lg shadow ring-1 ring-slate-700/5 dark:bg-slate-900 dark:ring-white/10 h-80 md:h-64 xl:h-48 2xl:h-40 px-2.5 sm:px-5 py-1 sm:py-2.5 mb-5 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2 sm:gap-x-5">
            {captions.map(({ label, color, symbol }) => {
                const lighterColor = colord(color).lighten(0.25).toHex();

                return (
                    <div
                        key={color ?? symbol}
                        className="flex items-center gap-x-1.5 sm:gap-x-2"
                    >
                        {symbol === '◯' ? (
                            <CircleIcon />
                        ) : symbol === '△' ? (
                            <TriangleIcon />
                        ) : (
                            <div
                                className="rounded h-7 w-7 flex-shrink-0 pt-full ring-1 ring-inset ring-slate-900/5 dark:ring-0 dark:highlight-white/10"
                                style={{
                                    background: `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`
                                }}
                            />
                        )}
                        <div className="dark:text-slate-400 text-[0.7rem] sm:text-sm font-medium break-all">
                            {label}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Captions;
