import { cms } from '@/app/cms/clients/CMSClient';
import { Gallery } from '@/app/components/destinations/Gallery';
import { InteractiveMap } from '@/app/components/destinations/InteractiveMap';
import { PopularAttractions } from '@/app/components/destinations/PopularDestinations';
import { Responsive } from '@/app/components/ui/Responsive';
import { Text } from '@/app/components/ui/Text';

type RequiredParams = { slug: string };
type PageProps = { params: Promise<RequiredParams> };

const mapStyles = [
  'mapbox://styles/mapbox/streets-v12',
  'mapbox://styles/mapbox/outdoors-v12',
  'mapbox://styles/mapbox/light-v11',
  'mapbox://styles/mapbox/dark-v11',
  'mapbox://styles/mapbox/satellite-v9',
  'mapbox://styles/mapbox/satellite-streets-v12',
  'mapbox://styles/mapbox/navigation-day-v1',
  'mapbox://styles/mapbox/navigation-night-v1',
];

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
      {mapStyles.map((style) => (
        <InteractiveMap
          key={style}
          mapStyle={style}
          zoomLevel={destination.zoomlevel}
          viewport={destination.viewport}
          mapItems={destination.mapitems}
        />
      ))}
    </>
  );
}
