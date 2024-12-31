import { type Metadata } from 'next';

import { cms } from '@/cms/clients/CMSClient';
import { Gallery } from '@/components/destinations/Gallery';
import { InteractiveMap } from '@/components/destinations/InteractiveMap';
import { PopularAttractions } from '@/components/destinations/PopularDestinations';
import { Responsive } from '@/components/ui/Responsive';
import { Text } from '@/components/ui/Text';
import { baseOpenGraph } from '@/lib/opengraph';

type RequiredParams = { slug: string };
type PageProps = { params: Promise<RequiredParams> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await cms.getDestination(slug);

  return baseOpenGraph({
    title: destination.name,
    description: destination.description,
    openGraph: {
      type: 'website',
      title: destination.name,
      description: destination.description,
      siteName: 'American Travel Consulting',
      url: `https://americantravelconsulting.com/destinations/${slug}`,
      images: {
        url: destination.main.url,
        width: destination.main.width,
        height: destination.main.height,
      },
    },
  });
}

export async function generateStaticParams(): Promise<RequiredParams[]> {
  const destinations = await cms.getDestinations();
  const slugs = destinations.map((destination) => destination.slug);
  return slugs.map((slug) => ({ slug }));
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await cms.getDestination(slug);
  return (
    <>
      <Responsive>
        <div className="flex flex-col gap-4">
          <Text as="h1" size="4xl" className="pt-2 font-semibold">
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
      </Responsive>
      <PopularAttractions mapItems={destination.mapitems} />
      <InteractiveMap
        zoomLevel={destination.zoomlevel}
        viewport={destination.viewport}
        mapItems={destination.mapitems}
      />
    </>
  );
}
