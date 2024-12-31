import { type Metadata } from 'next';

export function baseOpenGraph(extra?: Metadata): Metadata {
  return {
    robots: 'follow, index',
    openGraph: {
      type: 'website',
      url: 'https://americantravelconsulting.com',
      siteName: 'American Travel Consulting',
      images: 'https://media.graphassets.com/sN1eSMNqT0Osthg3g3xz',
    },
    creator: 'Edson Jaramillo',
    ...extra,
  };
}
