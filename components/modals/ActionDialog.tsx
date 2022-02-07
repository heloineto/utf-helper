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
  title?: string;
  subtitle?: string;
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
}: Props & DialogProps) => {
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
    >
      <div className="p-5 bg-white dark:bg-slate-900">
        <div>
          <div
            className={classNames(
              variant === 'success' && 'bg-green-100',
              variant === 'warning' && 'bg-red-100',
              'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full'
            )}
          >
            <Icon
              className={classNames(
                variant === 'success' && 'text-green-600',
                variant === 'warning' && 'text-red-600',
                'h-6 w-6'
              )}
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center">
            <div className="text-lg leading-6 font-medium text-gray-900">{title}</div>
            <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
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
      </div>
    </Dialog>
  );
};

export default ActionDialog;
