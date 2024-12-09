import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/app/components/ui/Button';
import { Text } from '@/app/components/ui/Text';
import { cn } from '@/app/lib/ui/tw';

type DestinationProps = {
  location: string;
  imageSrc: string;
  href: string;
};

export function FeaturedDestination({ location, href, imageSrc }: DestinationProps) {
  return (
    <div className="relative h-60 overflow-hidden rounded p-4">
      <Image src={imageSrc} className="rounded-lg absolute object-cover" fill alt={location} />
      <Text as="h3" className="absolute font-semibold" color="inverse" size="lg">
        {location}
      </Text>
      <DestinationLink href={href} />
    </div>
  );
}

type DestinationLinkProps = {
  href: string;
};

function DestinationLink({ href }: DestinationLinkProps) {
  const cls = cn(buttonVariants(), 'absolute bottom-4 right-4');

  return (
    <Link className={cls} href={href}>
      View Details
    </Link>
  );
}
