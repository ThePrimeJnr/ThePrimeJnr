import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/blog', '/projects', '/videos', '/contact'],
      disallow: [],
    },
    sitemap: 'https://theprimejnr.com/sitemap.xml',
  };
}
