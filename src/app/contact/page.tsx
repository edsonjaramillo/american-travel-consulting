import { cms } from '@/cms/clients/CMSClient';
import { ContactForm } from '@/components/forms/ContactForm';
import { SplitShell } from '@/components/ui/SplitShell';

export default async function ContactPage() {
  const pageImage = await cms.getPageImage('contact');
  return <SplitShell image={{ src: pageImage.image.url, alt: 'Contact' }} form={<ContactForm />} />;
}
