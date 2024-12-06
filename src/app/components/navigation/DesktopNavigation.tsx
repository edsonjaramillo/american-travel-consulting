import Link from 'next/link';

import { Responsive } from '@/app/components/ui/Responsive';
import { type NavigationLink, navigationLinks } from '@/app/data/links';

export function DesktopNavigation() {
  return (
    <nav>
      <Responsive className="flex h-14 items-center justify-between">
        <p>Logo</p>
        <ul className="flex space-x-4">
          {navigationLinks.map((link) => (
            <DesktopLink key={link.href} link={link} />
          ))}
        </ul>
        <p>Register Button</p>
      </Responsive>
    </nav>
  );
}

type DesktopLinksProperties = { link: NavigationLink };
function DesktopLink({ link }: DesktopLinksProperties) {
  return (
    <li>
      <Link href={link.href} prefetch={link.prefetch}>
        {link.name}
      </Link>
    </li>
  );
}
