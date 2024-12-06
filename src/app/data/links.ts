export type NavigationLink = {
  name: string;
  href: string;
  prefetch: boolean;
};

export const navigationLinks: NavigationLink[] = [
  { name: 'Home', href: '/', prefetch: true },
  { name: 'Destinations', href: '/destinations', prefetch: true },
  { name: 'About', href: '/about', prefetch: true },
  { name: 'Contact', href: '/contact', prefetch: true },
];
