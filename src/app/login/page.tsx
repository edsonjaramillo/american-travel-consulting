import { cms } from '@/cms/clients/CMSClient';
import { LoginForm } from '@/components/forms/LoginForm';
import { SplitShell } from '@/components/ui/SplitShell';

export default async function LoginPage() {
  const pageImage = await cms.getPageImage('login');
  return <SplitShell image={{ src: pageImage.image.url, alt: 'gfgfgf' }} form={<LoginForm />} />;
}
