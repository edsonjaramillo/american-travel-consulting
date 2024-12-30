import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/ui/tw';

export function CTA() {
  const quoteLinkCls = cn(buttonVariants(), 'mx-auto w-fit');
  return (
    <div className="relative flex h-[80vh] items-center justify-center">
      <Image
        src="https://picsum.photos/id/79/1920/1080"
        className="object-cover"
        fill
        alt="Orlando, Florida"
      />
      <div className="absolute flex flex-col gap-4 text-center">
        <Text as="h1" size="cta" color="inverse" className="text-5xl font-bold">
          Always Travel Confidently
        </Text>
        <Text
          as="p"
          color="inverse"
          size="subheader"
          className="max-w-[40rem] text-pretty text-2xl">
          Enjoy your next group trip from start to finish without a worry in the world.
        </Text>
        <Link href="/contact" className={quoteLinkCls}>
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
