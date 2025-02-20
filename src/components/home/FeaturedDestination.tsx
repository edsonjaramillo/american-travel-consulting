import Link from 'next/link';

import { Destination } from '@/cms/types';
import { buttonVariants } from '@/components/ui/Button';
import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/ui/tw';

type DestinationProps = {
  destination: Destination;
};

// position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent

export function FeaturedDestination({ destination }: DestinationProps) {
  return (
    <div className="group/featured-destination relative h-64 overflow-hidden rounded p-4">
      <img
        src={destination.main.url}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover duration-base group-hover/featured-destination:scale-110"
        alt={destination.name}
        loading="lazy"
      />
      <Text as="h3" className="absolute font-semibold" color="inverse" size="xl">
        {destination.name}
      </Text>
      <DestinationLink href={`/destinations/${destination.slug}`} />
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
