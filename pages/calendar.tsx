import MainShell from '@components/appShells/MainShell';
import Month from '@components/elements/calendar/Month';
import useCalendarData from '@lib/hooks/useCalendarData';

const Calendar: NextPage = () => {
  const { yearInfo, captions } = useCalendarData();

  return (
    <MainShell>
      <div className="bg-gray-50 dark:bg-slate-800 p-5 h-full overflow-y-scroll">
        {/* <div className="h-40 border rounded-lg mb-5 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5">
          {captions.map(({ label, color, symbol }) => {
            return (
              <div key={color ?? symbol} className="h-10">
                <div></div>
                <div>{label}</div>
              </div>
            );
          })}
        </div> */}
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
