import useTailwindColors from '@lib/hooks/useTailwindColors';
import { getSubjectType } from '@lib/utils/schedule';
import classNames from 'clsx';

type Props = { subject: Subject };

const SubjectsBadge = ({ subject }: Props) => {
  const tailwindColors = useTailwindColors();

  const { value, label } = getSubjectType(subject);

  let className = '';

  switch (value) {
    case 'optional':
      className =
        'bg-orange-100 text-orange-500 border border-orange-500 dark:border-transparent dark:bg-orange-500 dark:text-orange-200';
      break;
    case 'equivalent':
      className =
        'bg-orange-100 text-orange-500 border border-orange-500 dark:border-transparent dark:bg-orange-500 dark:text-orange-200';
      break;
    case '1':
      className =
        'bg-pink-100 text-pink-500 border border-pink-500 dark:border-transparent dark:bg-pink-500 dark:text-pink-200';
      break;
    case '2':
      className =
        'bg-purple-100 text-purple-500 border border-purple-500 dark:border-transparent dark:bg-purple-500 dark:text-purple-200';
      break;
    case '3':
      className =
        'bg-indigo-100 text-indigo-500 border border-indigo-500 dark:border-transparent dark:bg-indigo-500 dark:text-indigo-200';
      break;
    case '4':
      className =
        'bg-sky-100 text-sky-500 border border-sky-500 dark:border-transparent dark:bg-sky-500 dark:text-sky-200';
      break;
    case '5':
      className =
        'bg-teal-100 text-teal-500 border border-teal-500 dark:border-transparent dark:bg-teal-500 dark:text-teal-200';
      break;
    case '6':
      className =
        'bg-green-100 text-green-500 border border-green-500 dark:border-transparent dark:bg-green-500 dark:text-green-200';
      break;
    case '7':
      className =
        'bg-lime-100 text-lime-500 border border-lime-500 dark:border-transparent dark:bg-lime-500 dark:text-lime-200';
      break;
    case '8':
      className =
        'bg-yellow-100 text-yellow-500 border border-yellow-500 dark:border-transparent dark:bg-yellow-500 dark:text-yellow-200';
      break;
    default:
      className =
        'bg-slate-100 text-slate-500 border border-slate-500 dark:border-transparent dark:bg-slate-500 dark:text-slate-200';
      break;
  }

  return (
    <span
      className={classNames(
        className,
        'ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
      )}
    >
      {label}
    </span>
  );
};

export default SubjectsBadge;
