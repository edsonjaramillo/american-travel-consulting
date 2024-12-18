import { type Testimonial } from '@/app/cms/types';
import { Text } from '@/app/components/ui/Text';

type TestimonialProps = {
  testimonial: Testimonial;
};

export function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className="relative flex min-h-72 flex-col gap-4 text-pretty rounded bg-grayscale-100 p-6 text-center shadow-md">
      <Text
        as="span"
        className="absolute left-0 top-20 select-none text-[10rem] italic leading-3 text-secondary opacity-20">
        &quot;
      </Text>
      <Text as="p">{testimonial.quote}</Text>
      <div className="mt-auto flex flex-col text-pretty text-center">
        <Text as="h3" className="font-semibold">
          {testimonial.name}
        </Text>
        <Text as="p" color="neutral">
          {testimonial.organization}
        </Text>
      </div>
    </div>
  );
}
