import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { assetUrl } from '@/lib/assetUrl';
import reportCover from '@/assets/briefing-report-cover.jpg';
import { useToast } from '@/hooks/use-toast';

const highlights = [
  {
    title: 'Jurisdictional Tax Comparison',
    description: 'Capital gains, inheritance, and income tax treatment across 12 key jurisdictions.',
  },
  {
    title: 'FATCA & FBAR Implications',
    description: 'Reporting obligations for US persons holding foreign residency or citizenship.',
  },
  {
    title: 'Estate Planning Integration',
    description: 'How second residency interacts with existing trust structures and succession plans.',
  },
];

const Briefing = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formcarry.com/s/WyxZp21S-N1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, source: 'Briefing Report Access Form' }),
      });

      if (response.ok) {
        toast({
          title: 'Report Sent',
          description: 'Check your inbox — the report is on its way.',
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header variant="hero" />

        {/* Hero Section */}
        <section className="bg-primary py-24 md:py-32">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
                  The 2026 UHNW Global Mobility & Tax Strategy Report
                </h1>
                <p className="font-sans text-white/80 text-lg leading-relaxed">
                  The 2026 report covers residency, citizenship, and tax treatment across 12 jurisdictions for American and Canadian families with cross-border assets.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={assetUrl(reportCover)}
                  alt="2026 UHNW Global Mobility & Tax Strategy Report cover"
                  className="w-64 md:w-72 lg:w-80 shadow-2xl rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-8 max-w-5xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-16">
              What's Inside
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {highlights.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-px bg-accent-gold mx-auto mb-6" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Access Form Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto px-8 max-w-md text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Access the Report
            </h2>
            <p className="font-sans text-muted-foreground mb-10">
              Enter your details below to receive the full report immediately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-md focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Professional Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your professional email"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-md focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-gold text-primary font-medium px-8 py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 text-sm tracking-wide"
              >
                {isSubmitting ? 'Submitting...' : 'Access the Report'}
              </button>
            </form>

            <p className="text-muted-foreground text-sm mt-8">
              Delivered immediately to your inbox. No sales calls. Strict confidentiality.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Briefing;
