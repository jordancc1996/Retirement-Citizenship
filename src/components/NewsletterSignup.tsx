import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { isWorkEmail } from "@/lib/utils";

const formSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .refine((email) => isWorkEmail(email), {
      message: "Please use a work or business email address",
    }),
});

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      const response = await fetch('https://formcarry.com/s/WyxZp21S-N1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: values.email,
          source: 'Retirement Citizenship Newsletter'
        })
      });

      if (response.ok) {
        toast({
          title: "Submission Successful!",
          description: "Submission Successful!",
        });
        form.reset();
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-light text-primary mb-4">
            Get the Latest News
          </h2>
          <p className="text-lg text-primary mb-8 leading-relaxed">
            Stay informed with exclusive insights, retirement destination guides, and expert advice delivered directly to your inbox.
          </p>
          <p className="text-sm text-primary/70 mb-4 italic">
            Note: Please use your work or business email address
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your work or business email" 
                          {...field} 
                          className="border-primary/20 focus:border-primary text-primary text-center"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground hover:opacity-90 py-3 text-sm uppercase tracking-wider disabled:opacity-50"
                >
                  {isLoading ? "Subscribing..." : "Request the 2026 Strategic Briefing"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
