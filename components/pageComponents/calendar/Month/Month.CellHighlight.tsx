import { MouseEvent, useContext, useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import classNames from 'clsx';
import { colord } from 'colord';
import { SettingsContext } from '@lib/context';
import { CircleIcon, TriangleIcon } from '@components/decoration/icons/outlined';
import twColors from 'tailwindcss/colors';

type Props = {
  isToday: boolean;
};

const MonthCellHighlight = ({ isToday }: Props) => {
  const { darkMode } = useContext(SettingsContext);
  const highlightColors = useMemo(() => {
    const color = colord(darkMode ? twColors['sky'][600] : twColors['sky'][300]);

    return [color.alpha(0.3).toRgbString(), color.alpha(0.4).toRgbString()];
  }, []);

  return (
    <div
      className={classNames(
        isToday ? 'ring-2 ring-inset ring-sky-500' : 'hidden',
        'absolute w-full h-full top-0 left-0 rounded-md'
      )}
      style={{
        background: `repeating-linear-gradient(45deg, ${highlightColors[0]}, ${highlightColors[0]} 0.25rem, ${highlightColors[1]} 0.25rem, ${highlightColors[1]} 0.5rem)`,
      }}
    />
  );
};

export default MonthCellHighlight;
