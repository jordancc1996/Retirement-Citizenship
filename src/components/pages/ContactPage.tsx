import React, { useState } from 'react';
import { assetUrl } from '@/lib/assetUrl';
import contactHero from '@/assets/contact-hero.jpg';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import InternalLinks from '@/components/seo/InternalLinks';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
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
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ ...data, source: 'Contact Page Consultation Form' })
      });

      if (response.ok) {
        toast({
          title: "Submission Successful!",
          description: "A principal will respond within one business day.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting. Please try again.",
        variant: "destructive",
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
        <section
          className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${assetUrl(contactHero)})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-20 left-0 right-0 z-10">
            <div className="container mx-auto px-8">
              <Breadcrumbs items={[{ name: 'Contact', url: '/contact' }]} variant="hero" />
            </div>
          </div>
          <div className="container mx-auto px-8 max-w-3xl text-center relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">
              Request a Private Consultation
            </h1>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-xl">
            <p className="font-sans text-muted-foreground leading-relaxed text-center mb-12">
              We accept a limited number of new engagements each year. To begin, please share your name, contact email, and the primary objective of your inquiry. A principal will respond within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  Email Address *
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

              <div>
                <label htmlFor="objective" className="block text-sm font-medium text-foreground mb-2">
                  What brings you to Retirement Citizenship? *
                </label>
                <select
                  id="objective"
                  name="objective"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-md focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold transition-colors"
                >
                  <option value="" disabled>Select your primary objective</option>
                  <option value="estate-planning">Estate Planning Integration</option>
                  <option value="tax-optimization">Tax Optimization Strategy</option>
                  <option value="second-citizenship">Second Citizenship</option>
                  <option value="residency-planning">Residency Planning</option>
                  <option value="family-office">Family Office Advisory</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-gold text-primary font-medium px-8 py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 text-sm tracking-wide"
              >
                {isSubmitting ? "Submitting..." : "Request Consultation"}
              </button>
            </form>

            <p className="text-center text-muted-foreground text-sm mt-8">
              All inquiries are handled with strict confidentiality. We do not share client information with third parties.
            </p>
          </div>
        </section>

        <InternalLinks currentPath="/contact" title="Explore Our Resources" limit={6} />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
