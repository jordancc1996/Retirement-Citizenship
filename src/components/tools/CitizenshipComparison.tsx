import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft } from "lucide-react";

interface Program {
  name: string;
  flag: string;
  region: "Africa" | "Americas" | "Asia" | "Caribbean" | "Europe" | "Middle East";
  costUSD: number;
  costDisplay: string;
  presence: string;
  timeToPR: number;
  timeToCitizenship: number;
  offers: string[];
  features: string[];
  invest: string[];
}

const programs: Program[] = [
  // Argentina Golden Visa
  { name: "Argentina Golden Visa (Coming 2026)", flag: "🇦🇷", region: "Americas", costUSD: 500000, costDisplay: "$500,000", presence: "Unknown", timeToPR: 100, timeToCitizenship: 100, offers: ["cbi"], features: ["mild_climate"], invest: ["donation", "fund"] },

  // Caribbean CBI
  { name: "St. Kitts & Nevis", flag: "🇰🇳", region: "Caribbean", costUSD: 250000, costDisplay: "$250,000", presence: "None", timeToPR: 0, timeToCitizenship: 0, offers: ["cbi", "instant_cit"], features: ["low_tax", "english", "mild_climate"], invest: ["donation", "real_estate"] },
  { name: "Dominica", flag: "🇩🇲", region: "Caribbean", costUSD: 200000, costDisplay: "$200,000", presence: "None", timeToPR: 0, timeToCitizenship: 0, offers: ["cbi", "instant_cit"], features: ["low_tax", "english", "mild_climate"], invest: ["donation", "real_estate"] },
  { name: "Grenada", flag: "🇬🇩", region: "Caribbean", costUSD: 235000, costDisplay: "$235,000", presence: "None", timeToPR: 0, timeToCitizenship: 0, offers: ["cbi", "instant_cit"], features: ["low_tax", "english", "mild_climate"], invest: ["donation", "real_estate"] },
  { name: "Antigua & Barbuda", flag: "🇦🇬", region: "Caribbean", costUSD: 230000, costDisplay: "$230,000", presence: "5 days/5 yrs", timeToPR: 0, timeToCitizenship: 0, offers: ["cbi", "instant_cit"], features: ["low_tax", "english", "mild_climate"], invest: ["donation", "real_estate"] },
  { name: "St. Lucia", flag: "🇱🇨", region: "Caribbean", costUSD: 240000, costDisplay: "$240,000", presence: "None", timeToPR: 0, timeToCitizenship: 0, offers: ["cbi", "instant_cit"], features: ["low_tax", "english", "mild_climate"], invest: ["donation", "real_estate", "fund"] },

  // Other Established CBI
  { name: "Türkiye", flag: "🇹🇷", region: "Middle East", costUSD: 400000, costDisplay: "$400,000", presence: "None", timeToPR: 0, timeToCitizenship: 0, offers: ["cbi", "instant_cit"], features: ["mild_climate"], invest: ["real_estate"] },
  { name: "Malta (Naturalisation)", flag: "🇲🇹", region: "Europe", costUSD: 650000, costDisplay: "€600,000+", presence: "1-3 Years", timeToPR: 0, timeToCitizenship: 1, offers: ["cbi", "eu_access"], features: ["high_safety", "english", "mild_climate"], invest: ["donation", "real_estate"] },

  // New/Emerging CBI
  { name: "Argentina (Investor)", flag: "🇦🇷", region: "Americas", costUSD: 500000, costDisplay: "$500,000", presence: "Required", timeToPR: 0, timeToCitizenship: 2, offers: ["cbi"], features: ["mild_climate"], invest: ["donation", "fund"] },
  { name: "El Salvador", flag: "🇸🇻", region: "Americas", costUSD: 1000000, costDisplay: "$1,000,000 (BTC)", presence: "None", timeToPR: 0, timeToCitizenship: 0, offers: ["cbi", "instant_cit"], features: [], invest: ["donation"] },

  // Europe RBI
  { name: "Portugal Golden Visa", flag: "🇵🇹", region: "Europe", costUSD: 270000, costDisplay: "€250,000", presence: "7 days/year", timeToPR: 5, timeToCitizenship: 10, offers: ["rbi", "eu_access"], features: ["high_safety", "mild_climate", "english"], invest: ["donation", "fund"] },
  { name: "Greece Golden Visa", flag: "🇬🇷", region: "Europe", costUSD: 270000, costDisplay: "€250,000", presence: "None", timeToPR: 5, timeToCitizenship: 7, offers: ["rbi", "eu_access"], features: ["high_safety", "mild_climate"], invest: ["real_estate"] },
  { name: "Spain Golden Visa", flag: "🇪🇸", region: "Europe", costUSD: 540000, costDisplay: "€500,000", presence: "None", timeToPR: 5, timeToCitizenship: 10, offers: ["rbi", "eu_access"], features: ["high_safety", "mild_climate"], invest: ["real_estate"] },
  { name: "Italy Investor Visa", flag: "🇮🇹", region: "Europe", costUSD: 270000, costDisplay: "€250,000+", presence: "None", timeToPR: 5, timeToCitizenship: 10, offers: ["rbi", "eu_access"], features: ["high_safety", "mild_climate"], invest: ["fund", "business"] },
  { name: "Malta Perm. Residence", flag: "🇲🇹", region: "Europe", costUSD: 150000, costDisplay: "€135,000", presence: "None", timeToPR: 0, timeToCitizenship: 5, offers: ["rbi", "eu_access"], features: ["high_safety", "english", "mild_climate"], invest: ["donation", "real_estate"] },
  { name: "Hungary Guest Investor", flag: "🇭🇺", region: "Europe", costUSD: 270000, costDisplay: "€250,000", presence: "None", timeToPR: 3, timeToCitizenship: 8, offers: ["rbi", "eu_access"], features: ["high_safety"], invest: ["fund", "real_estate"] },
  { name: "Monaco", flag: "🇲🇨", region: "Europe", costUSD: 1000000, costDisplay: "High (Deposit)", presence: "183 days/yr", timeToPR: 10, timeToCitizenship: 10, offers: ["rbi"], features: ["high_safety", "low_tax", "mild_climate"], invest: ["fund"] },

  // Americas
  { name: "Canada Start-Up", flag: "🇨🇦", region: "Americas", costUSD: 150000, costDisplay: "CAD 200k+", presence: "730 days/5 yr", timeToPR: 1, timeToCitizenship: 3, offers: ["rbi"], features: ["english", "high_safety"], invest: ["business"] },
  { name: "Panama", flag: "🇵🇦", region: "Americas", costUSD: 100000, costDisplay: "$100,000+", presence: "Minimal", timeToPR: 2, timeToCitizenship: 5, offers: ["rbi"], features: ["low_tax", "mild_climate", "english"], invest: ["real_estate", "fund"] },

  // Asia Pacific
  { name: "Singapore", flag: "🇸🇬", region: "Asia", costUSD: 2000000, costDisplay: "SGD High", presence: "Required", timeToPR: 1, timeToCitizenship: 2, offers: ["rbi"], features: ["low_tax", "english", "high_safety"], invest: ["business", "fund"] },
  { name: "Hong Kong", flag: "🇭🇰", region: "Asia", costUSD: 3800000, costDisplay: "HKD 30M", presence: "Required", timeToPR: 7, timeToCitizenship: 7, offers: ["rbi"], features: ["low_tax", "english", "high_safety"], invest: ["fund"] },
  { name: "Malaysia (MM2H)", flag: "🇲🇾", region: "Asia", costUSD: 105000, costDisplay: "MYR 500k", presence: "90 days/yr", timeToPR: 99, timeToCitizenship: 99, offers: ["rbi"], features: ["low_tax", "english", "mild_climate"], invest: ["fund"] },
  { name: "New Zealand", flag: "🇳🇿", region: "Asia", costUSD: 3000000, costDisplay: "NZD 5M+", presence: "Required", timeToPR: 0, timeToCitizenship: 5, offers: ["rbi"], features: ["english", "high_safety"], invest: ["fund", "business"] },

  // Middle East
  { name: "UAE (Golden Visa)", flag: "🇦🇪", region: "Middle East", costUSD: 550000, costDisplay: "AED 2M", presence: "1 visit/6 mo", timeToPR: 0, timeToCitizenship: 30, offers: ["rbi"], features: ["low_tax", "english", "high_safety"], invest: ["real_estate", "fund"] },
];

