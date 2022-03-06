import classNames from 'clsx';
import { Placeholder } from 'phosphor-react';

interface Props extends ComponentProps<'div'> {
  title: string;
  subtitle?: string;
  Icon?: PhosphorIcon;
  classes?: { icon: string };
}

const EmptyState = ({
  title,
  subtitle,
  Icon = Placeholder,
  classes,
  className,
  ...divProps
}: Props) => {
  return (
    <div
      className={classNames(
        className,
        'text-center flex flex-col justify-center items-center'
      )}
      {...divProps}
    >
      <Icon className={classNames('mx-auto h-12 w-12 text-gray-400', classes?.icon)} />
      <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default EmptyState;
