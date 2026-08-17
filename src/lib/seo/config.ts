// SEO Configuration - Central source of truth
import { PageRoute } from './types';

export const SITE_CONFIG = {
  name: 'Retirement Citizenship',
  url: 'https://retirementcitizenship.com',
  defaultTitle: 'Retirement Citizenship | International Retirement Planning for Americans',
  defaultDescription: 'Expert guidance on retiring abroad. Discover affordable retirement destinations, golden visa programs, healthcare options, and citizenship pathways for American retirees.',
  defaultOgImage: '/og-image.jpg',
  twitterHandle: '@retirementabroad',
  author: 'Retirement Citizenship',
  logo: '/favicon.png',
};

// Centralized route definitions for sitemap generation and internal linking
export const PAGE_ROUTES: PageRoute[] = [
  // Main Pages
  { path: '/', title: 'International Retirement Planning for Americans', description: 'Expert guidance on retiring abroad with golden visas, healthcare, and citizenship.', priority: 1.0, changefreq: 'daily', category: 'main' },
  { path: '/about', title: 'About Us', description: 'Learn about our mission to help Americans retire abroad.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/lifestyle', title: 'Retirement Lifestyle', description: 'Explore lifestyle options for international retirement.', priority: 0.8, changefreq: 'weekly', category: 'main' },
  { path: '/contact', title: 'Contact Us', description: 'Get in touch with our retirement planning experts.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  { path: '/cost-of-living', title: 'Cost of Living Comparison', description: 'Compare cost of living in popular retirement destinations.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/climate-considerations', title: 'Climate Considerations', description: 'Climate factors for choosing retirement destinations.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  { path: '/cultural-integration', title: 'Cultural Integration', description: 'Tips for cultural integration abroad.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  { path: '/language-requirements-naturalization', title: 'Language Requirements', description: 'Language requirements for naturalization.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  
  // Strategic Analysis Hub
  { path: '/strategic-analysis', title: 'Strategic Analysis', description: 'Institutional-grade jurisdictional analysis, tax intelligence, and regulatory updates.', priority: 0.9, changefreq: 'weekly', category: 'analysis' },
  { path: '/strategic-analysis/golden-visa-citizenship', title: 'Golden Visa vs Citizenship by Investment', description: 'Compare Golden Visa and CBI programs.', priority: 0.7, changefreq: 'monthly', ogImage: '/og-golden-visa.jpg', category: 'analysis' },
  { path: '/strategic-analysis/residency-timelines-2025', title: 'Residency Timelines 2025', description: 'Residency processing times by country.', priority: 0.7, changefreq: 'monthly', ogImage: '/og-residency-timelines.jpg', category: 'analysis' },
  { path: '/strategic-analysis/portugal-golden-visa-portfolio', title: 'Portugal Golden Visa Portfolio', description: 'Why Americans are adding Portugal to their portfolio.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/capital-controls', title: 'Capital Controls Guide', description: 'Understanding capital controls and their impact.', priority: 0.7, changefreq: 'monthly', ogImage: '/og-capital-controls.jpg', category: 'analysis' },
  { path: '/strategic-analysis/golden-visa-students', title: 'Golden Visa for Students', description: 'Golden visa advantages for international students.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/h1b-migration-portugal', title: 'H1B Migration to Portugal', description: 'H-1B holders choosing Portuguese stability.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/second-residency-2026', title: 'Second Residency 2026', description: 'The rise of second residency as portfolio addition.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/american-dream-global-mobility', title: 'The New American Dream', description: 'Americans trading stress for global mobility.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/european-yachting-golden-visa', title: 'European Yachting & Golden Visa', description: 'How golden visas unlock maritime lifestyle in Europe.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/golden-visa-surge', title: 'Golden Visa Surge', description: 'Why Americans are rushing for second passports.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/retirement-mobility', title: 'Retirement Mobility', description: 'The new geography of retirement arbitrage.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/portugal-golden-visa-2026-guide', title: 'Portugal Golden Visa 2026 Guide', description: 'Complete 2026 guide to Portugal Golden Visa.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/portugal-ifici-tax-regime-2025', title: 'Portugal IFICI Tax Regime 2025', description: 'Analysis of Portugal IFICI tax benefits.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/portuguese-passport-global-investors', title: 'Portuguese Passport for Global Investors', description: 'Why global investors choose Portuguese passport.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/strategic-investor-citizenship-investment', title: 'Strategic Investor Guide', description: 'Strategic approach to citizenship investment.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/cbi-fraud-investment-migration', title: 'CBI Fraud Analysis', description: 'Fraud schemes in citizenship by investment.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/wealth-managers-immigration-brokers', title: 'Wealth Managers & Immigration Brokers', description: 'The strategic alliance for HNW clients.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  
  // FAQs
  { path: '/faqs', title: 'FAQs', description: 'Frequently asked questions about retirement abroad.', priority: 0.8, changefreq: 'weekly', category: 'faq' },
  
  // Legal
  { path: '/privacy-policy', title: 'Privacy Policy', description: 'Our privacy policy and data handling practices.', priority: 0.3, changefreq: 'yearly', category: 'legal' },
];

// Get related pages for internal linking
export const getRelatedPages = (currentPath: string, category?: string, limit = 3): PageRoute[] => {
  const currentPage = PAGE_ROUTES.find(r => r.path === currentPath);
  const targetCategory = category || currentPage?.category;
  
  return PAGE_ROUTES
    .filter(r => r.path !== currentPath && r.category === targetCategory)
    .slice(0, limit);
};

// Generate sitemap content
export const generateSitemapContent = (): string => {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = PAGE_ROUTES.map(route => `  <url>
    <loc>${SITE_CONFIG.url}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
};
