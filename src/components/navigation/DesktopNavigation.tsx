import Link from 'next/link';

import { Logo } from '@/components/common/Logo';
import { Login } from '@/components/navigation/Login';
import { Responsive } from '@/components/ui/Responsive';
import { Text } from '@/components/ui/Text';
import { type NavigationLink, navigationLinks } from '@/data/links';

export function DesktopNavigation() {
  return (
    <nav className="fixed top-0 z-nav mb-1 hidden w-full rounded-bl rounded-br bg-grayscale-50 shadow-md md:block">
      <Responsive className="flex h-14 items-center justify-between">
        <Logo />
        <ul className="flex space-x-4">
          {navigationLinks.map((link) => (
            <DesktopLink key={link.href} link={link} />
          ))}
        </ul>
        <Login />
      </Responsive>
    </nav>
  );
}

type DesktopLinksProps = { link: NavigationLink };
function DesktopLink({ link }: DesktopLinksProps) {
  return (
    <li>
      <Link
        href={link.href}
        prefetch={link.prefetch}
        className="font-medium text-tertiary-dark transition-colors duration-base hover:text-secondary">
        <Text as="span" size="small">
          {link.name}
        </Text>
      </Link>
    </li>
  );
}

export function NavigationSpacer() {
  return <div className="h-14" aria-hidden="true" />;
}
