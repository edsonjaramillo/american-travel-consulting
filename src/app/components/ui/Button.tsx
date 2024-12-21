import { type VariantProps, tv } from 'tailwind-variants';

import { cn } from '@/app/lib/ui/tw';

export const buttonVariants = tv({
  base: 'flex h-9 items-center justify-center whitespace-nowrap rounded px-4 py-2 text-small font-medium text-grayscale-inverse shadow transition-colors duration-base',
  variants: {
    color: {
      primary: 'bg-primary hover:bg-primary-dark',
      success: 'bg-success text-success-light hover:bg-success-dark',
      error: 'bg-error text-error-light hover:bg-error-dark',
      info: 'bg-info text-info-light hover:bg-info-dark',
      warning: 'bg-warning text-warning-light hover:bg-warning-dark',
      ghost: 'bg-grayscale-50 text-grayscale-800 hover:bg-grayscale-100 hover:text-grayscale-900',
    },
    disabled: {
      true: 'cursor-not-allowed bg-grayscale-300 text-grayscale-500 hover:bg-grayscale-300 hover:text-grayscale-500',
    },
    width: {
      full: 'w-full',
    },
  },
  defaultVariants: { color: 'primary' },
});

type ButtonCore = React.ComponentProps<'button'>;
type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps = ButtonCore &
  ButtonVariants & {
    type: ButtonCore['type'];
    iconStart?: React.ReactNode;
    iconEnd?: React.ReactNode;
  };

export function Button({
  children,
  className,
  color,
  disabled,
  iconEnd,
  iconStart,
  type,
  width,
  ...props
}: ButtonProps) {
  const cls = cn(buttonVariants({ color, disabled, width }), className);
  return (
    <button type={type} className={cls} disabled={disabled} {...props}>
      {iconStart}
      {children}
      {iconEnd}
    </button>
  );
}
