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
            <p className="text-xl leading-relaxed mb-8">
              Content will be added here in the next update.
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
