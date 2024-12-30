import Image from 'next/image';
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
      className="group/destination-card overflow-hidden rounded shadow-md">
      <div className="relative block h-48 overflow-hidden">
        <Image
          className="object-cover duration-base group-hover/destination-card:scale-110"
          src={destination.main.url}
          alt={destination.name}
          fill
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
