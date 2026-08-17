import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import UniversalContactForm from "@/components/UniversalContactForm";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/10">
        <div className="container mx-auto px-8 py-6">
          <a href="/" className="inline-flex items-center text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="text-sm uppercase tracking-wider">Back to Home</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-primary/80">
            Effective Date: [Effective Date]
          </p>
          <p className="text-lg text-primary/80 mt-2">
            Last Updated: [Last Updated Date]
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-background border-b border-primary/10">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-2xl font-light text-primary mb-6">
            Table of Contents
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { id: "introduction", title: "1. Introduction" },
              { id: "information-collected", title: "2. Information We Collect" },
              { id: "how-we-use", title: "3. How We Use Your Information" },
              { id: "sharing", title: "4. How We Share Information" },
              { id: "data-retention", title: "5. Data Retention" },
              { id: "user-rights", title: "6. Your Rights" },
              { id: "cookies", title: "7. Cookies and Tracking" },
              { id: "security", title: "8. Security Measures" },
              { id: "children", title: "9. Children's Privacy" },
              { id: "california", title: "10. California Residents' Rights" },
              { id: "changes", title: "11. Changes to This Policy" },
              { id: "contact", title: "12. Contact Information" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-8 max-w-4xl space-y-12">
          
          {/* Introduction */}
          <div id="introduction" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              1. Introduction
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>
                Welcome to [Company Name] ("[Website URL]"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
              <p>
                We reserve the right to make changes to this privacy policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this privacy policy.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div id="information-collected" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              2. Information We Collect
            </h2>
            <div className="space-y-6 text-primary/90 leading-relaxed">
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">2.1 Personal Information</h3>
                <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Register for our newsletter or updates</li>
                  <li>Fill out contact forms or request information</li>
                  <li>Download guides, checklists, or other resources</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="mt-3">This personal information may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name (first and last)</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Mailing address</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">2.2 Automatically Collected Information</h3>
                <p className="mb-3">When you visit our website, we automatically collect certain information about your device, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website addresses</li>
                  <li>Pages viewed and time spent on pages</li>
                  <li>Date and time of visits</li>
                  <li>Device identifiers and mobile network information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">2.3 Cookies and Tracking Technologies</h3>
                <p>
                  We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. For more details, please see our Cookies and Tracking Technologies section below.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div id="how-we-use" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>We use the information we collect or receive to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website and services</li>
                <li>Send you newsletters, updates, and marketing communications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver requested information, guides, and resources</li>
                <li>Analyze usage patterns and improve our website</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our terms and conditions</li>
                <li>Personalize your experience and deliver targeted content</li>
                <li>Conduct research and analytics to improve our services</li>
                <li>Send administrative information such as policy changes</li>
              </ul>
            </div>
          </div>

          {/* How We Share Information */}
          <div id="sharing" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              4. How We Share Information
            </h2>
            <div className="space-y-6 text-primary/90 leading-relaxed">
              <p>We may share your information in the following situations:</p>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">4.1 Service Providers</h3>
                <p className="mb-3">We may share your information with third-party service providers who perform services on our behalf, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email marketing platforms (e.g., Formcarry, Mailchimp)</li>
                  <li>Website hosting and maintenance services</li>
                  <li>Analytics providers (e.g., Google Analytics)</li>
                  <li>Customer relationship management (CRM) systems</li>
                  <li>Payment processors (if applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">4.2 Legal Requirements</h3>
                <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas, government agencies).</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">4.3 Business Transfers</h3>
                <p>In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction.</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">4.4 With Your Consent</h3>
                <p>We may share your information for any other purpose with your explicit consent.</p>
              </div>

              <p className="pt-4">
                <strong>We do not sell your personal information to third parties.</strong>
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div id="data-retention" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              5. Data Retention
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
              <p>
                When we no longer need your personal information, we will securely delete or anonymize it. If deletion is not possible (for example, because the information is stored in backup archives), we will securely store your information and isolate it from further processing until deletion is possible.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div id="user-rights" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              6. Your Rights
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> You can request a copy of the personal information we hold about you.</li>
                <li><strong>Right to Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
                <li><strong>Right to Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
                <li><strong>Right to Restrict Processing:</strong> You can request that we limit how we use your information.</li>
                <li><strong>Right to Data Portability:</strong> You can request a copy of your data in a structured, machine-readable format.</li>
                <li><strong>Right to Opt-Out:</strong> You can opt out of receiving marketing communications from us at any time.</li>
                <li><strong>Right to Object:</strong> You can object to our processing of your personal information.</li>
              </ul>
              <p className="pt-4">
                To exercise any of these rights, please contact us at [Contact Email]. We will respond to your request within 30 days.
              </p>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div id="cookies" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              7. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-6 text-primary/90 leading-relaxed">
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are small data files stored on your device.
              </p>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">7.1 Types of Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (e.g., Google Analytics).</li>
                  <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertisements.</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">7.2 Third-Party Tracking</h3>
                <p className="mb-3">We use the following third-party services that may collect information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Social Media Plugins:</strong> May track your interactions with social media content</li>
                  <li><strong>Email Marketing Platforms:</strong> Track email opens and link clicks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">7.3 Managing Cookies</h3>
                <p>
                  Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, if you disable cookies, some features of our website may not function properly.
                </p>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div id="security" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              8. Security Measures
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="pt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div id="children" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              9. Children's Privacy (COPPA Compliance)
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
              </p>
              <p>
                If we become aware that we have collected personal information from children under 13 without verification of parental consent, we will take steps to remove that information from our servers.
              </p>
            </div>
          </div>

          {/* California Residents' Rights */}
          <div id="california" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              10. California Residents' Rights (CCPA Compliance)
            </h2>
            <div className="space-y-6 text-primary/90 leading-relaxed">
              <p>
                If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA).
              </p>
              
              <div>
                <h3 className="text-xl font-medium text-primary mb-3">10.1 Your CCPA Rights</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Right to Know:</strong> You can request information about the personal data we have collected about you in the past 12 months.</li>
                  <li><strong>Right to Delete:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
                  <li><strong>Right to Opt-Out:</strong> You can opt out of the sale of your personal information (we do not sell personal information).</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">10.2 Categories of Information Collected</h3>
                <p className="mb-3">In the past 12 months, we may have collected the following categories of personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identifiers (name, email, phone number, IP address)</li>
                  <li>Internet or network activity (browsing history, interactions with our website)</li>
                  <li>Geolocation data (derived from IP address)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-primary mb-3">10.3 How to Exercise Your Rights</h3>
                <p>
                  To exercise your CCPA rights, please contact us at [Contact Email] or call [Phone Number]. We will verify your identity before processing your request and respond within 45 days.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to This Policy */}
          <div id="changes" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              11. Changes to This Privacy Policy
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Last Updated" date at the top of this policy.
              </p>
              <p>
                We encourage you to review this privacy policy periodically to stay informed about how we are protecting your information. Your continued use of our website after any changes indicates your acceptance of the updated privacy policy.
              </p>
              <p>
                If we make material changes to this privacy policy, we will notify you by email (if you have provided your email address) or by posting a prominent notice on our website.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div id="contact" className="scroll-mt-24">
            <h2 className="text-3xl font-light text-primary mb-6 border-b border-primary/20 pb-3">
              12. Contact Information
            </h2>
            <div className="space-y-4 text-primary/90 leading-relaxed">
              <p>
                If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-secondary/20 p-6 rounded-md mt-6">
                <p className="font-medium text-primary mb-2">[Company Name]</p>
                <p>Email: [Contact Email]</p>
                <p>Phone: [Phone Number]</p>
                <p>Address: [Mailing Address]</p>
                <p>Website: [Website URL]</p>
              </div>
              <p className="pt-4">
                We will respond to your inquiry as promptly as possible, typically within 30 days.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-secondary/20 border-t border-primary/10">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <p className="text-sm text-primary/70 leading-relaxed">
            This privacy policy was last updated on [Last Updated Date]. By using our website, you acknowledge that you have read and understood this privacy policy.
          </p>
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

export default PrivacyPolicy;
