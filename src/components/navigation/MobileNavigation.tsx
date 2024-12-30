'use client';

import { Logo } from '@/components/common/Logo';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { Register } from '@/components/navigation/Register';
import { Responsive } from '@/components/ui/Responsive';
import { useMobileMenu } from '@/context/MobileMenuContext';

export function MobileNavigation() {
  return (
    <nav
      aria-label="Mobile"
      className="fixed top-0 z-nav mb-1 flex h-14 w-full rounded-bl rounded-br bg-grayscale-50 shadow-md md:hidden">
      <Responsive className="flex items-center justify-between">
        <Hamburger />
        <Logo />
        <Register />
        <MobileMenu />
      </Responsive>
    </nav>
  );
}

function Hamburger() {
  const { setMobileMenu } = useMobileMenu();
  return (
    <button type="button" onClick={() => setMobileMenu(true)}>
      <span className="sr-only">Open Mobile Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 w-8 text-grayscale-950">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
