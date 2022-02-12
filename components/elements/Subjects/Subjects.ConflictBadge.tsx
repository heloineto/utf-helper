import { SettingsContext } from '@lib/context';
import { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { TrashIcon } from '@heroicons/react/outline';
import { useColor } from '@lib/hooks';

type Props = {
  classObject: ClassObject;
  dayTimeCodes: string[];
  onRemove: () => void;
};

const SubjectsConflictBadge = ({ classObject, dayTimeCodes, onRemove }: Props) => {
  const { code, subjectCode, subjectName } = classObject;
  const [color] = useColor(subjectCode);
  const { darkMode } = useContext(SettingsContext);

  return (
    <div
      className="gap-x-1 pl-4 pr-2 py-1 max-w-max rounded-full flex items-center text-sm font-medium"
      style={
        color &&
        (darkMode
          ? {
              backgroundColor: color[600],
              color: color[100],
            }
          : {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: color[500],
              backgroundColor: color[100],
              color: color[500],
            })
      }
    >
      <div className="w-full">
        {code} - {subjectName} ({dayTimeCodes.join(', ')})
      </div>
      <Tooltip title={`Remover ${code} - ${subjectName}`} arrow>
        <IconButton
          style={color && (darkMode ? { color: color[100] } : { color: color[500] })}
          onClick={onRemove}
        >
          <TrashIcon className="h-[1.1rem] w-auto" />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default SubjectsConflictBadge;
