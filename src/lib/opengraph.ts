import { type Metadata } from 'next';

export function baseOpenGraph(extra?: Metadata): Metadata {
  return {
    robots: 'follow, index',
    openGraph: {
      type: 'website',
      url: 'https://americantravelconsulting.com',
      siteName: 'American Travel Consulting',
      images: [
        {
          url: 'https://media.graphassets.com/sN1eSMNqT0Osthg3g3xz',
          width: 1200,
          height: 630,
          alt: 'American Travel Consulting Logo',
        },
      ],
    },
    creator: 'Edson Jaramillo',
    ...extra,
  };
}
