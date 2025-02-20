import { type Metadata } from 'next';

import { cms } from '@/cms/clients/CMSClient';
import { ContactForm } from '@/components/forms/ContactForm';
import { SplitShell } from '@/components/ui/SplitShell';
import { baseOpenGraph } from '@/lib/opengraph';

export async function generateMetadata(): Promise<Metadata> {
  return baseOpenGraph({
    title: 'Contact Us',
    description: 'Contact us for any questions, inquiries, or to get a quote.',
  });
}

export default async function ContactPage() {
  const pageImage = await cms.getPageImage('contact');
  return (
    <SplitShell
      image={{
        src: pageImage.image.url,
        alt: 'A collage of group travel photos with the ATC logo on it.',
      }}
      form={<ContactForm />}
    />
  );
}
