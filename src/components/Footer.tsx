import { DisclaimerFooter } from "./DisclaimerFooter";

const Footer = () => {
  const mainNavLinks = [
    { to: "/about", label: "About" },
    { to: "/lifestyle", label: "Lifestyle" },
    { to: "/tools", label: "Tools" },
    { to: "/strategic-analysis", label: "Strategic Analysis" },
    { to: "/faqs", label: "FAQs" },
    { to: "/cost-of-living", label: "Cost of Living" },
    { to: "/contact", label: "Contact" },
  ];

  const destinationLinks = [
    { to: "/strategic-analysis/portugal-golden-visa-2026-guide", label: "Portugal Golden Visa" },
    { to: "/strategic-analysis/portuguese-passport-global-investors", label: "Portuguese Passport" },
    { to: "/strategic-analysis/second-residency-2026", label: "European Residency" },
    { to: "/faqs/healthcare-options", label: "International Healthcare" },
    { to: "/faqs/tax-implications", label: "Tax Implications" },
    { to: "/cost-of-living", label: "Cost of Living" },
  ];

  const articleLinks = [
    { to: "/strategic-analysis/golden-visa-citizenship", label: "Golden Visa vs Citizenship" },
    { to: "/strategic-analysis/residency-timelines-2025", label: "Residency Timelines 2025" },
    { to: "/strategic-analysis/capital-controls", label: "Capital Controls" },
    { to: "/strategic-analysis/second-residency-2026", label: "Second Residency 2026" },
    { to: "/strategic-analysis/h1b-migration-portugal", label: "H1B Migration to Portugal" },
    { to: "/strategic-analysis/golden-visa-students", label: "Golden Visa for Students" },
  ];

  const analysisLinks = [
    { to: "/strategic-analysis/portugal-golden-visa-2026-guide", label: "Portugal Golden Visa 2026 Guide" },
    { to: "/strategic-analysis/portugal-ifici-tax-regime-2025", label: "Portugal IFICI Tax Regime" },
    { to: "/strategic-analysis/portuguese-passport-global-investors", label: "Portuguese Passport Guide" },
    { to: "/strategic-analysis/strategic-investor-citizenship-investment", label: "Strategic Investor Guide" },
  ];

  return (
    <footer className="py-16 bg-secondary/10 border-t border-primary/10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <nav aria-label="Main navigation">
            <h3 className="text-sm font-semibold text-primary mb-4">Navigate</h3>
            <ul className="space-y-2">
              {mainNavLinks.map(link => (
                <li key={link.to}>
                  <a href={link.to} className="text-sm text-primary/70 hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Destinations">
            <h3 className="text-sm font-semibold text-primary mb-4">Destinations</h3>
            <ul className="space-y-2">
              {destinationLinks.map(link => (
                <li key={link.to}>
                  <a href={link.to} className="text-sm text-primary/70 hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Articles">
            <h3 className="text-sm font-semibold text-primary mb-4">Latest Articles</h3>
            <ul className="space-y-2">
              {articleLinks.map(link => (
                <li key={link.to}>
                  <a href={link.to} className="text-sm text-primary/70 hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="In-depth analysis">
            <h3 className="text-sm font-semibold text-primary mb-4">Analysis</h3>
            <ul className="space-y-2">
              {analysisLinks.map(link => (
                <li key={link.to}>
                  <a href={link.to} className="text-sm text-primary/70 hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <DisclaimerFooter />

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary/60">
            © {new Date().getFullYear()} Retirement Citizenship. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="/" className="text-primary/70 hover:text-primary transition-colors">Home</a>
            <a href="/privacy-policy" className="text-primary/70 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/sitemap.xml" className="text-primary/70 hover:text-primary transition-colors">Sitemap</a>
            <a href="https://imidaily.com" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">IMI Daily</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
