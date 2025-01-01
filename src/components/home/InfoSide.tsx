'use client';

import Link from 'next/link';

import { SlideshowTextColor } from '@/cms/types';
import { buttonVariants } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { useSlideshow } from '@/context/SlideshowContext';
import { cn } from '@/lib/ui/tw';

export function InfoSide() {
  const { currentImage } = useSlideshow();
  if (!currentImage) return null;

  const textColor = textColorSelector(currentImage.textColor);
  const quoteLinkCls = cn(buttonVariants(), 'mx-auto w-fit md:mx-0 md:mr-auto');
  return (
    <div className="flex flex-col justify-center gap-4">
      <Text
        as="h1"
        size="cta"
        color={textColor}
        className="text-center text-5xl font-bold transition-colors duration-slideshow md:text-left">
        Always Travel Confidently
      </Text>
      <Text
        as="p"
        color={textColor}
        size="subheader"
        className="text-pretty text-center text-2xl font-medium transition-colors duration-slideshow md:text-left">
        Enjoy your next group trip from start to finish without a worry in the world.
      </Text>
      <Link href="/contact" className={quoteLinkCls}>
        Get a Quote
      </Link>
    </div>
  );
}

function textColorSelector(color: SlideshowTextColor) {
  switch (color) {
    case 'white':
      return 'inverse';
    case 'red':
      return 'secondary';
    case 'blue':
      return 'primary';
  }
}
