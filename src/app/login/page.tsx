import { type Metadata } from 'next';

import { cms } from '@/cms/clients/CMSClient';
import { LoginForm } from '@/components/forms/LoginForm';
import { SplitShell } from '@/components/ui/SplitShell';
import { baseOpenGraph } from '@/lib/opengraph';

export async function generateMetadata(): Promise<Metadata> {
  return baseOpenGraph({
    title: 'Login/Register',
    description:
      'Enter your trip code below and you will be transfered to your GroupCollect payment page.',
  });
}

export default async function LoginPage() {
  const pageImage = await cms.getPageImage('login');
  return (
    <SplitShell
      image={{
        src: pageImage.image.url,
        alt: 'A collage of group travel photos with the ATC logo on it.',
        priority: true,
      }}
      form={<LoginForm />}
    />
  );
}
