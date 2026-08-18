// Structured Data Generators (JSON-LD)
import { SITE_CONFIG } from './config';
import { ArticleStructuredData, FAQStructuredData, BreadcrumbItem } from './types';

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  description: 'Strategic global mobility advisory for American and Canadian families with significant cross-border assets.',
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
  },
  priceRange: '$$$$',
  serviceType: 'Investment Migration Advisory',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'Residency by Investment',
    'Citizenship by Investment',
    'Cross-border Tax Planning',
    'Estate Planning',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'monica@retirementcitizenship.com',
    url: `${SITE_CONFIG.url}/contact`,
    availableLanguage: 'English',
  },
  sameAs: [],
});

export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_CONFIG.url}/#website`,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.defaultDescription,
  url: SITE_CONFIG.url,
  inLanguage: 'en-US',
  publisher: {
    '@id': `${SITE_CONFIG.url}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_CONFIG.url}/faqs?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const generateArticleSchema = (data: ArticleStructuredData) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: data.headline,
  description: data.description,
  image: data.image.startsWith('http') ? data.image : `${SITE_CONFIG.url}${data.image}`,
  datePublished: data.datePublished,
  dateModified: data.dateModified || data.datePublished,
  author: {
    '@type': 'Person',
    name: data.author.name,
    url: data.author.url || SITE_CONFIG.url,
  },
  publisher: {
    '@type': 'Organization',
    name: data.publisher.name,
    logo: {
      '@type': 'ImageObject',
      url: data.publisher.logo.startsWith('http') ? data.publisher.logo : `${SITE_CONFIG.url}${data.publisher.logo}`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': SITE_CONFIG.url,
  },
});

export const generateFAQSchema = (faqs: FAQStructuredData[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${SITE_CONFIG.url}${item.url}`,
  })),
});

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_CONFIG.name,
  description: 'Strategic global mobility advisory for American and Canadian families with significant cross-border assets.',
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
  priceRange: '$$$$',
  serviceType: 'Investment Migration Advisory',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  knowsAbout: [
    'Residency by Investment',
    'Citizenship by Investment',
    'Cross-border Tax Planning',
    'Estate Planning',
  ],
});
