import { useContext } from 'react';
import classNames from 'clsx';
import { SettingsContext } from '@lib/context';
import { useColor } from '@lib/hooks';
import { Portal } from '@mui/material';
import { limitText } from '@lib/utils/typescript';

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
          className="w-full h-full rounded mx-1 p-1 text-left flex flex-col"
          style={{
            backgroundColor: color ? color[darkMode ? 600 : 200] : undefined,
          }}
        >
          <div
            className="font-semibold break-all overflow-hidden text-ellipsis"
            style={{
              color: color ? color[darkMode ? 100 : 800] : undefined,
              lineHeight: '.9rem',
            }}
          >
            {limitText(classObject.subjectName, 50)}
          </div>
          <div
            className="text-[0.7rem] font-medium"
            style={{
              color: color ? color[darkMode ? 200 : 600] : undefined,
            }}
          >
            {`${classObject.subjectCode} - ${classObject.code}`}
          </div>
          <div
            className="text-[0.7rem] font-medium -mt-0.5"
            style={{
              color: color ? color[darkMode ? 200 : 600] : undefined,
            }}
          >
            {classObject.framing === 'P'
              ? 'Presencial'
              : classObject.framing === 'H'
              ? 'Híbrida'
              : 'Remota'}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default ClassCell;
