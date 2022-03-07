import { useContext, useEffect, useState } from 'react';
import classNames from 'clsx';
import { useTimeCodes } from '@lib/hooks';
import { HighlightContext, SettingsContext, UserDataContext } from '@lib/context';
import { useColor } from '@lib/hooks';

interface Props extends ComponentProps<'div'> {
  classObject: ClassObject;
  timeCode: string;
  dayCode: string;
}

const ScheduleClassCell = ({ classObject, timeCode, dayCode, ...divProps }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const { schedule } = useContext(UserDataContext);
  const timeCodes = useTimeCodes();
  const [sameClass, setSameClass] = useState({ above: false, below: false });
  const [color] = useColor(classObject.subjectCode);

  console.log('hi');
  console.log({ highlights });

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
  }, [timeCodes, timeCode, classObject, schedule, dayCode]);

  return (
    <div
      className={classNames(
        sameClass.below && sameClass.above && 'h-[calc(100%+1px)]',
        'flex absolute top-0 left-0 w-full h-full cursor-pointer'
      )}
      {...divProps}
    >
      <div
        className={classNames(
          sameClass.below && 'rounded-b-none mt-1',
          sameClass.above && 'rounded-t-none -mt-1',
          'w-full h-full rounded mx-1 p-1'
        )}
        style={
          color &&
          (darkMode ? { backgroundColor: color[600] } : { backgroundColor: color[200] })
        }
      >
        {!sameClass.above && (
          <div className="z-10 relative text-left">
            <div
              className="font-bold break-all"
              style={color && (darkMode ? { color: color[100] } : { color: color[800] })}
            >
              {classObject.subjectName}
            </div>
            <div
              className="text-[0.7rem] font-medium"
              style={color && (darkMode ? { color: color[200] } : { color: color[600] })}
            >
              {`${classObject.subjectCode} - ${classObject.code}`}
            </div>
            <div
              className="text-[0.7rem] font-medium -mt-0.5"
              style={color && (darkMode ? { color: color[200] } : { color: color[600] })}
            >
              {classObject.framing === 'P'
                ? 'Presencial'
                : classObject.framing === 'H'
                ? 'Híbrida'
                : 'Remota'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleClassCell;
