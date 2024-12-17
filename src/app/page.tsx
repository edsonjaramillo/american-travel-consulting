import { cms } from '@/app/cms/clients/CMSClient';
import { CTA } from '@/app/components/home/CTA';
import { FeaturedDestination } from '@/app/components/home/FeaturedDestination';
import { Testimonial } from '@/app/components/home/Testimonial';
import { Section } from '@/app/components/ui/Section';

// 1 week in seconds
export const revalidate = 604800;

export default async function Homepage() {
  const destinations = await cms.getFeaturedestinations();
  return (
    <>
      <CTA />
      <Section id="destinations" headerAs="h2" headerText="Featured Destinations">
        <div className="grid grid-cols-featured-destinations gap-6">
          {destinations.map((destination) => (
            <FeaturedDestination key={destination.id} destination={destination} />
          ))}
        </div>
      </Section>
      <Section id="testimonials" headerAs="h2" headerText="Testimonials">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Testimonial
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates ex sapiente eius. Nulla perferendis illum aut error nihil eligendi, maiores voluptate officiis, fuga distinctio ad architecto dolorum harum reprehenderit, cupiditate commodi magnam atque rerum accusamus enim reiciendis nemo exercitationem? Non."
              author="John Doe"
              organization="Orlando High School"
              key={i}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
