import { SettingsContext } from '@lib/context';
import { colord } from 'colord';
import { useContext, useMemo } from 'react';
import twColors from 'tailwindcss/colors';

type Props = {
  highlightColor: string;
};

const ScheduleClassCellHighlight = ({ highlightColor }: Props) => {
  // const { darkMode } = useContext(SettingsContext);

  const highlightColors = useMemo(() => {
    const hexColor = (twColors as any)[highlightColor][500];

    const color = colord(hexColor);

    return [color.alpha(0.6).toRgbString(), color.alpha(0.8).toRgbString()];
  }, [highlightColor]);

  return (
    <div
      className="absolute top-0 left-0 h-full w-full z-50"
      style={{
        background: `repeating-linear-gradient(45deg, ${highlightColors[0]}, ${highlightColors[0]} 0.25rem, ${highlightColors[1]} 0.25rem, ${highlightColors[1]} 0.5rem)`,
      }}
    />
  );
};

export default ScheduleClassCellHighlight;
