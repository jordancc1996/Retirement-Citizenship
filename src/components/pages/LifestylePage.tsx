import React from 'react';
import { assetUrl } from '@/lib/assetUrl';
import lifestyleHero from "@/assets/lifestyle-hero.jpg";
import Footer from "@/components/Footer";
import UniversalContactForm from "@/components/UniversalContactForm";
import Header from '@/components/Header';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import portugueseCoastImage from "@/assets/portuguese-coast.jpg";
import greekIslandsImage from "@/assets/greek-islands.jpg";
import italianCountrysideImage from "@/assets/italian-countryside.jpg";
import buenosAiresImage from "@/assets/buenos-aires.jpg";

const Lifestyle = () => {
  return (
    <>
    <div className="min-h-screen bg-background">
      <Header variant="hero" />

      {/* Hero Section - Full bleed with transparent nav overlay */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl(lifestyleHero)})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Breadcrumbs */}
        <div className="absolute top-20 left-0 right-0 z-10">
          <div className="container mx-auto px-8">
            <Breadcrumbs items={[{ name: 'Lifestyle', url: '/lifestyle' }]} variant="hero" />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-8 max-w-4xl text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white">
            Retirement Lifestyle Europe
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Retirement lifestyle Europe for American and Canadian families covers Portugal, Greece, and Italy, with Argentina as a fourth coastal and urban alternative.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-light mb-6 text-primary">Coastal Living</h2>
              <p className="text-lg text-primary leading-relaxed mb-6">
                Wake up to endless ocean views, spend your days walking pristine beaches, and enjoy world-class dining with fresh seafood. Our coastal retirement destinations offer the perfect blend of relaxation and sophistication, with significantly lower <a href="/cost-of-living" className="text-primary underline hover:opacity-70 transition-opacity">costs of living compared to US coastal cities</a>. Discover how to achieve <a href="/strategic-analysis" className="text-primary underline hover:opacity-70 transition-opacity">lifestyle savings abroad</a> while enhancing your quality of life.
              </p>
              <ul className="text-primary space-y-2">
                <li>• Beachfront properties with panoramic views</li>
                <li>• Access to exclusive beach clubs and marinas</li>
                <li>• World-class golf courses and spas</li>
                <li>• Vibrant expat communities</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-border mb-4">
                <img 
                  src={assetUrl(portugueseCoastImage)} 
                  alt="Portuguese Coast - dramatic cliffs and ocean waves"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
              <div className="bg-secondary/20 p-6">
                <h3 className="text-xl font-medium text-primary mb-2">Featured: Portuguese Coast</h3>
                <p className="text-primary">Discover the charm of Portugal's Atlantic coastline with its golden beaches, historic towns, and exceptional quality of life. Learn more about <a href="/strategic-analysis/golden-visa-citizenship" className="text-primary underline hover:opacity-70 transition-opacity">Portugal's Golden Visa program</a> and explore <a href="/cost-of-living" className="text-primary underline hover:opacity-70 transition-opacity">Portugal's affordable living costs</a>.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-4 order-2 md:order-1">
              <div className="rounded-lg overflow-hidden border border-border mb-4">
                <img 
                  src={assetUrl(greekIslandsImage)} 
                  alt="Greek Islands - turquoise waters and white coastal buildings"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
              <div className="bg-secondary/20 p-6">
                <h3 className="text-xl font-medium text-primary mb-2">Featured: Greek Islands</h3>
                <p className="text-primary">Experience Mediterranean paradise with stunning sunsets, crystal-clear waters, and a relaxed island lifestyle in one of the world's most beautiful destinations.</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-light mb-6 text-primary">Greek Islands Paradise</h2>
              <p className="text-lg text-primary leading-relaxed mb-6">
                Experience the magic of the Greek Islands where crystal-clear turquoise waters meet whitewashed villages, ancient history blends with modern comfort, and the Mediterranean lifestyle promises relaxation and adventure. With exceptional <a href="/cost-of-living" className="text-primary underline hover:opacity-70 transition-opacity">value compared to US coastal retirement destinations</a> and high-quality European healthcare, the Greek Islands offer an idyllic retirement setting.
              </p>
              <ul className="text-primary space-y-2">
                <li>• Stunning beaches with crystal-clear Aegean waters</li>
                <li>• Rich history and archaeological treasures</li>
                <li>• Fresh Mediterranean cuisine and local wines</li>
                <li>• Warm, welcoming island communities</li>
                <li>• Year-round mild climate with 300+ days of sunshine</li>
                <li>• Island hopping adventures and water sports</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 text-primary">Urban Sophistication</h2>
              <p className="text-lg text-primary leading-relaxed mb-6">
                Immerse yourself in cultural capitals where history meets modernity. Enjoy world-class museums, theaters, restaurants, and the convenience of urban living with European charm. Compare <a href="/cost-of-living" className="text-primary underline hover:opacity-70 transition-opacity">urban retirement costs across international cities</a> and explore our <a href="/strategic-analysis" className="text-primary underline hover:opacity-70 transition-opacity">in-depth analysis of retirement options</a>. Ready to plan your move? <a href="/contact" className="text-primary underline hover:opacity-70 transition-opacity">Contact our retirement planning experts</a>.
              </p>
              <ul className="text-primary space-y-2">
                <li>• Historic city centers and cultural attractions</li>
                <li>• Michelin-starred restaurants and cafes</li>
                <li>• Excellent public transportation</li>
                <li>• Rich arts and cultural scene</li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border border-border mb-4">
                <img 
                  src={assetUrl(italianCountrysideImage)} 
                  alt="Italian Countryside - rolling vineyards and historic church"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
              <div className="bg-secondary/20 p-6">
                <h3 className="text-xl font-medium text-primary mb-2">Featured: Italian Countryside</h3>
                <p className="text-primary">Discover la dolce vita in Tuscany or Umbria, where rolling hills, historic villages, world-renowned cuisine, and artistic heritage create an unparalleled retirement experience.</p>
              </div>
              <div className="rounded-lg overflow-hidden border border-border mt-4 mb-4">
                <img 
                  src={assetUrl(buenosAiresImage)} 
                  alt="Buenos Aires - coastal beach with modern skyline"
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
              <div className="bg-secondary/20 p-6">
                <h3 className="text-xl font-medium text-primary mb-2">Featured: Buenos Aires, Argentina</h3>
                <p className="text-primary">Embrace the vibrant culture of South America with European elegance, world-class steakhouses, tango, and exceptional value for your retirement dollar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary">
            Ready to Explore Your Retirement Options?
          </h2>
          <p className="text-lg text-primary leading-relaxed mb-8 max-w-2xl mx-auto">
            Discover how you can achieve your dream retirement lifestyle abroad with lower costs, better healthcare, and enhanced quality of life. Our experts are here to guide you through every step of the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="inline-block bg-primary text-primary-foreground px-8 py-4 uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Schedule a Private Consultation
            </a>
            <a 
              href="/cost-of-living" 
              className="inline-block border border-primary text-primary px-8 py-4 uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Compare Living Costs
            </a>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Lifestyle;
