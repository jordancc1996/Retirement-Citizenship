import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

type Country = 
  | "antigua"
  | "dominica"
  | "grenada"
  | "stkitts"
  | "stlucia"
  | "turkiye"
  | "greece"
  | "hungary"
  | "italy"
  | "latvia"
  | "malta"
  | "portugal"
  | "argentina";

interface Step {
  number: string;
  title: string;
  description: string;
}

const countryData: Record<Country, { label: string; steps: Step[] }> = {
  antigua: {
    label: "Antigua",
    steps: [
      { number: "Step 01", title: "Onboarding & File Prep", description: "We collect your initial documents and complete government forms. A strict preliminary due diligence check is performed." },
      { number: "Step 02", title: "Submission", description: "Your application is submitted to the Citizenship by Investment Unit (CIU). Review fees are paid at this stage." },
      { number: "Step 03", title: "Due Diligence & Approval", description: "The government conducts background checks (approx. 3-4 months). Upon clearing, you receive an \"Approval in Principle.\"" },
      { number: "Step 04", title: "Investment", description: "Only after approval do you make the qualifying contribution (Donation or Real Estate Investment)." },
      { number: "Step 05", title: "Passport Issuance", description: "Certificates of Registration and Passports are issued and couriered securely to you." },
    ],
  },
  dominica: {
    label: "Dominica",
    steps: [
      { number: "Step 01", title: "Agent Authorization", description: "We sign the client agreement and commence the collection of documents (medical, police records, bank statements)." },
      { number: "Step 02", title: "Processing Unit Review", description: "The file is submitted to the Dominica CBI Unit. Due diligence fees are paid to initiate the background checks." },
      { number: "Step 03", title: "Approval in Principle", description: "Within 3-4 months, the government issues an approval letter confirming your eligibility." },
      { number: "Step 04", title: "Investment Transfer", description: "You transfer the contribution amount (EDF Fund or Real Estate) directly to the government escrow account." },
      { number: "Step 05", title: "Citizenship Certified", description: "The Prime Minister signs your Certificate of Naturalization, and your passport is issued." },
    ],
  },
  grenada: {
    label: "Grenada",
    steps: [
      { number: "Step 01", title: "File Preparation", description: "Collection of detailed documents. Grenada requires thorough health and background verifications." },
      { number: "Step 02", title: "Submission & Interview", description: "File submission to the CBIC. Mandatory interviews are conducted for applicants aged 17+." },
      { number: "Step 03", title: "Approval", description: "Government issues approval after vetting. Timeline is typically 4-6 months." },
      { number: "Step 04", title: "Qualifying Payment", description: "Transfer of the NTF donation or Real Estate balance is made to complete the investment." },
      { number: "Step 05", title: "Travel Documents", description: "Passports are printed and delivered. You are now a citizen of Grenada." },
    ],
  },
  stkitts: {
    label: "St. Kitts",
    steps: [
      { number: "Step 01", title: "Document Procurement", description: "We assist you in gathering apostilled birth certificates, police reports, and medical HIV tests." },
      { number: "Step 02", title: "CIU Submission", description: "Application lodged with the St. Kitts & Nevis Citizenship Investment Unit." },
      { number: "Step 03", title: "Vetting Process", description: "Strict due diligence is performed. Approval in Principle is granted upon clearance." },
      { number: "Step 04", title: "Contribution", description: "Payment of the Sustainable Island State Contribution (SISC) or Real Estate investment." },
      { number: "Step 05", title: "Citizenship", description: "Issuance of the Certificate of Registration and Passport." },
    ],
  },
  stlucia: {
    label: "St. Lucia",
    steps: [
      { number: "Step 01", title: "Option Selection", description: "Choose your route: Donation, Real Estate, or Government Bonds. We prepare your file." },
      { number: "Step 02", title: "CIP Board Submission", description: "Submission to the Citizenship by Investment Board and payment of due diligence fees." },
      { number: "Step 03", title: "Approval Letter", description: "Following a 3-5 month review, the Board issues a letter of approval." },
      { number: "Step 04", title: "Funding", description: "You have 60 days to transfer the qualifying investment funds." },
      { number: "Step 05", title: "Oaths & Passport", description: "Review of Oath of Allegiance. Passport and Citizenship Certificate are issued." },
    ],
  },
  turkiye: {
    label: "Türkiye",
    steps: [
      { number: "Step 01", title: "Investment Execution", description: "Purchase property ($400k+) or deposit capital ($500k). Obtain the \"Certificate of Conformity.\"" },
      { number: "Step 02", title: "Residency Permit", description: "Apply for a short-term investor residence permit (required before citizenship)." },
      { number: "Step 03", title: "Citizenship Application", description: "Submit the citizenship file to the Provincial Directorate of Census and Citizenship." },
      { number: "Step 04", title: "Presidential Approval", description: "Final approval is granted by the Presidency. ID cards and passports are then issued." },
    ],
  },
  greece: {
    label: "Greece",
    steps: [
      { number: "Step 01", title: "Investment Selection", description: "Select real estate or financial products to meet the Golden Visa threshold (€250k - €800k depending on zone)." },
      { number: "Step 02", title: "Legal Setup", description: "Issue Power of Attorney (POA) to Greek lawyers to open accounts and issue a Tax ID (AFM)." },
      { number: "Step 03", title: "Acquisition & Application", description: "Complete property transfer. Submit Golden Visa application to the Ministry." },
      { number: "Step 04", title: "Blue Paper & Biometrics", description: "Receive the \"Blue Paper\" (temporary receipt). Visit Greece once for fingerprinting." },
      { number: "Step 05", title: "Permit Issuance", description: "Golden Visa residence card is issued, valid for 5 years and renewable." },
    ],
  },
  hungary: {
    label: "Hungary",
    steps: [
      { number: "Step 01", title: "Guest Investor Visa", description: "Apply for the Guest Investor Visa (valid 2 years) at the consulate, declaring intent to invest." },
      { number: "Step 02", title: "Travel & Investment", description: "Enter Hungary. You have 3 months to complete the investment (Real Estate Fund, Donation, or Residential Property)." },
      { number: "Step 03", title: "Residence Application", description: "Submit proof of investment completion to the immigration authority." },
      { number: "Step 04", title: "Card Issuance", description: "Receive the \"Guest Investor Residence Permit,\" valid for 10 years for you and your family." },
    ],
  },
  italy: {
    label: "Italy",
    steps: [
      { number: "Step 01", title: "Financial Audit", description: "We confirm your passive income meets Elective Residency Visa strict requirements (approx €32k/year/person)." },
      { number: "Step 02", title: "Property Securement", description: "You must have a signed lease or deed in Italy before the visa interview." },
      { number: "Step 03", title: "Consulate Interview", description: "Submission of file at your local Italian consulate. This is the most critical step." },
      { number: "Step 04", title: "Permesso di Soggiorno", description: "Upon arrival in Italy, apply for the Permit to Stay at the Post Office within 8 days." },
    ],
  },
  latvia: {
    label: "Latvia",
    steps: [
      { number: "Step 01", title: "Route Selection", description: "Choose investment: Business capital (€50k), Real Estate, or Government Bonds (€250k)." },
      { number: "Step 02", title: "Investment & Verification", description: "Execute the investment and undergo initial background checks." },
      { number: "Step 03", title: "OCMA Submission", description: "Submit application to the Office of Citizenship and Migration Affairs in Riga or via Embassy." },
      { number: "Step 04", title: "Biometrics", description: "Upon approval, travel to Latvia to provide biometric data and pick up the ID card." },
      { number: "Step 05", title: "Annual Registration", description: "Temporary Residence Permit (TRP) is valid for 5 years but requires annual registration." },
    ],
  },
  malta: {
    label: "Malta",
    steps: [
      { number: "Step 01", title: "Initial Due Diligence", description: "Tier-1 background check to ensure eligibility for the MPRP (Residency) or Citizenship route." },
      { number: "Step 02", title: "Application & Fee", description: "Submission of file to Residency Malta Agency with the initial administrative fee." },
      { number: "Step 03", title: "Letter of Approval", description: "Agency issues \"Letter of Approval in Principle.\" You now have 2 months to fulfill requirements." },
      { number: "Step 04", title: "Investment & Property", description: "Pay the government contribution, make the donation to an NGO, and lease/purchase compliant property." },
      { number: "Step 05", title: "Final Certificate", description: "Issuance of the Settlement Certificate and Residency Cards." },
    ],
  },
  portugal: {
    label: "Portugal",
    steps: [
      { number: "Step 01", title: "Analysis & NIF", description: "Determine route (D7 or Golden Visa). We obtain your NIF (Tax Number) and open a bank account." },
      { number: "Step 02", title: "Accommodation", description: "Secure a rental agreement or qualifying investment fund subscription (Golden Visa)." },
      { number: "Step 03", title: "Submission", description: "Submit visa application to VFS Global or Consulate (D7) or AIMA portal (Golden Visa)." },
      { number: "Step 04", title: "Biometrics", description: "Attend appointment at AIMA in Portugal for fingerprinting." },
      { number: "Step 05", title: "Residency Card", description: "Residence card is mailed to your Portuguese address." },
    ],
  },
  argentina: {
    label: "Argentina",
    steps: [
      { number: "Step 01", title: "Document Apostille", description: "Gather FBI background check and income proof. All foreign documents must be apostilled and translated." },
      { number: "Step 02", title: "Income Verification", description: "Prove recurring monthly passive income (approx $2000 USD) for the \"Rentista\" category." },
      { number: "Step 03", title: "Migraciones / Consulate", description: "Apply via the Argentine consulate in your home country or directly at Migraciones in Buenos Aires." },
      { number: "Step 04", title: "DNI Application", description: "Once residency is approved, apply for the DNI (National ID Card)." },
      { number: "Step 05", title: "Permanent Residency", description: "Renew the Rentista status for 3 years to become eligible for Permanent Residency." },
    ],
  },
};

