import hash from '@lib/utils/typescript';
import twColors from 'tailwindcss/colors';
import { TailwindColorGroup } from 'tailwindcss/tailwind-config';

const useColor = (str: string) => {
  if (!twColors) return [undefined, undefined];

  const colorNames: (keyof TailwindColorGroup)[] = [
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
  //@ts-ignore /* No index signature with a parameter of type 'string' was found on type 'TailwindColors' */
  const color: TailwindColorGroup = twColors[colorName];

  return [color, colorName] as [typeof color, typeof colorName];
};

export default useColor;
