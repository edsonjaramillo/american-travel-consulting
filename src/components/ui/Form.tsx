import { cn } from '@/lib/ui/tw';

type FormProps = React.ComponentProps<'form'>;
export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={cn('space-y-4 accent-primary', className)} noValidate {...props}>
      {children}
    </form>
  );
}
