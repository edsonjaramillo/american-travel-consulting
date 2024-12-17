import { cms } from '@/app/cms/clients/CMSClient';
import { DestinationCard } from '@/app/components/destinations/DestinationCard';
import { Section } from '@/app/components/ui/Section';

export default async function DestinationsPage() {
  const destinations = await cms.getDestinations();
  return (
    <Section headerAs="h1" headerText="Destinations" id="destinations">
      <div className="grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            location={destination.name}
            imgSrc={destination.main.url}
            description={destination.description}
            href={`/destinations/${destination.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