const countries: { key: Country; label: string }[] = [
  { key: "antigua", label: "Antigua" },
  { key: "dominica", label: "Dominica" },
  { key: "grenada", label: "Grenada" },
  { key: "stkitts", label: "St. Kitts" },
  { key: "stlucia", label: "St. Lucia" },
  { key: "turkiye", label: "Türkiye" },
  { key: "greece", label: "Greece" },
  { key: "hungary", label: "Hungary" },
  { key: "italy", label: "Italy" },
  { key: "latvia", label: "Latvia" },
  { key: "malta", label: "Malta" },
  { key: "portugal", label: "Portugal" },
  { key: "argentina", label: "Argentina" },
];

const InvestmentMigrationFlowchart = () => {
  const [activeCountry, setActiveCountry] = useState<Country>("antigua");

  const currentSteps = countryData[activeCountry].steps;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
      <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        {/* Back Navigation */}
        <a 
          href="/tools" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tools</span>
        </a>

        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Your Path to Global Citizenship
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Select a destination to view the specific residency or citizenship milestones.
          </p>
        </header>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 border-b border-border pb-6">
          {countries.map((country) => (
            <button
              key={country.key}
              onClick={() => setActiveCountry(country.key)}
              className={`px-4 py-2 font-serif text-xs md:text-sm uppercase tracking-wider border transition-all duration-300 ${
                activeCountry === country.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {country.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto animate-in fade-in duration-500" key={activeCountry}>
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

          {currentSteps.map((step, index) => (
            <div
              key={index}
              className={`relative pl-16 md:pl-0 pb-10 md:w-1/2 ${
                index % 2 === 0
                  ? "md:pr-10 md:text-right"
                  : "md:ml-[50%] md:pl-10 md:text-left"
              }`}
            >
              {/* Circle marker */}
              <div
                className={`absolute w-4 h-4 bg-background border-[3px] border-primary rounded-full top-1 z-10 ${
                  index % 2 === 0
                    ? "left-3 md:left-auto md:-right-2"
                    : "left-3 md:-left-2"
                }`}
              />

              <span className="font-serif text-primary text-xs font-bold uppercase tracking-wider block mb-1">
                {step.number}
              </span>
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentMigrationFlowchart;
