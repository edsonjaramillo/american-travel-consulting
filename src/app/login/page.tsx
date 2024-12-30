import { LoginForm } from '@/components/forms/LoginForm';
import { SplitShell } from '@/components/ui/SplitShell';

export default function LoginPage() {
  return (
    <SplitShell
      image={{ src: 'https://picsum.photos/id/237/400/800', alt: 'gfgfgf' }}
      form={<LoginForm />}
    />
  );
}
