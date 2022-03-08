import { DateTime } from 'luxon';
import classNames from 'clsx';
import { CircleIcon, TriangleIcon } from '@components/decoration/icons/outlined';

interface Props extends ComponentProps<'div'> {
  dayDate: DateTime;
  dayInfo?: DayInfo;
  classes?: {
    dot?: string;
  };
  color: string;
  lighterColor: string;
  isAnotherMonth: boolean;
  isSunday: boolean;
}

const DayLabel = ({
  className,
  dayInfo,
  dayDate,
  classes,
  color,
  lighterColor,
  isAnotherMonth,
  isSunday,
}: Props) => {
  if (dayInfo?.legend?.symbol === '◯') {
    return <CircleIcon className="m-auto" strokeWidth={3} />;
  }

  if (dayInfo?.legend?.symbol === '△') {
    return <TriangleIcon className="m-auto" strokeWidth={3} />;
  }

  return (
    <>
      <div className={classNames(className, 'text-md w-full text-right mr-1.5')}>
        {dayDate.day}
      </div>
      {!isAnotherMonth && (!isSunday || !!dayInfo?.legend) && (
        <div
          className={classNames(
            classes?.dot,
            'h-2 w-2 mt-auto mb-1.5 bg-white rounded-full'
          )}
          style={{
            background: color
              ? `linear-gradient(225deg, ${color} 0%, ${lighterColor} 100%)`
              : '',
          }}
        />
      )}
    </>
  );
};

export default DayLabel;
