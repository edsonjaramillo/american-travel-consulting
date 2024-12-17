import Image from 'next/image';

import { cms } from '@/app/cms/clients/CMSClient';
import { Gallery } from '@/app/components/destinations/Gallery';
import { Responsive } from '@/app/components/ui/Responsive';
import { Text } from '@/app/components/ui/Text';

type RequiredParams = { slug: string };
type PageProps = { params: Promise<RequiredParams> };

export async function generateStaticParams(): Promise<RequiredParams[]> {
  const destinations = await cms.getDestinations();
  const slugs = destinations.map((destination) => destination.slug);
  return slugs.map((slug) => ({ slug }));
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await cms.getDestination(slug);
  return (
    <Responsive>
      <div className="flex flex-col gap-3">
        <Text as="h1" size="4xl" className="font-semibold">
          {destination.name}
        </Text>
        <Text as="p" color="neutral">
          {destination.description}
        </Text>
        <Gallery
          main={destination.main}
          secondimage={destination.secondimage}
          thirdimage={destination.thirdimage}
          fourthimage={destination.fourthimage}
        />
      </div>
      <pre>{JSON.stringify(destination, null, 2)}</pre>
    </Responsive>
  );
}
