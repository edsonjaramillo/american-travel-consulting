import Link from 'next/link';

import { type Destination } from '@/cms/types';
import { Text } from '@/components/ui/Text';

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      aria-label={`View ${destination.name}`}
      className="group/destination-card overflow-hidden rounded shadow-md">
      <div className="relative block h-48 overflow-hidden">
        <img
          src={destination.main.url}
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover duration-base group-hover/destination-card:scale-110"
          alt={destination.name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <Text as="h2" size="xl" className="line-clamp-1 font-semibold">
          {destination.name}
        </Text>
        <Text as="p" color="neutral">
          {destination.description}
        </Text>
      </div>
    </Link>
  );
}
