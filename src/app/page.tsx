import { cms } from '@/app/cms/clients/CMSClient';
import { CTA } from '@/app/components/home/CTA';
import { FeaturedDestination } from '@/app/components/home/FeaturedDestination';
import { Testimonial } from '@/app/components/home/Testimonial';
import { Section } from '@/app/components/ui/Section';

// 1 week in seconds
export const revalidate = 604800;

export default async function Homepage() {
  const destinations = await cms.getFeaturedestinations();
  const testimonials = await cms.getTestimonials();
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
        <div className="grid grid-cols-featured-testimonials gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Section>
    </>
  );
}
