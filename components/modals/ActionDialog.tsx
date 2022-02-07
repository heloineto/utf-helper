import { CheckIcon, ExclamationIcon } from '@heroicons/react/outline';
import {
  Button,
  ButtonProps,
  Dialog,
  DialogProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import classNames from 'clsx';
import { useMemo } from 'react';

interface Props {
  title?: ReactNode;
  subtitle?: ReactNode;
  variant?: 'success' | 'warning';
  preview?: ReactNode;
  actionButtons?: ({ label: string } & ButtonProps)[];
}

const ActionDialog = ({
  open,
  onClose,
  title,
  subtitle,
  preview,
  actionButtons = [],
  variant = 'success',
}: Props & Omit<DialogProps, keyof Props>) => {
  const { breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down('md'));

  const variantData = useMemo(
    () => ({
      success: {
        Icon: CheckIcon,
      },
      warning: {
        Icon: ExclamationIcon,
      },
    }),
    []
  );

  const { Icon } = variantData[variant];

  return (
    <Dialog
      fullScreen={mobile}
      maxWidth={'sm'}
      fullWidth={true}
      open={open}
      onClose={onClose}
      classes={{
        paper: 'bg-white dark:bg-slate-900 p-5',
      }}
    >
      <div>
        <div
          className={classNames(
            variant === 'success' && 'bg-green-100 dark:bg-green-600',
            variant === 'warning' && 'bg-red-100 dark:bg-red-600',
            'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full'
          )}
        >
          <Icon
            className={classNames(
              variant === 'success' && 'text-green-600 dark:text-green-200',
              variant === 'warning' && 'text-red-600 dark:text-red-200',
              'h-6 w-6'
            )}
            aria-hidden="true"
          />
        </div>
        <div className="mt-3 text-center">
          <div className="text-lg leading-6 font-medium text-slate-900 dark:text-slate-200">
            {title}
          </div>
          <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {subtitle}
          </div>
          {preview}
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {actionButtons.map(({ className, label, onClick, ...rest }) => {
          return (
            <Button
              key={label}
              className={classNames(
                className,
                'w-full rounded-md py-2 text-base text-white'
              )}
              onClick={onClick}
              {...rest}
            >
              {label}
            </Button>
          );
        })}
      </div>
    </Dialog>
  );
};

export default ActionDialog;
