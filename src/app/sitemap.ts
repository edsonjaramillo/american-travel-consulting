import { MetadataRoute } from 'next';

import { cms } from '@/cms/clients/CMSClient';
import { navigationLinks } from '@/data/links';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = 'https://www.americantravelconsulting.com';

  const sitemapLinks: MetadataRoute.Sitemap = [];
  for (const link of navigationLinks) {
    sitemapLinks.push({
      url: `${URL}${link.href}`,
    });
  }

  sitemapLinks.push({ url: `${URL}/login` });

  const destinations = await cms.getDestinations();

  for (const destination of destinations) {
    sitemapLinks.push({
      url: `${URL}/destinations/${destination.slug}`,
    });
  }

  return sitemapLinks;
}
