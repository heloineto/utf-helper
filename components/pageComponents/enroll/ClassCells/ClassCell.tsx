import { useContext } from 'react';
import classNames from 'clsx';
import { SettingsContext } from '@lib/context';
import { useColor } from '@lib/hooks';
import { Portal } from '@mui/material';

interface Props extends ComponentProps<'div'> {
  classObject: ClassObject;
  timeCode: string;
  dayCode: string;
  length: number;
}

const ClassCell = ({ classObject, timeCode, dayCode, length, ...divProps }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const [color] = useColor(classObject.subjectCode);

  return (
    <Portal
      container={document && document.getElementById(`schedule-${dayCode}${timeCode}`)}
    >
      <div
        className={classNames('flex absolute top-0 left-0 w-full cursor-pointer py-1')}
        style={{
          height: `${100 * length}%`,
        }}
        {...divProps}
      >
        <div
          className={classNames('w-full h-full rounded mx-1 p-1')}
          style={
            color &&
            (darkMode ? { backgroundColor: color[600] } : { backgroundColor: color[200] })
          }
        >
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
        </div>
      </div>
    </Portal>
  );
};

export default ClassCell;
