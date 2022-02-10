import hash from '@lib/utils/typescript';
import useTailwindColors from './useTailwindColors';

const useColor = (str: string) => {
  const tailwindColors = useTailwindColors();

  if (!tailwindColors) return [undefined, undefined];

  const tailwindColorsNames = [
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

  const colorName = tailwindColorsNames[Math.abs(hash(str) % tailwindColorsNames.length)];
  const color = tailwindColors[colorName as keyof typeof tailwindColors];

  return [color, colorName] as [typeof color, typeof colorName];
};

export default useColor;
