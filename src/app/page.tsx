import { type Metadata } from 'next';

import { cms } from '@/cms/clients/CMSClient';
import { CTA } from '@/components/home/CTA';
import { FeaturedDestination } from '@/components/home/FeaturedDestination';
import { Testimonial } from '@/components/home/Testimonial';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'American Travel Consulting',
  description:
    'Specializing in student group travel, American Travel Consulting can customize the perfect trip for your group.',
  openGraph: {
    type: 'website',
    url: 'https://americantravelconsulting.com',
    images: 'https://media.graphassets.com/sN1eSMNqT0Osthg3g3xz',
  },
  creator: 'Edson Jaramillo',
};

// 1 week in seconds
export const revalidate = 604800;

export default function Homepage() {
  return (
    <>
      <CTA />
      <FeaturedDestinations />
      <Testimonials />
    </>
  );
}

async function FeaturedDestinations() {
  const destinations = await cms.getFeaturedestinations();
  return (
    <Section id="destinations" headerAs="h2" headerText="Featured Destinations">
      <div className="grid grid-cols-featured-destinations gap-6">
        {destinations.map((destination) => (
          <FeaturedDestination key={destination.id} destination={destination} />
        ))}
      </div>
    </Section>
  );
}

async function Testimonials() {
  const testimonials = await cms.getTestimonials();
  return (
    <Section id="testimonials" headerAs="h2" headerText="Testimonials">
      <div className="grid grid-cols-featured-testimonials gap-6">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
}
