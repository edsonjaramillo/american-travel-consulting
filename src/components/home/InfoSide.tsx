'use client';

import Link from 'next/link';

import { buttonVariants } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { useSlideshow } from '@/context/SlideshowContext';
import { cn } from '@/lib/ui/tw';

export function InfoSide() {
  const { currentImage } = useSlideshow();

  const needsWhiteText = currentImage?.isDarkImage;

  const quoteLinkCls = cn(buttonVariants(), 'mr-auto w-fit');
  return (
    <div className="flex flex-col justify-center gap-4">
      <Text
        as="h1"
        size="cta"
        color={needsWhiteText ? 'inverse' : 'standard'}
        className="text-5xl font-bold transition-colors duration-slideshow">
        Always Travel Confidently
      </Text>
      <Text
        as="p"
        color={needsWhiteText ? 'inverse' : 'standard'}
        size="subheader"
        className="text-pretty text-2xl font-medium transition-colors duration-slideshow">
        Enjoy your next group trip from start to finish without a worry in the world.
      </Text>
      <Link href="/contact" className={quoteLinkCls}>
        Get a Quote
      </Link>
    </div>
  );
}
