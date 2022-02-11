import { SettingsContext } from '@lib/context';
import { useColor } from '@lib/hooks';
import classNames from 'clsx';
import { useContext } from 'react';

type Props = { subject: Subject };

const SubjectsBadge = ({
  subject,
  className,
}: Props & Omit<ComponentProps<'span'>, keyof Props>) => {
  const { darkMode } = useContext(SettingsContext);
  const [color] = useColor(subject.code);

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
      {subject.weeklyLessons}
    </span>
  );
};

export default SubjectsBadge;
