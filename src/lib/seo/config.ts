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

// Live indexable URLs — matches @astrojs/sitemap output (54 URLs).
// Privacy policy and 404 are excluded from the sitemap on purpose.
export const PAGE_ROUTES: PageRoute[] = [
  { path: '/', title: 'Golden Visa Retirement Planning', description: 'Golden visa retirement planning for American and Canadian families covering Portugal, Greece, and Italy.', priority: 1.0, changefreq: 'daily', category: 'main' },
  { path: '/about', title: 'About Us', description: 'Retirement citizenship advisory for American and Canadian family offices evaluating Portugal, Greece, and Italy.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/contact', title: 'Contact', description: 'Request a private consultation on golden visa residency and citizenship pathways.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  { path: '/lifestyle', title: 'Retirement Lifestyle', description: 'Coastal, mountain, and urban retirement lifestyle options abroad.', priority: 0.8, changefreq: 'weekly', category: 'main' },
  { path: '/cost-of-living', title: 'Cost of Living Comparison', description: 'Compare cost of living in Portugal, Greece, Italy, and other retirement destinations.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/briefing', title: '2026 Market Briefing', description: 'Request the 2026 market analysis on residency programs and regulatory changes.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/climate-considerations', title: 'Climate Considerations', description: 'Climate factors for choosing retirement destinations in southern Europe.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  { path: '/cultural-integration', title: 'Cultural Integration', description: 'Cultural integration for families relocating through golden visa programs.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  { path: '/language-requirements-naturalization', title: 'Language Requirements for Naturalization', description: 'CEFR language requirements for naturalization in Portugal, Spain, Italy, and Greece.', priority: 0.7, changefreq: 'monthly', category: 'main' },
  { path: '/strategic-analysis', title: 'Strategic Analysis', description: 'Jurisdictional analysis, tax intelligence, and golden visa program updates.', priority: 0.9, changefreq: 'weekly', category: 'analysis' },
  { path: '/faqs', title: 'Golden Visa FAQs', description: 'Golden visa FAQs for Americans and Canadians covering Portugal, Greece, and Italy.', priority: 0.9, changefreq: 'weekly', category: 'faq' },
  { path: '/tools', title: 'Planning Tools', description: 'Golden visa planning tools for American and Canadian families.', priority: 0.9, changefreq: 'weekly', category: 'main' },
  { path: '/tools/citizenship-comparison', title: 'Citizenship Comparison', description: 'Compare 24 residency and citizenship programs by investment, timeline, and type.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/tools/student-mobility-calculator', title: 'Family Golden Visa Assessment', description: 'Map lifestyle, assets, and budget to a recommended golden visa program.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/tools/investment-migration-flowchart', title: 'Investment Migration Flowchart', description: 'Visual overview of golden visa application stages across 13 countries.', priority: 0.8, changefreq: 'monthly', category: 'main' },
  { path: '/tools/inheritance-tax-calculator', title: 'UK Inheritance Tax Calculator', description: 'Estimate UK inheritance tax liability using nil-rate bands and residence relief.', priority: 0.8, changefreq: 'monthly', category: 'main' },

  { path: '/strategic-analysis/golden-visa-citizenship', title: 'Golden Visa vs Citizenship by Investment', description: 'Compare Golden Visa and CBI programs.', priority: 0.7, changefreq: 'monthly', ogImage: '/og-golden-visa.jpg', category: 'analysis' },
  { path: '/strategic-analysis/residency-timelines-2025', title: 'Residency Timelines by Country', description: 'Residency processing times by country.', priority: 0.7, changefreq: 'monthly', ogImage: '/og-residency-timelines.jpg', category: 'analysis' },
  { path: '/strategic-analysis/portugal-golden-visa-portfolio', title: 'Portugal Golden Visa as a Portfolio Addition', description: 'Why Americans are adding Portugal to their portfolio.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/capital-controls', title: 'The Return of Capital Controls', description: 'Understanding capital controls and their impact.', priority: 0.7, changefreq: 'monthly', ogImage: '/og-capital-controls.jpg', category: 'analysis' },
  { path: '/strategic-analysis/golden-visa-students', title: 'Golden Visas for International Students', description: 'Golden visa advantages for international students.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/h1b-migration-portugal', title: 'The Great Migration', description: 'H-1B holders choosing Portuguese stability.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/second-residency-2026', title: 'The Rise of Second Residency', description: 'The rise of second residency as a portfolio addition.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/american-dream-global-mobility', title: 'The New American Dream IS Global Mobility', description: 'Americans trading stress for global mobility.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/european-yachting-golden-visa', title: 'European Yachting & the Golden Visa', description: 'How golden visas unlock a maritime lifestyle in Europe.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/golden-visa-surge', title: 'The Recent Surge in Golden Visa Interest', description: 'Why Americans are rushing for second passports.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/retirement-mobility', title: 'The New Geography of Retirement Mobility', description: 'The new geography of retirement arbitrage.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/portugal-golden-visa-2026-guide', title: 'Portugal Golden Visa 2026 Guide', description: 'Complete 2026 guide to the Portugal Golden Visa.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/portugal-ifici-tax-regime-2025', title: "Portugal's IFICI Tax Regime 2025", description: 'Analysis of Portugal IFICI tax benefits.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/portuguese-passport-global-investors', title: "The Portuguese Passport: Europe's Leading Choice", description: 'Why global investors choose a Portuguese passport.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/strategic-investor-citizenship-investment', title: 'The Strategic Investor 2026', description: 'Strategic approach to citizenship by investment.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/cbi-fraud-investment-migration', title: 'Navigating the CBI Minefield', description: 'Fraud schemes in citizenship by investment.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },
  { path: '/strategic-analysis/wealth-managers-immigration-brokers', title: 'Wealth Managers & Immigration Brokers', description: 'The strategic alliance for HNW clients.', priority: 0.7, changefreq: 'monthly', category: 'analysis' },

  { path: '/faqs/golden-visa-program', title: 'What is a Golden Visa program?', description: 'How residency-by-investment works, investment requirements, and citizenship pathways.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/retire-abroad-cost', title: 'How much does it cost to retire abroad?', description: 'Costs of retiring abroad including housing, healthcare, and golden visa investment.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/healthcare-options', title: 'What are the healthcare options for retirees abroad?', description: 'Public and private healthcare options for retirees in Portugal, Greece, and Italy.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/citizenship-timeline', title: 'How long does it take to get citizenship through a Golden Visa?', description: 'Citizenship timelines for Portugal, Greece, Italy, and other golden visa programs.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/dual-citizenship', title: 'Can I keep my US citizenship if I get citizenship in another country?', description: 'US dual citizenship rules when obtaining a second passport through a golden visa.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/tax-implications', title: 'What are the tax implications of retiring abroad?', description: 'Tax implications of retiring abroad including DTAs and common mistakes.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/language-requirements', title: 'Do I need to speak the local language to retire abroad?', description: 'Language requirements for residency and citizenship applications.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/minimum-investment', title: 'What is the minimum investment for a Golden Visa?', description: 'Minimum golden visa investment thresholds from 250,000 euros.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/investor-research-advice', title: 'What advice would you give new investors starting research?', description: 'Due diligence starting with government sources before a six or seven figure commitment.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/bank-account-opening', title: 'How hard was it to open a bank account and can you use any bank?', description: 'Bank account opening for golden visa residents.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/board-positions', title: 'What are the opportunities to sit on boards or advisory boards for startups?', description: 'Board and advisory opportunities connected to golden visa fund investments.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/immigration-law-changes', title: 'Are you concerned about potential changes in immigration law?', description: 'How golden visa programs change and how to monitor policy risk.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/fund-interview-lessons', title: 'What was the most surprising thing you learned from fund interviews?', description: 'Lessons from golden visa fund manager interviews.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/family-eligibility', title: 'Is the Golden Visa applicable just for investors or for family too?', description: 'Which family members qualify for golden visa programs.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/expected-returns', title: 'What is your expected annual return for five years?', description: 'Expected returns for golden visa qualifying funds.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/startup-exits', title: 'When startups go the IPO route, what stock exchanges are used?', description: 'IPO venues used by startups in golden visa investment structures.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/getting-started', title: 'How do I get started with the retirement citizenship process?', description: 'First steps for American and Canadian families starting a golden visa application.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/documents-and-processes', title: 'What are the important documents and processes to be aware of?', description: 'Core documents and processes for golden visa applications.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/fund-selection-framework', title: 'What framework should be used for fund selection?', description: 'Fund selection framework for golden visa qualifying investments.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/fund-due-diligence', title: 'What due diligence criteria should be applied when evaluating funds?', description: 'Due diligence criteria for golden visa funds.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
  { path: '/faqs/fund-requirements-investment-focus', title: 'What are the fund requirements and what investment focus is most beneficial?', description: 'Fund requirements and investment focus for golden visa programs.', priority: 0.6, changefreq: 'monthly', category: 'faq' },
];

export const getRelatedPages = (currentPath: string, category?: string, limit = 3): PageRoute[] => {
  const currentPage = PAGE_ROUTES.find(r => r.path === currentPath);
  const targetCategory = category || currentPage?.category;

  return PAGE_ROUTES
    .filter(r => r.path !== currentPath && r.category === targetCategory)
    .slice(0, limit);
};
