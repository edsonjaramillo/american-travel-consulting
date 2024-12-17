import { cms } from '@/app/cms/clients/CMSClient';
import { DestinationCard } from '@/app/components/destinations/DestinationCard';
import { Section } from '@/app/components/ui/Section';

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
