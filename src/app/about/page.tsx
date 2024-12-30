import { Section } from '@/components/ui/Section';
import { Text } from '@/components/ui/Text';

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <MeetTheTeam />
    </>
  );
}

function AboutUs() {
  return (
    <Section id="about-us" headerAs="h1" headerText="About Us">
      <div className="mx-auto flex max-w-[70ch] flex-col justify-center">
        <Text as="p" color="neutral" className="text-pretty indent-12">
          American Travel Consulting, LLC specializes in organizing safe, stress-free group travel
          for students and adult groups alike. American Travel Consulting (ATC) was founded in 2013
          by Stacy Goss, a former Aggie band director and local icon. With a distinguished career in
          music education, Stacy led the Albertville High School Band to three appearances in the
          Macy&apos;s Thanksgiving Day Parade and earned numerous Grand Championships at festivals
          across the country.
        </Text>
        <Text as="p" color="neutral" className="mt-2 text-pretty indent-12">
          Stacy Goss opened doors for student musicians, taking them to new heights both on and off
          the stage. In 2013, after retiring from his career in music education, Goss founded
          American Travel Consulting in Dallas, TX. Built from Goss&apos;s unique understanding of
          the challenges of coordinating trips for band programs, the ATC quickly became a trusted
          partner in group travel, offering unmatched expertise and service.
        </Text>
        <Text as="p" color="neutral" className="mt-2 text-pretty indent-12">
          In 2015, Goss teamed up with Chris Lindley, a successor of the Aggie Band, who shared his
          vision for empowering student musicians to travel with confidence and perform at their
          peak. With Lindley at the helm, ATC has continued to evolve, while remaining dedicated to
          supporting bands, choirs, and orchestras. The ATC team combines music educators and travel
          specialists, whose decades of experience in organizing performing arts trips bring a deep
          understanding of the unique challenges that come with group travel for student musicians.
        </Text>
        <Text as="p" color="neutral" className="mt-2 text-pretty indent-12">
          In 2020, following significant growth, Lindley moved the company to Alabama and took
          primary control. When Goss passed away in June of 2023, ATC embarked on a rebrand that
          honors Stacy Goss&apos;s legacy and continues to offer unparalleled travel solutions for
          students, educators, and adult groups. This rebrand centers on the company&apos;s core
          values, reflected in their new logo and the slogan “Always Travel Confidently”—a promise
          to their clients that with ATC, every detail is meticulously handled so they can focus on
          enjoying their journey. Whether helping a school ensemble navigate their first major
          performance trip or arranging seamless experiences for seasoned travelers, ATC ensures
          every client has the confidence to explore new places, broaden their horizons, and embrace
          the excitement of travel.
        </Text>
      </div>
    </Section>
  );
}

function MeetTheTeam() {
  return (
    <>
      <Section id="meet-the-team" headerAs="h2" headerText="Meet the Team"></Section>
    </>
  );
}
