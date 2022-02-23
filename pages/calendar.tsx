import Month from '@components/elements/calendar/Month';

const Calendar: NextPage = () => {
  return (
    <div className="bg-slate-700 p-5 lg:p-10">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5">
        {Array.from({ length: 12 }, (_, idx) => (
          <Month key={idx} month={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
