import { Text } from '@/app/components/ui/Text';

type TestimonialProps = {
  text: string;
  author: string;
  organization: string;
};

export function Testimonial({ text, author, organization }: TestimonialProps) {
  return (
    <div className="relative flex flex-col gap-4 text-pretty rounded bg-grayscale-100 p-6 text-center shadow-md">
      <Text
        as="span"
        className="absolute left-0 top-20 select-none text-[10rem] italic leading-3 text-secondary opacity-20">
        "
      </Text>
      <Text as="p" className="sm:line-clamp-6">
        {text}
      </Text>
      <div className="flex flex-col text-pretty text-center">
        <Text as="h3" className="font-semibold">
          {author}
        </Text>
        <Text as="p" color="neutral">
          {organization}
        </Text>
      </div>
    </div>
  );
}
