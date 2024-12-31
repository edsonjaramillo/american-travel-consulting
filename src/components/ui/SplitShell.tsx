import Image, { type ImageProps } from 'next/image';

import { cn } from '@/lib/ui/tw';

type SplitShellProps = React.ComponentProps<'div'> & {
  form: React.ReactNode;
  image: ImageProps;
};

export function SplitShell({ image, form, children, className, ...props }: SplitShellProps) {
  const { className: imgClassNames, ...imgProps } = image;
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2" {...props}>
      <div
        className={cn(
          'mx-auto w-responsive md:w-half-responsive lg:mx-0 lg:ml-auto [&>div]:md:px-6',
          className,
        )}>
        {form}
      </div>
      <div className="relative h-[25rem] md:h-auto md:min-h-[45rem]">
        <Image
          className={cn('h-full w-full object-cover object-left', imgClassNames)}
          fill
          {...imgProps}
        />
        {children}
      </div>
    </div>
  );
}
