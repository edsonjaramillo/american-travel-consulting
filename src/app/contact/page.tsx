import { ContactForm } from '@/app/components/forms/ContactForm';
import { SplitShell } from '@/app/components/ui/SplitShell';

export default function ContactPage() {
  return (
    <SplitShell
      image={{ src: 'https://picsum.photos/id/237/400/800', alt: 'gffgfg' }}
      form={<ContactForm />}
    />
  );
}
