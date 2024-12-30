import { RegisterForm } from '@/components/forms/RegisterForm';
import { SplitShell } from '@/components/ui/SplitShell';

export default function ContactPage() {
  return (
    <SplitShell
      image={{ src: 'https://picsum.photos/id/237/400/800', alt: 'gfgfgf' }}
      form={<RegisterForm />}
    />
  );
}
