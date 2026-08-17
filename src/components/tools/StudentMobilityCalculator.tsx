import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const StudentMobilityCalculator = () => {
  const [values, setValues] = useState("");
  const [propertyOwnership, setPropertyOwnership] = useState("");
  const [livingSituation, setLivingSituation] = useState("");
  const [advisors, setAdvisors] = useState("");
  const [holidays, setHolidays] = useState("");
  const [motivation, setMotivation] = useState("");
  const [budget, setBudget] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    country: "",
    subText: "",
    strategicFit: "",
    investmentTier: ""
  });

  const calculateResults = () => {
    let country = "Portugal";
    let subText = "Golden Visa via Real Estate or Fund Investment";
    let strategicFit = "High";
    let investmentTier = "Mid-Range";

    // Budget-based logic
    if (budget === "1m+") {
      country = "Malta";
      subText = "Citizenship by Exceptional Investment (MEIN)";
      strategicFit = "Ultra-High Net Worth";
      investmentTier = "Premium";
    } else if (budget === "500k-1m") {
      if (values === "tax" || motivation === "business") {
        country = "Cyprus";
        subText = "Permanent Residency via Investment";
        strategicFit = "Tax Optimization Focus";
        investmentTier = "High";
      } else {
        country = "Greece";
        subText = "Golden Visa via Real Estate";
        strategicFit = "Lifestyle & EU Access";
        investmentTier = "Mid-High";
      }
    } else if (budget === "250k-500k") {
      if (values === "schools" || motivation === "education") {
        country = "Portugal";
        subText = "D7 Visa or Golden Visa Fund Route";
        strategicFit = "Family & Education Focus";
        investmentTier = "Mid-Range";
      } else if (values === "healthcare") {
        country = "Spain";
        subText = "Non-Lucrative Visa or Golden Visa";
        strategicFit = "Healthcare & Lifestyle";
        investmentTier = "Mid-Range";
      } else {
        country = "Greece";
        subText = "Golden Visa via Real Estate";
        strategicFit = "Value Investment";
        investmentTier = "Entry-Premium";
      }
    } else {
      // Under 250k
      if (motivation === "planb") {
        country = "Caribbean (St. Kitts / Dominica)";
        subText = "Citizenship by Investment";
        strategicFit = "Security & Mobility";
        investmentTier = "Entry Level";
      } else {
        country = "Portugal";
        subText = "D7 Passive Income Visa";
        strategicFit = "Retirement & Lifestyle";
        investmentTier = "Entry Level";
      }
    }

    // Lifestyle adjustments
    if (holidays === "luxury" && budget !== "under250k") {
      strategicFit = "Ultra-High Net Worth";
    }

    if (advisors === "team" || advisors === "occasional") {
      strategicFit += " (Advisor-Ready)";
    }

    setResults({ country, subText, strategicFit, investmentTier });
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Back Navigation */}
          <a 
            href="/tools" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Tools</span>
          </a>

          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6 font-serif">
              Family Wealth & Mobility Assessment
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Answer the following to receive a tailored Golden Visa recommendation aligned with your family's lifestyle, assets, and future goals.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-secondary/30 border border-border p-8 md:p-10">
            {/* Question 1 */}
            <div className="mb-8 pb-6 border-b border-dashed border-border">
              <label htmlFor="values" className="block font-serif text-primary mb-3 text-lg leading-relaxed">
                1. What does your family value most in a future location?
              </label>
              <select
                id="values"
                value={values}
                onChange={(e) => setValues(e.target.value)}
                className="w-full p-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option value="culture">Cultural amenities (opera, fine dining, museums)</option>
                <option value="business">Business opportunities and networking</option>
                <option value="schools">Top-tier international schools</option>
                <option value="healthcare">Quality healthcare system</option>
                <option value="tax">Tax optimization and privacy</option>
                <option value="lifestyle">Climate and lifestyle quality</option>
              </select>
            </div>

            {/* Question 2 */}
            <div className="mb-8 pb-6 border-b border-dashed border-border">
              <label htmlFor="property" className="block font-serif text-primary mb-3 text-lg leading-relaxed">
                2. Does your family currently own property internationally?
              </label>
              <select
                id="property"
                value={propertyOwnership}
                onChange={(e) => setPropertyOwnership(e.target.value)}
                className="w-full p-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option value="multiple">Yes, in multiple countries</option>
                <option value="one">Yes, in one other country</option>
                <option value="interested">No, but very interested</option>
                <option value="first">This would be our first international property</option>
              </select>
            </div>

            {/* Question 3 */}
            <div className="mb-8 pb-6 border-b border-dashed border-border">
              <label htmlFor="living" className="block font-serif text-primary mb-3 text-lg leading-relaxed">
                3. What best describes your family's current living situation?
              </label>
              <select
                id="living"
                value={livingSituation}
                onChange={(e) => setLivingSituation(e.target.value)}
                className="w-full p-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option value="vacation">Primary residence plus vacation homes</option>
                <option value="investment">Primary residence plus investment properties</option>
                <option value="single">Single primary residence</option>
                <option value="flexible">Flexible / We're exploring options</option>
              </select>
            </div>

            {/* Question 4 */}
            <div className="mb-8 pb-6 border-b border-dashed border-border">
              <label htmlFor="advisors" className="block font-serif text-primary mb-3 text-lg leading-relaxed">
                4. Does your family work with financial advisors or wealth managers?
              </label>
              <select
                id="advisors"
                value={advisors}
                onChange={(e) => setAdvisors(e.target.value)}
                className="w-full p-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option value="team">Yes, we have a dedicated wealth management team</option>
                <option value="occasional">Yes, we consult with advisors occasionally</option>
                <option value="open">No, but we're open to it</option>
                <option value="unsure">I'm not sure</option>
              </select>
            </div>

            {/* Question 5 */}
            <div className="mb-8 pb-6 border-b border-dashed border-border">
              <label htmlFor="holidays" className="block font-serif text-primary mb-3 text-lg leading-relaxed">
                5. Where does your family typically spend holidays?
              </label>
              <select
                id="holidays"
                value={holidays}
                onChange={(e) => setHolidays(e.target.value)}
                className="w-full p-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option value="luxury">Private resorts and luxury destinations worldwide</option>
                <option value="international">Regular international travel</option>
                <option value="domestic">Mostly domestic travel</option>
                <option value="home">Usually stay close to home</option>
              </select>
            </div>

            {/* Question 6 */}
            <div className="mb-8 pb-6 border-b border-dashed border-border">
              <label htmlFor="motivation" className="block font-serif text-primary mb-3 text-lg leading-relaxed">
                6. What's your family's primary motivation for a Golden Visa?
              </label>
              <select
                id="motivation"
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                className="w-full p-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option value="mobility">Global mobility and visa-free travel</option>
                <option value="education">Educational opportunities for children</option>
                <option value="business">Business expansion in Europe/Asia</option>
                <option value="retirement">Future retirement planning</option>
                <option value="planb">Plan B / Security for the family</option>
              </select>
            </div>

            {/* Question 7 */}
            <div className="mb-6">
              <label htmlFor="budget" className="block font-serif text-primary mb-3 text-lg leading-relaxed">
                7. What is your approximate investment budget?
              </label>
              <select
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full p-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 cursor-pointer"
              >
                <option value="">Select an option...</option>
                <option value="under250k">Under $250,000</option>
                <option value="250k-500k">$250,000 - $500,000</option>
                <option value="500k-1m">$500,000 - $1 Million</option>
                <option value="1m+">$1 Million+</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateResults}
              className="w-full py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors mt-6"
            >
              Analyze Profile →
            </button>

            {/* Results Section */}
            {showResults && (
              <div className="mt-12 pt-10 border-t-2 border-primary animate-fade-in">
                <div className="bg-background border border-border p-8 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Based on your family profile, your optimal program is:
                  </p>
                  
                  <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">
                    {results.country}
                  </h2>
                  
                  <p className="text-lg text-foreground/80 italic mb-8">
                    {results.subText}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
                    <div className="p-4 bg-secondary/30 border border-border">
                      <span className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                        Strategic Fit
                      </span>
                      <span className="text-foreground">{results.strategicFit}</span>
                    </div>
                    <div className="p-4 bg-secondary/30 border border-border">
                      <span className="block text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                        Investment Tier
                      </span>
                      <span className="text-foreground">{results.investmentTier}</span>
                    </div>
                  </div>

                  <a 
                    href="/contact" 
                    className="inline-block mt-8 text-primary font-semibold underline hover:text-primary/80 transition-colors"
                  >
                    Request confidential details for this program
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-muted-foreground text-center mt-10">
            *This assessment provides general guidance for educational purposes only. Investment requirements and program eligibility vary. Consult a licensed immigration advisor before making decisions.
          </p>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentMobilityCalculator;
