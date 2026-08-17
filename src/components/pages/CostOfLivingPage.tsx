import React, { useState } from 'react';
import { assetUrl } from '@/lib/assetUrl';
import costOfLivingHero from "@/assets/cost-of-living-hero.jpg";
import Footer from "@/components/Footer";
import UniversalContactForm from "@/components/UniversalContactForm";
import Header from '@/components/Header';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { useToast } from '@/hooks/use-toast';

const CostOfLiving = () => {
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
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Submission Successful!",
          description: "Submission Successful!",
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

      {/* Hero Section - Full bleed with transparent nav overlay */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetUrl(costOfLivingHero)})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Breadcrumbs */}
        <div className="absolute top-20 left-0 right-0 z-10">
          <div className="container mx-auto px-8">
            <Breadcrumbs items={[{ name: 'Cost of Living', url: '/cost-of-living' }]} variant="hero" />
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-8 max-w-4xl text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white">
            Cost of Living
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Maximize your purchasing power. Compare living costs in top Citizenship by Investment destinations for a wealthier retirement citizenship
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 max-w-6xl">
          {/* Overview */}
          <div className="text-center mb-20">
            <h2 className="text-3xl font-light mb-6 text-primary">Living Costs Worldwide</h2>
            <p className="text-lg text-primary leading-relaxed max-w-3xl mx-auto">
              Discover how much further your retirement budget goes in premier <a href="/lifestyle" className="text-primary underline hover:opacity-70 transition-opacity">international retirement destinations</a>. Our comprehensive cost analysis covers everything from housing and healthcare expenses to dining and entertainment, helping you unlock significant retirement savings.
            </p>
          </div>

          {/* Cost Comparison Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-secondary/20 p-8 text-center">
              <h3 className="text-2xl font-light text-primary mb-4">Portugal</h3>
              <div className="text-4xl font-light text-primary mb-4">$2,800</div>
              <p className="text-sm text-primary uppercase tracking-wider mb-6">Monthly Cost for Luxury Living</p>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-primary">Housing</span>
                  <span className="text-primary">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Food & Dining</span>
                  <span className="text-primary">$600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Transportation</span>
                  <span className="text-primary">$200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Healthcare</span>
                  <span className="text-primary">$300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Entertainment</span>
                  <span className="text-primary">$500</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 text-center">
              <h3 className="text-2xl font-light text-primary mb-4">Greece</h3>
              <div className="text-4xl font-light text-primary mb-4">$2,600</div>
              <p className="text-sm text-primary uppercase tracking-wider mb-6">Monthly Cost for Luxury Living</p>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-primary">Housing</span>
                  <span className="text-primary">$1,100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Food & Dining</span>
                  <span className="text-primary">$550</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Transportation</span>
                  <span className="text-primary">$180</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Healthcare</span>
                  <span className="text-primary">$270</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Entertainment</span>
                  <span className="text-primary">$500</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 text-center">
              <h3 className="text-2xl font-light text-primary mb-4">Italy</h3>
              <div className="text-4xl font-light text-primary mb-4">$3,000</div>
              <p className="text-sm text-primary uppercase tracking-wider mb-6">Monthly Cost for Luxury Living</p>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-primary">Housing</span>
                  <span className="text-primary">$1,300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Food & Dining</span>
                  <span className="text-primary">$650</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Transportation</span>
                  <span className="text-primary">$220</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Healthcare</span>
                  <span className="text-primary">$330</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Entertainment</span>
                  <span className="text-primary">$500</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 text-center">
              <h3 className="text-2xl font-light text-primary mb-4">Argentina</h3>
              <div className="text-4xl font-light text-primary mb-4">$2,200</div>
              <p className="text-sm text-primary uppercase tracking-wider mb-6">Monthly Cost for Luxury Living</p>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-primary">Housing</span>
                  <span className="text-primary">$900</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Food & Dining</span>
                  <span className="text-primary">$500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Transportation</span>
                  <span className="text-primary">$150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Healthcare</span>
                  <span className="text-primary">$250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary">Entertainment</span>
                  <span className="text-primary">$400</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison with US */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-light mb-6 text-primary">US vs International</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Housing Savings</h3>
                  <p className="text-primary leading-relaxed">
                    Luxury apartments in Portugal, Greece, Italy, and Argentina cost 60-70% less than comparable properties in major US metropolitan areas. Learn how to maximize <a href="/strategic-analysis" className="text-primary underline hover:opacity-70 transition-opacity">your retirement savings through strategic relocation</a> and explore <a href="/lifestyle" className="text-primary underline hover:opacity-70 transition-opacity">coastal, mountain, and urban retirement lifestyle options</a>.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Healthcare Costs</h3>
                  <p className="text-primary leading-relaxed">
                    Premium private international healthcare costs less than basic US insurance premiums, with superior service quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">Dining & Entertainment</h3>
                  <p className="text-primary leading-relaxed">
                    Fine dining experiences that would cost $200+ in the US are available for under $80 in Portugal, Greece, Italy, and Argentina. Read our <a href="/strategic-analysis" className="text-primary underline hover:opacity-70 transition-opacity">comprehensive retirement guides</a> for detailed insights.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/30 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-primary mb-6 text-center">Your $5,000 US Budget Gets You</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                  <span className="text-primary">Portugal</span>
                  <span className="text-primary font-medium">$8,900 lifestyle</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                  <span className="text-primary">Greece</span>
                  <span className="text-primary font-medium">$9,600 lifestyle</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/20 pb-2">
                  <span className="text-primary">Italy</span>
                  <span className="text-primary font-medium">$8,300 lifestyle</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary">Argentina</span>
                  <span className="text-primary font-medium">$11,400 lifestyle</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="/contact" className="text-sm text-primary underline hover:opacity-70 transition-opacity">Get personalized cost analysis for your retirement →</a>
              </div>
            </div>
          </div>

          {/* Cost Categories */}
          <div className="bg-secondary/30 p-12 rounded-lg">
            <h2 className="text-3xl font-light mb-8 text-primary text-center">Detailed Cost Breakdown</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-medium text-primary mb-4">Housing</h3>
                <ul className="text-primary space-y-2 text-sm">
                  <li>• Luxury 2BR apartment: $800-2,500</li>
                  <li>• Utilities & internet: $100-200</li>
                  <li>• Property taxes: $200-800/year</li>
                  <li>• Maintenance: $50-150</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-4">Transportation</h3>
                <ul className="text-primary space-y-2 text-sm">
                  <li>• Public transport pass: $30-80</li>
                  <li>• Taxi/rideshare: $50-150</li>
                  <li>• Car rental: $300-600</li>
                  <li>• Flights within Europe: $100-300</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-4">Food & Dining</h3>
                <ul className="text-primary space-y-2 text-sm">
                  <li>• Groceries: $200-400</li>
                  <li>• Fine dining: $40-100/meal</li>
                  <li>• Casual dining: $15-30/meal</li>
                  <li>• Coffee & cafes: $50-100</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-4">Lifestyle</h3>
                <ul className="text-primary space-y-2 text-sm">
                  <li>• Gym membership: $40-80</li>
                  <li>• Theater/concerts: $20-80</li>
                  <li>• Spa treatments: $50-150</li>
                  <li>• Weekend trips: $200-500</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial: Cost of Living for Retirement Abroad */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 max-w-4xl">
          <header className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-primary mb-6">
              Cost of Living for Retirement Abroad
            </h2>
            <p className="text-lg text-primary leading-relaxed">
              Cost of living data has a reliability problem: most published figures are averages built from local salaries, local consumption habits, and local purchasing priorities that don't match the lifestyle of a foreign retiree with foreign income. The number most useful to you is not "what does a Portuguese family spend per month in Porto" but "what does a retired couple with a €3,500/month foreign income actually spend in Porto if they're renting a two-bedroom apartment, eating well, traveling occasionally within Europe, and maintaining the kind of discretionary life they had at home." Those numbers are different—and the gap matters. Use the tables below as orientation, not planning inputs. The editorial commentary with each country section translates the raw figures into terms relevant to internationally mobile retirees.
            </p>
          </header>

          {/* Portugal */}
          <article className="mb-16">
            <h3 className="font-serif text-3xl font-light text-primary mb-4">Portugal</h3>
            <p className="text-primary leading-relaxed mb-6">
              Portugal remains the most affordable country in Western Europe for retirees with foreign income, though the word "affordable" needs qualification. Lisbon and the Algarve coast have seen sustained property price and rental inflation since 2020—according to Eurostat data from the first half of 2025, Portugal registered the highest annual house price growth in the EU at +16.3%. That figure affects what you'll pay for housing. Day-to-day costs—groceries, dining, transport, healthcare—have remained more stable and are genuinely lower than in Spain, France, or Germany. A retired couple with a €3,500–€4,000/month income who rents a two-bedroom apartment outside Lisbon's center, shops at local markets, and eats out three to four times a week will find Portugal comfortable without budgeting aggressively. The same couple in Lisbon's Príncipe Real or the Algarve's golden triangle will feel the squeeze.
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm text-primary border-collapse">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left py-3 pr-4 font-medium">Expense Category</th>
                    <th className="text-left py-3 pr-4 font-medium">Smaller Town / Interior</th>
                    <th className="text-left py-3 pr-4 font-medium">Lisbon / Porto</th>
                    <th className="text-left py-3 font-medium">Algarve Coastal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1-bedroom apartment rent', '€550–€750', '€1,100–€1,500', '€900–€1,300'],
                    ['2-bedroom apartment rent', '€750–€1,100', '€1,500–€2,200', '€1,200–€1,800'],
                    ['Groceries (couple/month)', '€350–€450', '€400–€550', '€400–€500'],
                    ['Restaurant meal (mid-range, 2)', '€25–€35', '€40–€60', '€45–€70'],
                    ['Utilities (2-bedroom)', '€100–€140', '€130–€180', '€120–€160'],
                    ['Internet + mobile', '€40–€60', '€50–€70', '€50–€70'],
                    ['Private health insurance', '€80–€150/month', '€100–€200/month', '€100–€200/month'],
                    ['Local transport (monthly pass)', '€30–€50', '€40–€50', 'N/A (car-dependent)'],
                    ['Estimated total (couple, no car)', '€1,500–€2,200', '€2,500–€3,500', '€2,400–€3,300'],
                  ].map(([a, b, c, d]) => (
                    <tr key={a} className="border-b border-primary/10">
                      <td className="py-2 pr-4">{a}</td>
                      <td className="py-2 pr-4">{b}</td>
                      <td className="py-2 pr-4">{c}</td>
                      <td className="py-2">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-primary/70 italic">Sources: Numbeo Q1 2026, INE Portugal 2025, Movingto.com 2026 data</p>
          </article>

          {/* Spain */}
          <article className="mb-16">
            <h3 className="font-serif text-3xl font-light text-primary mb-4">Spain</h3>
            <p className="text-primary leading-relaxed mb-6">
              Spain is typically 4–8% more expensive than Portugal in aggregate cost-of-living terms, though the gap is widest in housing—particularly in Barcelona, Madrid, and the Balearic Islands, where rental prices are approaching northern European levels. Smaller cities such as Valencia, Seville, and Granada represent better value without requiring the lifestyle compromise of full rurality. Spain's Non-Lucrative Visa requires €25,816 per year in passive income (approximately €2,150/month) as a minimum, which sets a higher financial bar than Portugal's D7. In practice, retirees who live comfortably in Spain are typically spending €2,500–€4,000/month depending on location. The cost premium over Portugal is real but often overstated; for retirees who prefer Spain's cultural character, larger city infrastructure, and climate diversity, it is routinely judged worth it.
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm text-primary border-collapse">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left py-3 pr-4 font-medium">Expense Category</th>
                    <th className="text-left py-3 pr-4 font-medium">Valencia / Seville</th>
                    <th className="text-left py-3 pr-4 font-medium">Madrid</th>
                    <th className="text-left py-3 font-medium">Barcelona</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1-bedroom apartment rent', '€850–€1,200', '€1,300–€1,900', '€1,400–€2,000'],
                    ['2-bedroom apartment rent', '€1,100–€1,600', '€1,800–€2,600', '€1,900–€2,800'],
                    ['Groceries (couple/month)', '€400–€500', '€450–€600', '€450–€600'],
                    ['Restaurant meal (mid-range, 2)', '€35–€55', '€45–€70', '€50–€80'],
                    ['Utilities (2-bedroom)', '€120–€170', '€150–€200', '€150–€200'],
                    ['Internet + mobile', '€50–€70', '€50–€70', '€50–€70'],
                    ['Private health insurance (required)', '€150–€250/month', '€180–€300/month', '€180–€300/month'],
                    ['Local transport (monthly pass)', '€20–€40', '€54', '€45'],
                    ['Estimated total (couple, no car)', '€2,200–€3,200', '€3,100–€4,500', '€3,300–€4,700'],
                  ].map(([a, b, c, d]) => (
                    <tr key={a} className="border-b border-primary/10">
                      <td className="py-2 pr-4">{a}</td>
                      <td className="py-2 pr-4">{b}</td>
                      <td className="py-2 pr-4">{c}</td>
                      <td className="py-2">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-primary/70 italic">Note: Spain's Non-Lucrative Visa requires private health insurance from a Spanish-registered insurer with comprehensive coverage—no co-payments, no caps. This is a visa compliance requirement, not optional.</p>
          </article>

          {/* Italy */}
          <article className="mb-16">
            <h3 className="font-serif text-3xl font-light text-primary mb-4">Italy</h3>
            <p className="text-primary leading-relaxed mb-6">
              Italy's cost of living varies more dramatically by region than either Portugal or Spain. Rome and Milan are expensive by any European standard; mid-sized cities in central Italy (Bologna, Florence, Verona) are moderately priced; and southern Italy and smaller hill towns remain genuinely affordable. For retirees using Italy's 7% flat tax for foreign pension income—which requires settling in a qualifying municipality in southern Italy with fewer than 20,000 inhabitants—the relevant cost benchmark is the south, where housing is significantly cheaper than the national average. For HNWI retirees using Italy's €300,000 flat tax regime, lifestyle considerations typically trump cost optimization, and the relevant benchmark is Rome, Florence, or the Italian Lakes, which are priced accordingly.
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm text-primary border-collapse">
                <thead>
                  <tr className="border-b border-primary/30">
                    <th className="text-left py-3 pr-4 font-medium">Expense Category</th>
                    <th className="text-left py-3 pr-4 font-medium">Southern Italy (small towns)</th>
                    <th className="text-left py-3 pr-4 font-medium">Bologna / Florence</th>
                    <th className="text-left py-3 font-medium">Rome / Milan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['1-bedroom apartment rent', '€400–€600', '€900–€1,300', '€1,200–€2,000'],
                    ['2-bedroom apartment rent', '€550–€800', '€1,200–€1,800', '€1,700–€2,800'],
                    ['Groceries (couple/month)', '€350–€450', '€400–€550', '€450–€600'],
                    ['Restaurant meal (mid-range, 2)', '€30–€50', '€50–€75', '€60–€90'],
                    ['Utilities (2-bedroom)', '€120–€170', '€150–€200', '€160–€220'],
                    ['Internet + mobile', '€40–€60', '€45–€65', '€50–€70'],
                    ['Private health insurance', '€80–€150/month', '€120–€200/month', '€150–€250/month'],
                    ['Estimated total (couple, no car)', '€1,600–€2,400', '€2,700–€3,900', '€3,400–€5,000'],
                  ].map(([a, b, c, d]) => (
                    <tr key={a} className="border-b border-primary/10">
                      <td className="py-2 pr-4">{a}</td>
                      <td className="py-2 pr-4">{b}</td>
                      <td className="py-2 pr-4">{c}</td>
                      <td className="py-2">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-primary/70 italic">Italian healthcare: EU citizens access the SSN (national health service) at low or no cost. Non-EU retirees on an elective residency visa typically purchase private insurance for the initial years; enrollment in SSN becomes available after establishing residency. Quality of public healthcare varies significantly by region—generally higher in the north than the south.</p>
          </article>

          {/* How to Interpret */}
          <article className="mb-16">
            <h3 className="font-serif text-3xl font-light text-primary mb-4">How to Interpret These Numbers</h3>
            <p className="text-primary leading-relaxed mb-4">
              The figures in the tables above are built from a combination of Numbeo's Q1 2026 database (which aggregates user-reported prices across thousands of cities), Eurostat housing data, and in-country reporting sources. They represent a reasonable mid-point for each location—not the cheapest available option, and not a luxury budget.
            </p>
            <p className="text-primary leading-relaxed mb-4">
              Several important caveats apply. First, rental figures represent the market as it exists today; rents in all three countries have risen between 10–20% in the past three years due to tourism pressure and foreign demand, and may continue to do so. A retiree who locks in a rental agreement on arrival protects against future increases; one who rents month-to-month or year-to-year is exposed to market movements. Second, private health insurance costs increase with age. A couple aged 62 pays substantially less than a couple aged 72 for equivalent coverage; the tables above reflect roughly median age inputs. Third, currency risk matters for retirees drawing income in USD or GBP. A 10% depreciation of the dollar against the euro adds roughly 10% to every line item in these tables when measured against a US income base.
            </p>
            <p className="text-primary leading-relaxed">
              The tables should be used as a starting framework, not a precise budget. Build your retirement cost model from actual quotes for specific apartments in specific neighborhoods, a healthcare insurance quote from an insurer licensed in your target country, and a tax estimate that reflects your actual income mix.
            </p>
          </article>

          {/* Hidden Costs */}
          <article className="mb-16">
            <h3 className="font-serif text-3xl font-light text-primary mb-6">Hidden Costs Most Retirees Miss</h3>
            <div className="space-y-6 text-primary leading-relaxed">
              <div>
                <h4 className="text-xl font-medium mb-2">Property purchase costs beyond the headline price</h4>
                <p>If you buy rather than rent, the transaction costs are substantial and often underestimated. In Portugal, the IMT (Property Transfer Tax) is progressive from 0% to 8% depending on value; add IMI (annual property tax) of 0.3%–0.8% of assessed value per year, stamp duty of 0.8%, and legal and notarial fees. On a €500,000 property, total transaction costs typically run €30,000–€50,000. Spain has a similar structure: ITP (Transfer Tax) of 6%–10% (region-dependent) on resale properties, or IVA (VAT) of 10% on new builds. In Italy, transfer taxes on non-primary residences run 9% on the cadastral value.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Annual property and wealth taxes</h4>
                <p>These are often invisible in cost-of-living breakdowns that focus on monthly expenses. Spain's Wealth Tax applies to residents in most autonomous communities (Madrid currently applies a 100% bonification, but this is a regional political decision that could change). Italy's IMU (municipal property tax) applies to non-primary residences at rates set by individual municipalities. These costs are not trivial at the property values common among high-net-worth retirees.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Healthcare costs as you age</h4>
                <p>Day-one healthcare costs for a healthy 60-year-old retiree are manageable. The relevant planning horizon is years 10–20 of retirement, when costs increase significantly. Private insurance premiums in all three countries escalate with age and can become expensive or restricted for pre-existing conditions. Some retirees who budget €150/month for healthcare at 62 are paying €450–€600/month by 72, and may face coverage exclusions by 80. Plan for this trajectory rather than assuming today's premium is stable.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Vehicle costs</h4>
                <p>In areas outside major cities—and the vast majority of rural and coastal areas in Portugal, Spain, and Italy are car-dependent—annual vehicle costs are material. Fuel prices in Europe are substantially higher than in the US: Portugal and Spain typically run €1.70–€1.85/liter (approximately $7–8/gallon equivalent). Annual insurance, road tax, inspection costs (Portugal's annual IPO test, Spain's ITV), and maintenance add €3,000–€5,000 per year for a single modest vehicle.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">One-time setup costs</h4>
                <p>Furniture and household setup for a foreign apartment, international shipping or replacement of household goods, and the professional fees for establishing residency (immigration lawyer, tax advisor, document preparation) typically run €15,000–€30,000 in total for the first year—costs that appear nowhere in monthly cost-of-living tables.</p>
              </div>
              <div>
                <h4 className="text-xl font-medium mb-2">Currency conversion costs</h4>
                <p>Retirees drawing USD or GBP income and spending in euros lose money on every currency exchange. At high volumes, using a specialist foreign exchange service rather than a retail bank reduces this cost significantly, but it doesn't eliminate it. At today's exchange rates, a couple drawing $5,000/month converting to euros pays meaningfully less than they would have three years ago—exchange rate exposure is an ongoing, uncontrollable cost in a multi-currency retirement.</p>
              </div>
            </div>
          </article>

          {/* Cost vs Quality of Life */}
          <article className="mb-8">
            <h3 className="font-serif text-3xl font-light text-primary mb-4">Cost of Living vs. Quality of Life</h3>
            <p className="text-primary leading-relaxed mb-4">
              The tables above make Portugal look like the clear winner on cost, and on pure cost grounds, it is. But retirement decisions are quality-of-life decisions first, and cost is one dimension of quality of life, not the whole picture. Spain's higher cost premium buys significantly better intercity transportation (the AVE high-speed rail network connects major Spanish cities in 2–3 hours), better healthcare outcomes in major cities, a wider variety of urban environments, and more established expat infrastructure in many regions. Italy's €300,000 flat tax is expensive by definition, but for an individual with €3–5 million in foreign income, paying €300,000 to eliminate 40%+ Italian progressive tax on that income is a material financial gain—the cost is the feature, not a drawback.
            </p>
            <p className="text-primary leading-relaxed mb-6">
              The most durable metric is not monthly spend, but monthly spend relative to the lifestyle it delivers. A retiree in southern Portugal's interior spending €2,000/month may be living a genuinely comfortable, rich life with access to the Atlantic coast, excellent local food, safety, and community. A retiree in Barcelona spending €4,500/month may be living an equally rich but different life with access to world-class museums, Michelin-starred restaurants, and a 90-minute flight to almost anywhere in Europe. The question "can I afford it" matters, but it is less important than "does this deliver the life I want."
            </p>
            <p className="text-primary leading-relaxed border-l-2 border-primary/40 pl-6 italic">
              For an understanding of how the tax environment in each country affects your real purchasing power, see our <a href="/faqs/tax-implications" className="not-italic underline hover:opacity-70 transition-opacity">tax implications page</a>. For an overview of how to get started in the process of establishing residency, see our <a href="/faqs/getting-started" className="not-italic underline hover:opacity-70 transition-opacity">getting started guide</a>. For guidance on evaluating the programs and professionals who will help you get there, see our <a href="/faqs/investor-research-advice" className="not-italic underline hover:opacity-70 transition-opacity">investor research advice page</a>.
            </p>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-primary">
            Get Your Personalized Cost Analysis
          </h2>
          <p className="text-lg text-primary leading-relaxed mb-10 max-w-2xl mx-auto">
            Discover exactly how much your retirement budget could go in your dream destination. Download our free comprehensive cost comparison guide.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-6 py-3 bg-background border border-primary/20 text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-6 py-3 bg-background border border-primary/20 text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-6 py-3 bg-background border border-primary/20 text-primary placeholder:text-primary/50 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-primary text-background uppercase tracking-wider font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Access the Jurisdictional Analysis"}
            </button>
          </form>
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

export default CostOfLiving;
