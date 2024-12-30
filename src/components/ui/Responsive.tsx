import { cn } from '@/lib/ui/tw';

type ResponsiveProps = React.ComponentProps<'div'>;
export function Responsive({ children, className, ...props }: ResponsiveProps) {
  return (
    <div className={cn('mx-auto w-responsive', className)} {...props}>
      {children}
    </div>
  );
}
