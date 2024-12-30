'use client';

import { useFormContext } from 'react-hook-form';

import { labelCls } from '@/components/ui/Text';
import { cn } from '@/lib/ui/tw';

type LabelProps = React.ComponentProps<'label'> & { field: string };
export function Label({ className, children, field, ...props }: LabelProps) {
  const { formState } = useFormContext();
  return (
    <label
      id={`${field}-label`}
      htmlFor={`${field}-input`}
      className={cn(labelCls, formState.errors[field] && 'text-error', className)}
      {...props}>
      {children}
    </label>
  );
}
