import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://retirementcitizenship.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) =>
        !page.includes('/privacy-policy') &&
        !page.includes('/404'),
    }),
  ],
  trailingSlash: 'never',
  redirects: {
    '/our-approach': '/about',
    '/market-updates': '/strategic-analysis',
    '/blogs': '/strategic-analysis',
    '/analysis': '/strategic-analysis',
    '/portugal-golden-visa':
      '/strategic-analysis/portugal-golden-visa-2026-guide',
    '/healthcare': '/cost-of-living',
    '/healthcare-abroad': '/cost-of-living',
    '/tax-implications': '/faqs/tax-implications',
    '/paradise-destinations': '/lifestyle',
    '/lifestylesavings': '/cost-of-living',
    '/latest-news': '/strategic-analysis',
    '/news': '/strategic-analysis',
    '/european-residency':
      '/strategic-analysis/second-residency-2026',
    '/contact-us': '/contact',
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
