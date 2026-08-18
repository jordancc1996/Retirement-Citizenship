import React from 'react';
import Footer from '@/components/Footer';
import ShareButtons from '@/components/ShareButtons';
import { ArrowLeft } from 'lucide-react';
import UniversalContactForm from "@/components/UniversalContactForm";

const LanguageRequirementsNaturalization = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-8 py-4">
          <nav className="flex items-center justify-between text-xs tracking-[0.15em] uppercase font-normal">
            <div className="flex items-center space-x-12">
              <a href="/about" className="hover:opacity-60 transition-opacity text-primary">About</a>
              <a href="/lifestyle" className="hover:opacity-60 transition-opacity text-primary">Lifestyle</a>
              <a href="/strategic-analysis" className="hover:opacity-60 transition-opacity text-primary">Blogs</a>
            </div>
            
            <a href="/" className="font-normal text-xs tracking-[0.15em] text-primary hover:opacity-60 transition-opacity">
              RETIREMENT CITIZENSHIP
            </a>
            
            <div className="flex items-center space-x-12">
              <a href="/strategic-analysis" className="hover:opacity-60 transition-opacity text-primary">Analysis</a>
              <a href="/cost-of-living" className="hover:opacity-60 transition-opacity text-primary">Cost of Living</a>
              <a href="/contact" className="hover:opacity-60 transition-opacity text-primary">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-8">
          <a href="/strategic-analysis" className="inline-flex items-center text-primary hover:opacity-70 transition-opacity mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="text-sm uppercase tracking-wider">Back to Blogs</span>
          </a>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary">
              Language Requirements for Naturalization Analysis
            </h1>
            <p className="text-sm uppercase tracking-widest text-primary/70 mb-8">November 21, 2025</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-background">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none text-primary">
            <h2 className="text-3xl font-light mt-0 mb-6">Language Requirements by Country</h2>
            <p className="text-xl leading-relaxed mb-8">
              Language requirements for naturalization in Portugal and Spain sit at CEFR A2, while Italy and Greece require B1. These requirements apply to citizenship applications only, not to Golden Visa residency. Most Golden Visa holders are never tested because they exit at permanent residency before reaching the citizenship stage.
            </p>

            <h3 className="text-2xl font-light mt-8 mb-4">Portugal</h3>
            <p className="leading-relaxed mb-6">
              Portugal requires CEFR A2 proficiency in Portuguese. The standard test is the CAPLE exam, administered by the University of Lisbon. The language test is required after five years of legal residency before applying for citizenship. Permanent residency at five years does not require a language test. A2 is a basic conversational level, the equivalent of roughly 200 hours of study.
            </p>

            <h3 className="text-2xl font-light mt-8 mb-4">Spain</h3>
            <p className="leading-relaxed mb-6">
              Spain requires CEFR A2 Spanish for naturalization after ten years of legal residency (two years for nationals of Latin American countries, Portugal, Andorra, the Philippines, Equatorial Guinea, and Sephardic Jews). The standard test is the DELE A2, administered by the Instituto Cervantes worldwide. Spain's Non-Lucrative Visa does not require a language test for residency renewal.
            </p>

            <h3 className="text-2xl font-light mt-8 mb-4">Italy</h3>
            <p className="leading-relaxed mb-6">
              Italy requires CEFR B1 Italian for naturalization after ten years of legal residency for non-EU citizens. The B1 level requires approximately 350-400 hours of study and covers everyday situations, travel, and familiar topics. The test is administered through authorized Italian cultural institutes. Italy's Elective Residency Visa does not require Italian proficiency for initial application or renewal.
            </p>

            <h3 className="text-2xl font-light mt-8 mb-4">Greece</h3>
            <p className="leading-relaxed mb-6">
              Greece requires CEFR B1 Greek for naturalization after seven years of legal residency. Greek language tests are administered through the Greek state certificate of language proficiency (KPG). B1 Greek is considered moderately challenging for English speakers given the different alphabet and grammar structure. The Golden Visa residency permit does not require Greek language proficiency at any stage.
            </p>

            <h2 className="text-3xl font-light mt-12 mb-6">What This Means for Golden Visa Investors</h2>
            <p className="leading-relaxed mb-6">
              For most American and Canadian Golden Visa investors, language requirements are a long-term consideration rather than an immediate barrier. The residency permit itself, including renewals every two to five years, does not require language proficiency in any of these four countries. Language becomes relevant only if you pursue citizenship, which requires five to ten years of residency first depending on the country. Many investors reach permanent residency and stop there, making the language requirement irrelevant to their planning.
            </p>
          </div>
        </div>
      </article>

      <div className="border-t">
        <div className="container mx-auto">
          <ShareButtons 
            title="Language Requirements for Naturalization Analysis" 
            url={`${typeof window !== 'undefined' ? window.location.origin : 'https://retirementcitizenship.com'}/news/language-requirements-naturalization`}
          />
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-primary mb-4">Request the 2026 Market Analysis</h2>
            <p className="text-lg text-primary leading-relaxed max-w-3xl mx-auto mb-12">
              Receive our comprehensive briefing on residency programs, regulatory changes, and strategic opportunities.
            </p>
          </div>
          
          <UniversalContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LanguageRequirementsNaturalization;
