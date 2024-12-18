import { RegisterForm } from '@/app/components/forms/RegisterForm';
import { SplitShell } from '@/app/components/ui/SplitShell';

export default function ContactPage() {
  return (
    <SplitShell
      image={{ src: 'https://picsum.photos/id/237/400/800', alt: 'gfgfgf' }}
      form={<RegisterForm />}
    />
  );
}
