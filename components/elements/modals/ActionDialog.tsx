import { SettingsContext } from '@lib/context';
import { Button, ButtonProps, Dialog, DialogProps } from '@mui/material';
import classNames from 'clsx';
import { Check, Info, Warning } from 'phosphor-react';
import { useContext, useMemo } from 'react';
import twColors from 'tailwindcss/colors';

interface Props extends DialogProps {
  title?: string;
  subtitle?: string;
  Icon: PhosphorIcon;
  preview?: ReactNode;
  actionButtons?: ({ label: string } & ButtonProps)[];
  colorName: keyof typeof twColors;
}

const ActionDialog = ({
  open,
  onClose,
  title,
  subtitle,
  preview,
  actionButtons = [],
  Icon,
  colorName,
}: Props) => {
  const { darkMode } = useContext(SettingsContext);

  const color = twColors[colorName];

  return (
    <Dialog
      maxWidth={'sm'}
      fullWidth={true}
      open={open}
      onClose={onClose}
      classes={{
        paper:
          'bg-white dark:bg-slate-900 p-5 ring-1 ring-slate-700/5 dark:ring-white/10',
      }}
    >
      <div>
        <div
          className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full"
          style={{
            backgroundColor: color[darkMode ? 600 : 100],
          }}
        >
          <Icon
            className="h-6 w-6"
            weight="bold"
            aria-hidden="true"
            style={{
              color: color[darkMode ? 200 : 600],
            }}
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
