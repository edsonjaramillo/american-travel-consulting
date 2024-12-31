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
          'mx-auto w-responsive md:ml-auto md:mr-0 md:w-half-responsive [&>div]:md:px-16',
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
