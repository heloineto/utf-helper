import Captions from '@components/pageComponents/calendar/Captions';
import Month from '@components/pageComponents/calendar/Month';
import { yearInfo } from '@lib/constants/calendar/yearInfo';

const CalendarPage: NextPage = () => {
    return (
        <div className="p-2 sm:p-5 h-full overflow-y-scroll">
            <Captions />
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-2.5 gap-y-5">
                {Array.from({ length: 12 }, (_, idx) => (
                    <Month
                        key={idx}
                        month={idx + 1}
                        monthInfo={yearInfo.months[idx]}
                    />
                ))}
            </div>
        </div>
    );
};

export default CalendarPage;
