import 'mapbox-gl/dist/mapbox-gl.css';
import { type Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';
import { DesktopNavigation, NavigationSpacer } from '@/components/navigation/DesktopNavigation';
import { Footer } from '@/components/navigation/Footer';
import { MobileNavigation } from '@/components/navigation/MobileNavigation';
import { Toast } from '@/components/ui/Toast';
import { cn } from '@/lib/ui/tw';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-next',
});

export const viewport: Viewport = {
  colorScheme: 'light',
  initialScale: 1,
  themeColor: '#004b98',
  width: 'device-width',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const bodyClass = cn(
  inter.variable,
  'relative scroll-smooth bg-grayscale-50 font-sans antialiased selection:bg-secondary selection:text-grayscale-inverse',
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={bodyClass}>
        <DesktopNavigation />
        <MobileNavigation />
        <NavigationSpacer />
        {children}
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
