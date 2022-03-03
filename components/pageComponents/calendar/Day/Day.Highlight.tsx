import { useContext, useMemo } from 'react';
import classNames from 'clsx';
import { colord } from 'colord';
import { SettingsContext } from '@lib/context';
import twColors from 'tailwindcss/colors';

interface Props extends ComponentProps<'div'> {
  isToday: boolean;
  isSelected: boolean;
}

const DayHighlight = ({ isToday, isSelected, className, ...divProps }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const highlightColors = useMemo(() => {
    let hexColor = '#000000';

    if (isToday) {
      hexColor = darkMode ? twColors['sky'][600] : twColors['sky'][300];
    } else if (isSelected) {
      hexColor = darkMode ? twColors['indigo'][800] : twColors['indigo'][800];
    }

    const color = colord(hexColor);

    return [color.alpha(0.3).toRgbString(), color.alpha(0.4).toRgbString()];
  }, [darkMode, isToday, isSelected]);

  return (
    <div
      className={classNames(
        className,
        !isToday && !isSelected && 'hidden',
        isToday && '!ring-sky-500',
        isSelected && 'ring-indigo-500',
        'absolute w-full h-full top-0 left-0 ring-2 ring-inset rounded-md'
      )}
      style={{
        background: `repeating-linear-gradient(45deg, ${highlightColors[0]}, ${highlightColors[0]} 0.25rem, ${highlightColors[1]} 0.25rem, ${highlightColors[1]} 0.5rem)`,
      }}
      {...divProps}
    />
  );
};

export default DayHighlight;
