import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, GraduationCap, GitBranch, Calculator } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { assetUrl } from "@/lib/assetUrl";
import toolsHero from "@/assets/tools-hero.jpg";

const tools = [
  {
    title: "Citizenship Comparison",
    description: "Compare citizenship and residency investment programs from around the world. Filter by investment amount, timeline, and program type.",
    href: "/tools/citizenship-comparison",
    icon: Globe,
  },
  {
    title: "Student Mobility Calculator",
    description: "Discover how a second passport can unlock tax freedom, global remote work opportunities, and security for your future career.",
    href: "/tools/student-mobility-calculator",
    icon: GraduationCap,
  },
  {
    title: "Investment Migration Flowchart",
    description: "View the step-by-step process for citizenship and residency programs. Select your destination to see specific milestones.",
    href: "/tools/investment-migration-flowchart",
    icon: GitBranch,
  },
  {
    title: "Inheritance Tax (UK) Calculator",
    description: "Estimate your UK inheritance tax liability. Understand nil-rate bands, residence relief, and how charitable giving can reduce your tax.",
    href: "/tools/inheritance-tax-calculator",
    icon: Calculator,
  },
];

const personalEmailDomains = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com', 'yandex.com',
  'gmx.com', 'live.com', 'msn.com', 'me.com', 'qq.com', '163.com'
];

const areasOfInterest = [
  "European Golden Visa Programs",
  "Caribbean Citizenship by Investment",
  "Tax Optimization & Residency",
  "Retirement Abroad Planning",
  "Family Multi-Generational Planning",
  "Other"
];

const budgetRanges = [
  "Under $250,000",
  "$250,000 – $500,000",
  "$500,000 – $1,000,000",
  "$1,000,000 – $2,500,000",
  "Over $2,500,000"
];

const Tools = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    budgetRange: "",
    message: ""
  });
  const [emailError, setEmailError] = useState("");
  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    const domain = email.split('@')[1]?.toLowerCase();
    if (personalEmailDomains.includes(domain)) {
      setEmailError("Personal email addresses (Gmail, Yahoo, etc.) are not accepted");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) return;
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formcarry.com/s/WyxZp21S-N1", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          areaOfInterest: formData.areaOfInterest,
          budgetRange: formData.budgetRange,
          message: formData.message.trim(),
          source: "Tools Page - Private Consultation CTA"
        })
      });

      if (response.ok) {
        toast({ title: "Thank you for your interest", description: "We'll be in touch shortly." });
        setIsModalOpen(false);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", areaOfInterest: "", budgetRange: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header variant="hero" />
      <main>
      {/* Hero Section with Full-Bleed Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${assetUrl(toolsHero)})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Tools
          </h1>
          <p className="text-white/90 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Golden visa planning tools on this page include four instruments built for American and Canadian families: program comparison, a UK inheritance tax model, a mobility quiz, and an application flowchart.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">
            Your Sovereign Blueprint
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            From the tax-efficient shores of the Caribbean to the historic avenues of Europe, architect a retirement that transcends borders. Our planning suite transforms complex migration frameworks into a clear, actionable path toward your second citizenship.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-3 border border-primary text-primary uppercase tracking-[0.15em] text-sm font-light hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Schedule a Private Consultation
          </button>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl text-primary uppercase tracking-[0.1em] text-center">
              Request Your Briefing
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  First Name <span className="text-accent-gold">*</span>
                </label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="border-border"
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  Last Name <span className="text-accent-gold">*</span>
                </label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="border-border"
                  required
                  maxLength={100}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Work or Business Email <span className="text-accent-gold">*</span>
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (emailError) validateEmail(e.target.value);
                }}
                onBlur={() => formData.email && validateEmail(formData.email)}
                placeholder="Enter your work or business email"
                className={`border-border ${emailError ? 'border-destructive' : ''}`}
                required
                maxLength={255}
              />
              {emailError ? (
                <p className="text-xs text-destructive italic">{emailError}</p>
              ) : (
                <p className="text-xs text-muted-foreground italic">Personal email addresses (Gmail, Yahoo, etc.) are not accepted</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-border"
                maxLength={20}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Area of Interest
              </label>
              <Select value={formData.areaOfInterest} onValueChange={(value) => setFormData({ ...formData, areaOfInterest: value })}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {areasOfInterest.map((area) => (
                    <SelectItem key={area} value={area}>{area}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Retirement Budget Range
              </label>
              <Select value={formData.budgetRange} onValueChange={(value) => setFormData({ ...formData, budgetRange: value })}>
                <SelectTrigger className="border-border">
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Message <span className="text-accent-gold">*</span>
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your retirement goals and timeline..."
                className="border-border min-h-[100px]"
                required
                maxLength={1000}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-accent-gold text-white uppercase tracking-[0.15em] text-sm font-medium hover:bg-accent-gold-dark transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Tools Grid Section */}
      <section className="py-20 px-4 md:px-8 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-6">
            {tools.map((tool) => (
              <a
                key={tool.href}
                href={tool.href}
                className="group block p-8 border border-border bg-card hover:bg-muted/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 text-primary">
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-medium text-primary mb-2 group-hover:text-primary/80 transition-colors flex items-center gap-2">
                      {tool.title}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h2>
                    <p className="text-muted-foreground font-light">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
