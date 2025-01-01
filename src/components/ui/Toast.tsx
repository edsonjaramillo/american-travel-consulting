import { Toaster } from 'sonner';

import { cn } from '@/lib/ui/tw';

const errorToast = cn('!border-error-light !bg-error-light !text-error');
const infoToast = cn('!border-info-light !bg-info-light !text-info');
const successToast = cn('!border-success-light !bg-success-light !text-success');
const warningToast = cn('!border-warning-light !bg-warning-light !text-warning');

export const DEFAULT_DURATION = 2500;

export function Toast() {
  return (
    <Toaster
      duration={DEFAULT_DURATION}
      position="top-right"
      richColors
      visibleToasts={3}
      toastOptions={{
        classNames: {
          error: errorToast,
          info: infoToast,
          success: successToast,
          loading: infoToast,
          warning: warningToast,
        },
      }}
    />
  );
}
