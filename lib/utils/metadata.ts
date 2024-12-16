import siteData from '@/site.config';

export default function getMetadata(page: string) {
  const defaultMetadata = {
    title: siteData.title,
    description: siteData.description,
    creator: [siteData.author],
    publisher: [siteData.author],
    metadataBase: new URL(siteData.url),
    openGraph: {
      title: siteData.title,
      description: siteData.description,
      url: siteData.url,
      siteName: 'Destiny Saturday (ThePrimeJnr)',
      image: siteData.ogImageUrl,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: siteData.ogImageUrl,
          alt: 'Destiny Saturday (ThePrimeJnr)',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ThePrimeJnr',
      creator: '@ThePrimeJnr',
    },
  };

  const pagesMetadata: { [key: string]: any } = {
    home: {
      ...defaultMetadata,
    },
    blog: {
      ...defaultMetadata,
      openGraph: {
        ...defaultMetadata.openGraph,
        url: `${siteData.url}/blog`,
        type: 'article',
      },
    },
    projects: {
      ...defaultMetadata,
      openGraph: {
        ...defaultMetadata.openGraph,
        url: `${siteData.url}/projects`,
      },
    },
    videos: {
      ...defaultMetadata,
      openGraph: {
        ...defaultMetadata.openGraph,
        url: `${siteData.url}/videos`,
      },
    },
    contact: {
      ...defaultMetadata,
      openGraph: {
        ...defaultMetadata.openGraph,
        url: `${siteData.url}/contact`,
      },
    },
  };

  return pagesMetadata[page] || defaultMetadata;
}
