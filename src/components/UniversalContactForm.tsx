import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { isWorkEmail } from "@/lib/utils";

const UniversalContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    relocationIntent: '',
    goldenVisaProgram: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate work or edu email
    if (!isWorkEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formcarry.com/s/WyxZp21S-N1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          relocationIntent: formData.relocationIntent,
          goldenVisaProgram: formData.goldenVisaProgram,
          source: 'Universal Contact Form'
        })
      });

      if (response.ok) {
        toast({
          title: "Submission Successful!",
          description: "Submission Successful!",
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          countryCode: '+1',
          relocationIntent: '',
          goldenVisaProgram: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-primary text-sm">
              First Name*
            </Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="border-primary/20 bg-background text-primary focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-primary text-sm">
              Last Name*
            </Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="border-primary/20 bg-background text-primary focus:border-primary"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-primary text-sm">
            Email*
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="border-primary/20 bg-background text-primary focus:border-primary"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-primary text-sm">
            Phone Number*
          </Label>
          <div className="flex gap-2">
            <Select 
              value={formData.countryCode} 
              onValueChange={(value) => handleSelectChange('countryCode', value)}
            >
              <SelectTrigger className="w-[140px] border-primary/20 focus:border-primary text-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">United States</SelectItem>
                <SelectItem value="+44">United Kingdom</SelectItem>
                <SelectItem value="+351">Portugal</SelectItem>
                <SelectItem value="+30">Greece</SelectItem>
                <SelectItem value="+39">Italy</SelectItem>
                <SelectItem value="+54">Argentina</SelectItem>
                <SelectItem value="+1">Canada</SelectItem>
                <SelectItem value="+61">Australia</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="flex-1 border-primary/20 bg-background text-primary focus:border-primary"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="relocationIntent" className="text-primary text-sm">
            Do you intend to relocate to Portugal within the next 12 months?*
          </Label>
          <Select 
            value={formData.relocationIntent} 
            onValueChange={(value) => handleSelectChange('relocationIntent', value)}
            required
          >
            <SelectTrigger className="border-primary/20 focus:border-primary text-primary">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relocate-12-months">I prefer to relocate within 12 months (No investment required)</SelectItem>
              <SelectItem value="remain-home">I prefer to remain at home (Investment required)</SelectItem>
              <SelectItem value="not-interested-portugal">Not interested in Portugal</SelectItem>
              <SelectItem value="undecided">Undecided</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="goldenVisaProgram" className="text-primary text-sm">
            Which Golden Visa program are you interested in?*
          </Label>
          <Select 
            value={formData.goldenVisaProgram} 
            onValueChange={(value) => handleSelectChange('goldenVisaProgram', value)}
            required
          >
            <SelectTrigger className="border-primary/20 focus:border-primary text-primary">
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="portugal">Portugal</SelectItem>
              <SelectItem value="italy">Italy</SelectItem>
              <SelectItem value="greece">Greece</SelectItem>
              <SelectItem value="argentina">Argentina</SelectItem>
              <SelectItem value="hungary">Hungary</SelectItem>
              <SelectItem value="uae">UAE</SelectItem>
              <SelectItem value="turkey">Turkey</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:opacity-90 uppercase tracking-wider text-sm font-medium py-6 disabled:opacity-50"
        >
          {isSubmitting ? 'SUBMITTING...' : 'SCHEDULE A PRIVATE CONSULTATION'}
        </Button>
      </form>
    </div>
  );
};

export default UniversalContactForm;
