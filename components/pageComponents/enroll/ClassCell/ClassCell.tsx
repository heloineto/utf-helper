import { useContext } from 'react';
import classNames from 'clsx';
import { SettingsContext } from '@lib/context';
import { useColor } from '@lib/hooks';
import { limitText } from '@lib/utils/typescript';

interface Props extends ComponentProps<'div'> {
  classObject: ClassObject;
  length: number;
}

const ClassCell = ({ classObject, length, onClick, ...divProps }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const { color } = useColor(classObject.subjectCode);

  return (
    <div
      className={classNames('flex absolute top-0 left-0 w-full cursor-pointer py-1 z-50')}
      style={{ height: `${100 * length}%` }}
      onClick={onClick}
      {...divProps}
    >
      <div
        className="w-full h-full rounded mx-1 p-1 text-left flex flex-col"
        style={{ backgroundColor: color[darkMode ? 600 : 200] }}
      >
        <div
          className="font-semibold break-all overflow-hidden text-ellipsis"
          style={{
            color: color[darkMode ? 100 : 800],
            lineHeight: '.9rem',
          }}
        >
          {limitText(classObject.subjectName, 50)}
        </div>
        <div
          className="text-[0.7rem] font-medium"
          style={{ color: color[darkMode ? 200 : 600] }}
        >
          {`${classObject.subjectCode} - ${classObject.code}`}
        </div>
        <div
          className="text-[0.7rem] font-medium -mt-0.5"
          style={{ color: color[darkMode ? 200 : 600] }}
        >
          {classObject.framing === 'P'
            ? 'Presencial'
            : classObject.framing === 'H'
            ? 'Híbrida'
            : 'Remota'}
        </div>
      </div>
    </div>
  );
};

export default ClassCell;
