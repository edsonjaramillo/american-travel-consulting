import { DestinationCard } from '@/app/components/destinations/DestinationCard';
import { Section } from '@/app/components/ui/Section';

export default function DestinationsPage() {
  return (
    <Section headerAs="h1" headerText="Destinations" id="destinations">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <DestinationCard
            key={index}
            location="Orlando, Florida"
            imgSrc="https://picsum.photos/id/237/400/800"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor provident debitis odit, exercitationem placeat iste minus adipisci, veniam ratione non possimus perferendis itaque numquam optio tenetur id aspernatur? Aspernatur, consequuntur!"
            href="/destinations/orlando"
          />
        ))}
      </div>
    </Section>
  );
}
