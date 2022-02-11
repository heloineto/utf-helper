import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import { SnackbarProvider } from 'notistack';

type Props = {
  children: ReactNode;
};

const CustomSnackbarProvider = ({ children }: Props) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      iconVariant={{
        success: <CheckCircleIcon className="h-6 w-auto text-green-500 mr-2" />,
        error: <XCircleIcon className="h-6 w-auto text-red-500 mr-2" />,
        warning: <ExclamationCircleIcon className="h-6 w-auto text-orange-500 mr-2" />,
        info: <InformationCircleIcon className="h-6 w-auto text-blue-500 mr-2" />,
      }}
      classes={{
        variantSuccess:
          'bg-green-200 text-green-900 shadow-lg border border-green-400 rounded-md font-bold',
        variantError:
          'bg-red-200 text-red-900 shadow-lg border border-red-400 rounded-md font-bold',
        variantWarning:
          'bg-orange-200 text-orange-900 shadow-lg border border-orange-400 rounded-md font-bold',
        variantInfo:
          'bg-blue-200 text-blue-900 shadow-lg border border-blue-400 rounded-md font-bold',
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;
