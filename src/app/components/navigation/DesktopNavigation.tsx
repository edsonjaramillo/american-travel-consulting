import Link from 'next/link';

import { Logo } from '@/app/components/common/Logo';
import { Register } from '@/app/components/navigation/Register';
import { Responsive } from '@/app/components/ui/Responsive';
import { Text } from '@/app/components/ui/Text';
import { type NavigationLink, navigationLinks } from '@/app/data/links';

export function DesktopNavigation() {
  return (
    <nav className="hidden shadow-md md:block">
      <Responsive className="flex h-14 items-center justify-between">
        <Logo />
        <ul className="flex space-x-4">
          {navigationLinks.map((link) => (
            <DesktopLink key={link.href} link={link} />
          ))}
        </ul>
        <Register />
      </Responsive>
    </nav>
  );
}

type DesktopLinksProperties = { link: NavigationLink };
function DesktopLink({ link }: DesktopLinksProperties) {
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
