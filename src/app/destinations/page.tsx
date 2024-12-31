import { type Metadata } from 'next';

import { cms } from '@/cms/clients/CMSClient';
import { DestinationCard } from '@/components/destinations/DestinationCard';
import { Section } from '@/components/ui/Section';
import { baseOpenGraph } from '@/lib/opengraph';

export async function generateMetadata(): Promise<Metadata> {
  return baseOpenGraph({
    title: 'Destinations',
    description:
      'Explore the best destinations for your group trip around the best cities in the United States of America.',
  });
}

export default async function DestinationsPage() {
  return <Destinations />;
}

async function Destinations() {
  const destinations = await cms.getDestinations();
  return (
    <Section headerAs="h1" headerText="Destinations" id="destinations">
      <div className="grid grid-cols-destinations gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </Section>
  );
}
