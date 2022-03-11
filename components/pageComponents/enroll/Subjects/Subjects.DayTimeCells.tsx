import classNames from 'clsx';
import useHighlights from '@lib/hooks/useHighlights';
import Highlights from '@components/elements/feedback/Highlights';

type Props = {
  schedule: {
    dayTimeCode: string;
    locationCode: string;
  }[];
};

const SubjectsDayTimeCells = ({ schedule, className }: Props & ComponentProps<'div'>) => {
  const { highlights, addHighlights, removeHighlights } = useHighlights();

  return (
    <>
      {highlights && <Highlights highlights={highlights} />}
      <div
        className={classNames(className, 'grid gap-0.5')}
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(min-content, 4rem))',
        }}
      >
        {schedule.map(({ dayTimeCode, locationCode }, index) => (
          <div key={index}>
            <div
              className="text-[0.7rem] p-1 flex flex-col items-center justify-center rounded-lg border border-slate-200 dark:border-transparent bg-white dark:bg-slate-700 hover:bg-sky-50 dark:hover:bg-sky-900 hover:border-sky-400 dark:hover:border-sky-400 hover:shadow dark:shadow-inner hover:shadow-sky-300 dark:hover:shadow-sky-700"
              style={{
                lineHeight: '0.75rem',
              }}
              onMouseEnter={() => addHighlights([dayTimeCode], 'indigo')}
              onMouseLeave={() => removeHighlights([dayTimeCode])}
            >
              <div className="font-bold text-slate-800 dark:text-slate-300">
                {dayTimeCode}
              </div>
              <div className="text-slate-500 dark:text-slate-400">{locationCode}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubjectsDayTimeCells;
