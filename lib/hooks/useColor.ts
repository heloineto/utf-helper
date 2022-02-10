import hash from '@lib/utils/typescript';
import twColors from 'tailwindcss/colors';

const useColor = (str: string) => {
  if (!twColors) return [undefined, undefined];

  const colorNames: (keyof typeof twColors)[] = [
    'slate',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];

  const colorName = colorNames[Math.abs(hash(str) % colorNames.length)];
  const color = twColors[colorName];

  return [color, colorName] as [typeof color, typeof colorName];
};

export default useColor;
