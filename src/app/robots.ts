import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const url = 'https://americantravelconsulting.com';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
