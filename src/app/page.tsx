import { FeaturedDestination } from '@/app/components/home/FeaturedDestination';
import { Testimonial } from '@/app/components/home/Testimonial';
import { Section } from '@/app/components/ui/Section';

export default function Homepage() {
  return (
    <>
      <Section id="destinations" headerAs="h2" headerText="Featured Destinations">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <FeaturedDestination
              key={i}
              href="/destinations/orlando"
              imageSrc="https://picsum.photos/id/237/400/800"
              location="Orlando, Florida"
            />
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
