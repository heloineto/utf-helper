import MainShell from '@components/appShells/MainShell';
import Captions from '@components/elements/calendar/Captions';
import Month from '@components/elements/calendar/Month';
import useCalendarData from '@lib/hooks/useCalendarData';

const Calendar: NextPage = () => {
  const { yearInfo } = useCalendarData();

  return (
    <MainShell>
      <div className="bg-gray-50 dark:bg-slate-800 p-5 h-full overflow-y-scroll">
        <Captions />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
          {Array.from({ length: 12 }, (_, idx) => (
            <Month key={idx} month={idx + 1} monthInfo={yearInfo.months[idx]} />
          ))}
        </div>
      </div>
    </MainShell>
  );
};

export default Calendar;
