import { cn } from '@/app/lib/ui/tw';

type ResponsiveProperties = React.ComponentProps<'div'>;
export function Responsive({ children, className, ...properties }: ResponsiveProperties) {
  return (
    <div className={cn('mx-auto w-responsive', className)} {...properties}>
      {children}
    </div>
  );
}
