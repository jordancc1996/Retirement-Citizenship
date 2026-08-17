// SEO Types and Interfaces
export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  twitterImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ArticleStructuredData {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
}

export interface FAQStructuredData {
  question: string;
  answer: string;
}

export interface OrganizationStructuredData {
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs?: string[];
}

export interface PageRoute {
  path: string;
  title: string;
  description: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  ogImage?: string;
  category: 'main' | 'blog' | 'analysis' | 'faq' | 'legal';
}
