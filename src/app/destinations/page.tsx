import { cms } from '@/cms/clients/CMSClient';
import { DestinationCard } from '@/components/destinations/DestinationCard';
import { Section } from '@/components/ui/Section';

export default async function DestinationsPage() {
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
