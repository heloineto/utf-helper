import { hash } from '@lib/utils/typescript';
import twColors from 'tailwindcss/colors';
import { TailwindColorGroup } from 'tailwindcss/tailwind-config';

const useColor = (str: string) => {
  const colorNames: (keyof TailwindColorGroup)[] = [
    'lime',
    'blue',
    'indigo',
    'rose',
    'yellow',
    'purple',
    'sky',
    'pink',
    'amber',
    'slate',
    'cyan',
    'green',
    'violet',
    'teal',
    'fuchsia',
    'orange',
    'emerald',
    'red',
  ];

  const colorName = colorNames[Math.abs(hash(str) % colorNames.length)];
  //@ts-ignore /* No index signature with a parameter of type 'string' was found on type 'TailwindColors' */
  let color: TailwindColorGroup = twColors[colorName];

  if (!color) color = twColors.slate;

  return { color, colorName };
};

export default useColor;
