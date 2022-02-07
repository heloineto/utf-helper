import { useContext, useEffect, useState } from 'react';
import classNames from 'clsx';
import { useTimeCodes } from '@lib/hooks';
import { SettingsContext } from '@lib/context';

type Props = {
  classObject: ClassObject;
  timeCode: string;
  dayCode: string;
};

const ScheduleClassCell = ({ classObject, timeCode, dayCode }: Props) => {
  const { schedule } = useContext(SettingsContext);
  const timeCodes = useTimeCodes();
  const [sameClass, setSameClass] = useState({ above: false, below: false });

  useEffect(() => {
    if (!schedule) return;

    const timeCodeIndex = timeCodes.indexOf(timeCode);
    const nextTimeCode: string | undefined = timeCodes[timeCodeIndex + 1];
    const prevTimeCode: string | undefined = timeCodes[timeCodeIndex - 1];

    if (nextTimeCode) {
      const nextClass = schedule[nextTimeCode].days[dayCode];

      if (
        nextClass &&
        nextClass.code === classObject.code &&
        nextClass.subjectCode === classObject.subjectCode
      )
        setSameClass((value) => ({ ...value, below: true }));
    }

    if (prevTimeCode) {
      const prevClass = schedule[prevTimeCode].days[dayCode];

      if (
        prevClass &&
        prevClass.code === classObject.code &&
        prevClass.subjectCode === classObject.subjectCode
      )
        setSameClass((value) => ({ ...value, above: true }));
    }
  }, [timeCodes, timeCode, classObject, schedule]);

  return (
    <div className={classNames('flex absolute top-0 left-0 w-full h-full')}>
      <div
        className={classNames(
          sameClass.below && 'rounded-b-none mt-1',
          sameClass.above && 'rounded-t-none -mt-1',
          'bg-sky-200 dark:bg-sky-500 w-full h-full rounded-md mx-1 p-1'
        )}
      >
        {!sameClass.above && (
          <div className="text-sky-800 dark:text-sky-200 font-bold z-10 relative text-left">
            {classObject.subjectName}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleClassCell;
