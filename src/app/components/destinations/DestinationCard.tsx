import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@/app/components/ui/Text';

type DestinationCardProps = {
  imgSrc: string;
  location: string;
  description: string;
  href: string;
};

export function DestinationCard({ imgSrc, location, description, href }: DestinationCardProps) {
  return (
    <Link href={href} className="group/destination-card overflow-hidden rounded shadow-md">
      <div className="relative block h-48 overflow-hidden">
        <Image
          src={imgSrc}
          fill
          alt={location}
          className="object-cover duration-base group-hover/destination-card:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <Text as="h2" size="xl" className="line-clamp-1 font-semibold">
          {location}
        </Text>
        <Text as="p" color="neutral">
          {description}
        </Text>
      </div>
    </Link>
  );
}
