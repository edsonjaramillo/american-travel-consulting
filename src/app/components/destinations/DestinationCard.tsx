import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/app/components/ui/Button';
import { Text } from '@/app/components/ui/Text';
import { cn } from '@/app/lib/ui/tw';

type DestinationCardProps = {
  imgSrc: string;
  location: string;
  description: string;
  href: string;
};

export function DestinationCard({ imgSrc, location, description, href }: DestinationCardProps) {
  const linkCls = cn(buttonVariants(), 'ml-auto mt-2 w-fit');
  return (
    <div className="group/destination-card overflow-hidden rounded shadow-md">
      <Link href={href} className="relative block h-48 overflow-hidden" aria-hidden="true">
        <Image
          src={imgSrc}
          fill
          alt={location}
          className="object-cover duration-base group-hover/destination-card:scale-110"
        />
      </Link>
      <div className="flex flex-col gap-2 p-4">
        <Text as="h2" size="xl" className="line-clamp-1 font-semibold">
          {location}
        </Text>
        <Text as="p" color="neutral">
          {description}
        </Text>
        <Link href={href} className={linkCls}>
          More Details
        </Link>
      </div>
    </div>
  );
}
