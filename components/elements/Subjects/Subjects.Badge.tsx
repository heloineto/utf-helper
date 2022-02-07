import { SettingsContext } from '@lib/context';
import useTailwindColors from '@lib/hooks/useTailwindColors';
import { getSubjectType } from '@lib/utils/schedule';
import classNames from 'clsx';
import { useContext } from 'react';
import { TailwindThemeColors } from 'tailwindcss/tailwind-config';

type Props = { subject: Subject };

const SubjectsBadge = ({ subject, className }: Props & ComponentProps<'span'>) => {
  const { darkMode } = useContext(SettingsContext);
  const tailwindColors = useTailwindColors();
  const { label, colorName } = getSubjectType(subject);
  const color = tailwindColors?.[colorName as keyof TailwindThemeColors];

  return (
    <span
      className={classNames(
        className,
        'ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
      )}
      style={
        color &&
        (darkMode
          ? {
              backgroundColor: color[600],
              color: color[200],
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
      {label}
    </span>
  );
};

export default SubjectsBadge;
