import { useContext, useMemo } from 'react';
import classNames from 'clsx';
import { colord } from 'colord';
import { SettingsContext } from '@lib/context';
import twColors from 'tailwindcss/colors';

type Props = {
  isToday: boolean;
  isSelected: boolean;
};

const MonthCellHighlight = ({ isToday, isSelected }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const highlightColors = useMemo(() => {
    const twColor = isToday ? twColors['sky'] : twColors['indigo'];
    const color = colord(darkMode ? twColor[600] : twColor[300]);

    return [color.alpha(0.3).toRgbString(), color.alpha(0.4).toRgbString()];
  }, []);

  return (
    <div
      className={classNames(
        !isToday && !isSelected && 'hidden',
        isToday && 'ring-2 ring-inset ring-sky-500',
        isSelected && 'ring-2 ring-inset ring-indigo-500',
        'absolute w-full h-full top-0 left-0 rounded-md'
      )}
      style={{
        background: `repeating-linear-gradient(45deg, ${highlightColors[0]}, ${highlightColors[0]} 0.25rem, ${highlightColors[1]} 0.25rem, ${highlightColors[1]} 0.5rem)`,
      }}
    />
  );
};

export default MonthCellHighlight;