type Region = "Africa" | "Americas" | "Asia" | "Caribbean" | "Europe" | "Middle East";
type ProgramType = "cbi" | "rbi" | "instant_cit" | "eu_access";
type Feature = "low_tax" | "mild_climate" | "high_safety" | "english";
type InvestmentOption = "donation" | "real_estate" | "fund" | "business";

type SortField = "name" | "costUSD" | "presence" | "timeToPR" | "timeToCitizenship";
type SortDirection = "asc" | "desc";

const CitizenshipComparison = () => {
  // Filter states
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [selectedProgramTypes, setSelectedProgramTypes] = useState<ProgramType[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<Feature[]>([]);
  const [selectedInvestmentOptions, setSelectedInvestmentOptions] = useState<InvestmentOption[]>([]);
  const [maxInvestment, setMaxInvestment] = useState(3000000);
  const [maxYearsToCitizenship, setMaxYearsToCitizenship] = useState(10);
  
  // Sort states
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const toggleFilter = <T,>(arr: T[], item: T, setter: React.Dispatch<React.SetStateAction<T[]>>) => {
    if (arr.includes(item)) {
      setter(arr.filter((i) => i !== item));
    } else {
      setter([...arr, item]);
    }
  };

  const filteredPrograms = useMemo(() => {
    let result = programs.filter((program) => {
      // Region filter
      if (selectedRegions.length > 0 && !selectedRegions.includes(program.region)) {
        return false;
      }

      // Program type filter - must match ALL selected types
      if (selectedProgramTypes.length > 0) {
        const matches = selectedProgramTypes.every((type) => program.offers.includes(type));
        if (!matches) return false;
      }

      // Features filter - must match ALL selected features
      if (selectedFeatures.length > 0) {
        const matches = selectedFeatures.every((feature) => program.features.includes(feature));
        if (!matches) return false;
      }

      // Investment options filter - must match ANY selected option
      if (selectedInvestmentOptions.length > 0) {
        const matches = selectedInvestmentOptions.some((option) => program.invest.includes(option));
        if (!matches) return false;
      }

      // Max investment filter
      if (program.costUSD > maxInvestment) {
        return false;
      }

      // Max years to citizenship filter (exclude unknowns if maxYears < 10)
      if (maxYearsToCitizenship < 10 && program.timeToCitizenship > maxYearsToCitizenship) {
        return false;
      }

      return true;
    });

    // Apply sorting
    result = [...result].sort((a, b) => {
      let valA: string | number = a[sortField];
      let valB: string | number = b[sortField];
      
      if (typeof valA === 'string') {
        valA = valA.toLowerCase();
        valB = (valB as string).toLowerCase();
      }
      
      if (valA < valB) return sortDirection === "asc" ? -1 : 1;
      if (valA > valB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [selectedRegions, selectedProgramTypes, selectedFeatures, selectedInvestmentOptions, maxInvestment, maxYearsToCitizenship, sortField, sortDirection]);

  const resetFilters = () => {
    setSelectedRegions([]);
    setSelectedProgramTypes([]);
    setSelectedFeatures([]);
    setSelectedInvestmentOptions([]);
    setMaxInvestment(3000000);
    setMaxYearsToCitizenship(10);
    setSortField("name");
    setSortDirection("asc");
  };

  const formatInvestment = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    return `$${(value / 1000).toFixed(0)}K`;
  };

  // Helper functions for display text
  const getTimeToPRText = (years: number) => {
    if (years === 0) return "Instant";
    if (years >= 100) return "Unknown";
    if (years > 20 && years < 99) return "Visa Only";
    return `${years} Years`;
  };

  const getTimeToCitizenshipText = (years: number) => {
    if (years === 0) return "Instant / <1 Year";
    if (years >= 100) return "Unknown";
    if (years > 20 && years < 99) return "No Direct Path";
    return `${years} Years`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
      {/* Back Navigation */}
      <div className="max-w-6xl mx-auto px-5 pt-8">
        <a 
          href="/tools" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tools</span>
        </a>
      </div>

      {/* Hero Section */}
      <header className="text-center py-10 md:py-16 px-5">
        <p className="text-primary text-xs uppercase tracking-[3px] font-bold mb-5">
          where freedom meets extraordinary living
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-primary font-normal mb-4">
          Golden Visa Program Comparison for Americans and Canadians
        </h1>
        <p className="max-w-xl mx-auto text-primary/80 leading-relaxed">
          Best golden visa for Americans and Canadians starts at 250,000 euros across 24 residency and citizenship programs.
        </p>
      </header>

      {/* Filter Section */}
      <div className="max-w-6xl mx-auto bg-background px-5 py-6 border-y border-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Region */}
          <div>
            <h4 className="text-primary font-normal mb-4">Region:</h4>
            <div className="flex flex-col gap-3">
              {(["Africa", "Americas", "Asia", "Caribbean", "Europe", "Middle East"] as Region[]).map((region) => (
                <label key={region} className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  <Checkbox
                    checked={selectedRegions.includes(region)}
                    onCheckedChange={() => toggleFilter(selectedRegions, region, setSelectedRegions)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  {region === "Asia" ? "Asia & Pacific" : region}
                </label>
              ))}
            </div>
          </div>

          {/* Program Type */}
          <div>
            <h4 className="text-primary font-normal mb-4">Program Type:</h4>
            <div className="flex flex-col gap-3">
              {([
                { value: "cbi", label: "Citizenship by Investment (CBI)" },
                { value: "rbi", label: "Residency by Investment (RBI)" },
                { value: "instant_cit", label: "Instant Citizenship" },
                { value: "eu_access", label: "EU Access / Schengen" },
              ] as { value: ProgramType; label: string }[]).map((type) => (
                <label key={type.value} className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  <Checkbox
                    checked={selectedProgramTypes.includes(type.value)}
                    onCheckedChange={() => toggleFilter(selectedProgramTypes, type.value, setSelectedProgramTypes)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  {type.label}
                </label>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-primary font-normal mb-4">In countries that have:</h4>
            <div className="flex flex-col gap-3">
              {([
                { value: "low_tax", label: "Low taxes" },
                { value: "mild_climate", label: "Mild climate" },
                { value: "high_safety", label: "High safety" },
                { value: "english", label: "English widely spoken" },
              ] as { value: Feature; label: string }[]).map((feature) => (
                <label key={feature.value} className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  <Checkbox
                    checked={selectedFeatures.includes(feature.value)}
                    onCheckedChange={() => toggleFilter(selectedFeatures, feature.value, setSelectedFeatures)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  {feature.label}
                </label>
              ))}
            </div>
          </div>

          {/* Investment Options */}
          <div>
            <h4 className="text-primary font-normal mb-4">Investment Options:</h4>
            <div className="flex flex-col gap-3">
              {([
                { value: "donation", label: "Donation" },
                { value: "real_estate", label: "Real Estate" },
                { value: "fund", label: "Fund/Bank Deposit" },
                { value: "business", label: "Business/Enterprise" },
              ] as { value: InvestmentOption; label: string }[]).map((option) => (
                <label key={option.value} className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  <Checkbox
                    checked={selectedInvestmentOptions.includes(option.value)}
                    onCheckedChange={() => toggleFilter(selectedInvestmentOptions, option.value, setSelectedInvestmentOptions)}
                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Sliders Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] gap-8 lg:gap-10 items-end pt-6 border-t border-border/50 max-w-4xl mx-auto">
          {/* Investment Slider */}
          <div>
            <label className="block mb-3 text-primary font-bold text-sm">
              Max Investment (USD Approx)
            </label>
            <div className="flex justify-between text-sm text-foreground mb-2">
              <span>$0</span>
              <span>{formatInvestment(maxInvestment)}</span>
            </div>
            <Slider
              value={[maxInvestment]}
              onValueChange={(value) => setMaxInvestment(value[0])}
              max={3000000}
              min={50000}
              step={50000}
              className="w-full"
            />
          </div>

          {/* Timeline Slider */}
          <div>
            <label className="block mb-3 text-primary font-bold text-sm">
              Max Years to Citizenship
            </label>
            <div className="flex justify-between text-sm text-foreground mb-2">
              <span>Instant</span>
              <span>{maxYearsToCitizenship >= 10 ? "10+" : maxYearsToCitizenship} Years</span>
            </div>
            <Slider
              value={[maxYearsToCitizenship]}
              onValueChange={(value) => setMaxYearsToCitizenship(value[0])}
              max={10}
              min={0}
              step={1}
              className="w-full"
            />
          </div>

          {/* Reset Button */}
          <Button
            variant="outline"
            onClick={resetFilters}
            className="h-10 px-6 uppercase text-xs tracking-widest font-medium border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex justify-between items-end mb-4 border-b-2 border-primary pb-3">
          <h3 className="font-serif text-xl md:text-2xl text-primary font-normal">
            Showing {filteredPrograms.length} Program{filteredPrograms.length !== 1 ? "s" : ""}
          </h3>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[700px]">
            <thead className="bg-muted border-b-2 border-border">
              <tr>
                <th 
                  onClick={() => handleSort("name")}
                  className={`text-left p-4 text-xs font-bold uppercase tracking-wider cursor-pointer select-none transition-colors hover:bg-muted/80 hover:text-primary ${sortField === "name" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                >
                  Program <span className="opacity-50 ml-1">{sortField === "name" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}</span>
                </th>
                <th 
                  onClick={() => handleSort("costUSD")}
                  className={`text-left p-4 text-xs font-bold uppercase tracking-wider cursor-pointer select-none transition-colors hover:bg-muted/80 hover:text-primary ${sortField === "costUSD" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                >
                  Min. Contribution <span className="opacity-50 ml-1">{sortField === "costUSD" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}</span>
                </th>
                <th 
                  onClick={() => handleSort("presence")}
                  className={`text-left p-4 text-xs font-bold uppercase tracking-wider cursor-pointer select-none transition-colors hover:bg-muted/80 hover:text-primary ${sortField === "presence" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                >
                  Presence Requirement <span className="opacity-50 ml-1">{sortField === "presence" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}</span>
                </th>
                <th 
                  onClick={() => handleSort("timeToPR")}
                  className={`text-left p-4 text-xs font-bold uppercase tracking-wider cursor-pointer select-none transition-colors hover:bg-muted/80 hover:text-primary ${sortField === "timeToPR" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                >
                  Time to PR <span className="opacity-50 ml-1">{sortField === "timeToPR" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}</span>
                </th>
                <th 
                  onClick={() => handleSort("timeToCitizenship")}
                  className={`text-left p-4 text-xs font-bold uppercase tracking-wider cursor-pointer select-none transition-colors hover:bg-muted/80 hover:text-primary ${sortField === "timeToCitizenship" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
                >
                  Time to Citizenship <span className="opacity-50 ml-1">{sortField === "timeToCitizenship" ? (sortDirection === "asc" ? "↑" : "↓") : "↕"}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPrograms.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-16 text-center text-muted-foreground">
                    No programs match your criteria.
                  </td>
                </tr>
              ) : (
                filteredPrograms.map((program, index) => (
                  <tr key={`${program.name}-${index}`} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <span className="text-lg mr-2">{program.flag}</span>
                      <span className="font-medium">{program.name}</span>
                      <span className="ml-2 text-[10px] bg-muted px-2 py-0.5 rounded uppercase text-muted-foreground">
                        {program.offers.includes("cbi") ? "CBI" : "RBI"}
                      </span>
                    </td>
                    <td className="p-4 text-foreground">{program.costDisplay}</td>
                    <td className="p-4 text-foreground">{program.presence}</td>
                    <td className="p-4 text-foreground">{getTimeToPRText(program.timeToPR)}</td>
                    <td className="p-4 text-foreground">{getTimeToCitizenshipText(program.timeToCitizenship)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default CitizenshipComparison;
