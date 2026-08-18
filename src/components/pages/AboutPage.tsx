import React from 'react';
import { assetUrl } from '@/lib/assetUrl';
import aboutHero from '@/assets/about-hero.jpg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import InternalLinks from '@/components/seo/InternalLinks';

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-background">
      <Header variant="hero" />

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl(aboutHero)})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute top-20 left-0 right-0 z-10">
          <div className="container mx-auto px-8">
            <Breadcrumbs items={[{ name: 'About', url: '/about' }]} variant="hero" />
          </div>
        </div>
        
        <div className="container mx-auto px-8 max-w-4xl text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white">
            About Retirement Citizenship
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Retirement citizenship advisory at this firm covers Portugal, Greece, and Italy for American and Canadian families with $5M or more in investable assets.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-primary">

            <h2 className="font-serif text-3xl font-light mb-6 text-primary">Our Founding Thesis</h2>
            <p className="text-lg leading-relaxed mb-10">
              The regulatory and geopolitical landscape facing American and Canadian families with significant assets has shifted fundamentally. Capital controls, extraterritorial tax enforcement, and the accelerating complexity of cross-border compliance have made jurisdictional optionality a structural requirement—not a lifestyle preference. Second residency and citizenship are no longer aspirational; they are instruments of capital preservation, succession continuity, and sovereign risk mitigation. Retirement Citizenship was founded on the conviction that families who build wealth across decades deserve the same rigor in protecting it across borders—through deliberate, forward-looking residency and citizenship architecture.
            </p>

            <h2 className="font-serif text-3xl font-light mb-6 text-primary">Our Methodology</h2>
            <p className="text-lg leading-relaxed mb-10">
              Every engagement begins not with a destination, but with the client's existing infrastructure: their tax structure, trust architecture, estate plan, and the regulatory obligations that attach to their current domicile. From that foundation, we conduct jurisdictional analysis to identify residency and citizenship programs that create strategic alignment—rather than friction—with the client's wealth plan. We evaluate each jurisdiction against objective criteria: tax treaty networks, inheritance and gift tax treatment, FATCA and FBAR reporting implications, physical presence requirements, and long-term pathway to citizenship. Retirement Citizenship does not recommend programs. We provide the institutional-grade intelligence that allows clients and their legal counsel to make informed, defensible decisions about where and how to establish residency.
            </p>

            <h2 className="font-serif text-3xl font-light mb-6 text-primary">Who We Work With</h2>
            <p className="text-lg leading-relaxed mb-10">
              Our clients are American and Canadian families with $5M or more in investable assets who recognize that residency planning is an extension of their broader wealth strategy. We work with family offices managing multi-generational portfolios, where a second jurisdiction serves as both a risk mitigation tool and a succession planning instrument. We also serve the attorneys, tax advisors, and wealth managers who advise these families—professionals who require reliable, current jurisdictional data to fulfill their fiduciary responsibilities. Our work is deliberate, research-intensive, and structured around long-term outcomes. We engage with principals and advisors who approach residency and citizenship as a multi-year commitment, not a transaction.
            </p>

            <p className="text-lg leading-relaxed mb-10">
              If your objective is to understand how second residency integrates with your existing estate plan, tax structure, or family governance framework, we invite you to <a href="/contact" className="text-accent-gold hover:text-accent-gold-dark underline transition-colors">request a private consultation</a>. For a detailed overview of current jurisdictional opportunities, access our <a href="/briefing" className="text-accent-gold hover:text-accent-gold-dark underline transition-colors">2026 Strategic Briefing</a>.
            </p>

            <h2 className="font-serif text-3xl font-light mb-6 text-primary">Compliance & Due Diligence Infrastructure</h2>
            <p className="text-lg leading-relaxed mb-6">
              Retirement Citizenship partners exclusively with law firms that maintain Anti-Money Laundering compliance programs certified under the relevant jurisdiction's Financial Intelligence Unit requirements. We do not engage with legal counsel whose AML protocols have not been independently verified, regardless of reputation or referral source.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Before including any investment fund structure in our jurisdictional analysis, we conduct independent due diligence on the fund's regulatory licensing, management track record, fee transparency, and compliance history. Programs that have not passed our internal vetting process are excluded from all client-facing materials—irrespective of commission or referral arrangements. Retirement Citizenship does not accept compensation from program operators, government agencies, or investment funds.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              All client information is handled under strict confidentiality protocols. Data is never disclosed to program operators, government agencies, or any third party without explicit, written client consent. Our attorney partners are required to conduct full Know Your Customer verification on all clients as a condition of engagement—a non-negotiable prerequisite that applies before any substantive advisory work begins.
            </p>
            <p className="text-lg leading-relaxed">
              These standards are not aspirational. They are the baseline conditions under which every Retirement Citizenship engagement operates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-8 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
            Begin with a Private Conversation
          </h2>
          <p className="font-sans text-lg text-white/85 leading-relaxed mb-10">
            We work with a select number of American and Canadian families and their advisors each year. Engagements begin with a confidential, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent-gold text-primary font-medium text-sm uppercase tracking-wider hover:bg-accent-gold-dark transition-colors"
            >
              Schedule a Private Consultation
            </a>
            <a
              href="/briefing"
              className="inline-block px-8 py-4 border border-white text-white font-medium text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Request the 2026 Strategic Briefing
            </a>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <InternalLinks 
        currentPath="/about" 
        title="Explore Our Resources" 
        limit={6}
      />

      <Footer />
    </div>
    </>
  );
};

export default About;
