import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calculator, Home, Heart, PoundSterling } from "lucide-react";

const InheritanceTaxCalculator = () => {
  const [estateValue, setEstateValue] = useState<string>("");
  const [propertyValue, setPropertyValue] = useState<string>("");
  const [passingToDirectDescendants, setPassingToDirectDescendants] = useState(false);
  const [charityDonation, setCharityDonation] = useState<string>("");
  const [spouseInheritance, setSpouseInheritance] = useState<string>("");

  const NIL_RATE_BAND = 325000;
  const RESIDENCE_NIL_RATE_BAND = 175000;
  const STANDARD_RATE = 0.40;
  const REDUCED_RATE = 0.36;

  const calculate = () => {
    const estate = parseFloat(estateValue) || 0;
    const property = parseFloat(propertyValue) || 0;
    const charity = parseFloat(charityDonation) || 0;
    const spouse = parseFloat(spouseInheritance) || 0;

    // Spouse inheritance is exempt
    const taxableEstate = Math.max(0, estate - spouse);
    
    // Calculate available thresholds
    let threshold = NIL_RATE_BAND;
    
    // Add residence nil-rate band if property passes to direct descendants
    if (passingToDirectDescendants && property > 0) {
      const rnrbApplicable = Math.min(property, RESIDENCE_NIL_RATE_BAND);
      threshold += rnrbApplicable;
    }

    // Taper for estates over £2m
    if (taxableEstate > 2000000) {
      const excess = taxableEstate - 2000000;
      const rnrbReduction = Math.min(excess / 2, RESIDENCE_NIL_RATE_BAND);
      if (passingToDirectDescendants) {
        threshold -= rnrbReduction;
      }
    }

    // Calculate taxable amount after threshold
    const netTaxableEstate = taxableEstate - charity;
    const taxableAmount = Math.max(0, netTaxableEstate - threshold);

    // Check if reduced rate applies (10%+ to charity)
    const charityPercentage = netTaxableEstate > 0 ? (charity / estate) * 100 : 0;
    const rate = charityPercentage >= 10 ? REDUCED_RATE : STANDARD_RATE;

    const taxDue = taxableAmount * rate;
    const effectiveRate = estate > 0 ? (taxDue / estate) * 100 : 0;

    return {
      taxableEstate,
      threshold,
      taxableAmount,
      rate,
      taxDue,
      effectiveRate,
      charityPercentage,
    };
  };

  const results = calculate();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary mb-6">
              <Calculator className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">ESTATE PLANNING TOOL</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
              UK Inheritance Tax Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estimate your potential inheritance tax liability under current UK tax rules. 
              This calculator provides indicative figures for planning purposes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <Card className="p-6 border-border">
                <h2 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
                  <PoundSterling className="w-5 h-5" />
                  Estate Details
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="estateValue" className="text-sm text-muted-foreground">
                      Total Estate Value (£)
                    </Label>
                    <Input
                      id="estateValue"
                      type="number"
                      placeholder="e.g. 1,000,000"
                      value={estateValue}
                      onChange={(e) => setEstateValue(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="propertyValue" className="text-sm text-muted-foreground">
                      Main Residence Value (£)
                    </Label>
                    <Input
                      id="propertyValue"
                      type="number"
                      placeholder="e.g. 500,000"
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="spouseInheritance" className="text-sm text-muted-foreground">
                      Amount Passing to Spouse/Civil Partner (£)
                    </Label>
                    <Input
                      id="spouseInheritance"
                      type="number"
                      placeholder="e.g. 0"
                      value={spouseInheritance}
                      onChange={(e) => setSpouseInheritance(e.target.value)}
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Transfers to spouse/civil partner are exempt from IHT
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border">
                <h2 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Residence Relief
                </h2>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm text-muted-foreground">
                      Passing home to direct descendants?
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      Children, grandchildren, etc. (adds up to £175,000 threshold)
                    </p>
                  </div>
                  <Switch
                    checked={passingToDirectDescendants}
                    onCheckedChange={setPassingToDirectDescendants}
                  />
                </div>
              </Card>

              <Card className="p-6 border-border">
                <h2 className="text-lg font-medium text-primary mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Charitable Giving
                </h2>
                
                <div>
                  <Label htmlFor="charityDonation" className="text-sm text-muted-foreground">
                    Charitable Donation (£)
                  </Label>
                  <Input
                    id="charityDonation"
                    type="number"
                    placeholder="e.g. 50,000"
                    value={charityDonation}
                    onChange={(e) => setCharityDonation(e.target.value)}
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Leaving 10%+ to charity reduces rate from 40% to 36%
                  </p>
                </div>
              </Card>
            </div>

            {/* Results Section */}
            <div>
              <Card className="p-6 border-border bg-muted/30 sticky top-24">
                <h2 className="text-lg font-medium text-primary mb-6">
                  Estimated Tax Liability
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Taxable Estate</span>
                    <span className="font-medium text-primary">
                      {formatCurrency(results.taxableEstate)}
                    </span>
                  </div>

                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Available Threshold</span>
                    <span className="font-medium text-primary">
                      {formatCurrency(results.threshold)}
                    </span>
                  </div>

                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Amount Above Threshold</span>
                    <span className="font-medium text-primary">
                      {formatCurrency(results.taxableAmount)}
                    </span>
                  </div>

                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Tax Rate</span>
                    <span className="font-medium text-primary">
                      {(results.rate * 100).toFixed(0)}%
                      {results.charityPercentage >= 10 && (
                        <span className="text-xs text-green-600 ml-2">(Reduced)</span>
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between py-4 bg-primary/5 -mx-6 px-6 mt-6">
                    <span className="text-lg font-medium text-primary">Inheritance Tax Due</span>
                    <span className="text-2xl font-semibold text-primary">
                      {formatCurrency(results.taxDue)}
                    </span>
                  </div>

                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Effective Tax Rate</span>
                    <span className="font-medium text-primary">
                      {results.effectiveRate.toFixed(1)}%
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-background border border-border">
                  <h3 className="text-sm font-medium text-primary mb-2">Key Thresholds (2024/25)</h3>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Nil-rate band: £325,000</li>
                    <li>• Residence nil-rate band: £175,000</li>
                    <li>• Combined maximum: £500,000</li>
                    <li>• Married couples: Up to £1,000,000</li>
                  </ul>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  This calculator provides estimates only. Consult a qualified tax advisor 
                  for personalized advice. Rules may change.
                </p>
              </Card>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-border">
              <h3 className="font-medium text-primary mb-2">Nil-Rate Band</h3>
              <p className="text-sm text-muted-foreground">
                The first £325,000 of your estate is tax-free. This threshold has been frozen until 2028.
              </p>
            </Card>
            <Card className="p-6 border-border">
              <h3 className="font-medium text-primary mb-2">Residence Relief</h3>
              <p className="text-sm text-muted-foreground">
                An additional £175,000 allowance if you leave your home to direct descendants like children or grandchildren.
              </p>
            </Card>
            <Card className="p-6 border-border">
              <h3 className="font-medium text-primary mb-2">Charity Rate</h3>
              <p className="text-sm text-muted-foreground">
                Leaving at least 10% of your net estate to charity reduces the tax rate from 40% to 36%.
              </p>
            </Card>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default InheritanceTaxCalculator;
