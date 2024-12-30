import { type VariantProps, tv } from 'tailwind-variants';

import { Responsive } from '@/components/ui/Responsive';
import { type As, Text } from '@/components/ui/Text';
import { cn } from '@/lib/ui/tw';

import { UnderlinePlane } from '../common/UnderlinePlane';

export const sectionVariants = tv({
  base: 'scroll-mt-12 py-16',
  variants: { background: { standard: 'bg-grayscale-50' } },
  defaultVariants: { background: 'standard' },
});

type SectionProps = React.ComponentProps<'section'> &
  VariantProps<typeof sectionVariants> & {
    id: string;
    headerAs: As;
    headerText: string;
    subheaderText?: string;
  };

export function Section({
  background,
  subheaderText,
  headerAs,
  headerText,
  children,
  className,
  id,
  ...props
}: SectionProps) {
  const sectionClass = cn(sectionVariants({ background }), className);
  return (
    <section id={id} className={sectionClass} {...props}>
      <Responsive>
        <div className="space-y-3 text-balance pb-12 text-center">
          <div className="relative mx-auto w-fit">
            <Text as={headerAs} size="4xl" className="font-bold">
              {headerText}
            </Text>
            <UnderlinePlane />
          </div>
          {subheaderText && (
            <Text as="p" color="neutral" className="mx-auto w-[min(_90%,37rem)] font-normal">
              {subheaderText}
            </Text>
          )}
        </div>
        {children}
      </Responsive>
    </section>
  );
}
