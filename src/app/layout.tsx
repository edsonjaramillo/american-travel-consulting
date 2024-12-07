import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { DesktopNavigation } from '@/app/components/navigation/DesktopNavigation';
import { MobileNavigation } from '@/app/components/navigation/MobileNavigation';
import '@/app/globals.css';
import { cn } from '@/app/lib/ui/tw';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-next',
  weight: '400 500',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const bodyClass = cn(geistSans.variable, 'bg-grayscale-50 font-sans antialiased');

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <DesktopNavigation />
        <MobileNavigation />
        {children}
      </body>
    </html>
  );
}
