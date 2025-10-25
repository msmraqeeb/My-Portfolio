'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleContactFormSubmission } from '@/actions/contact';
import { Loader2, Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import React from 'react';
import { profile } from '@/lib/data';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await handleContactFormSubmission(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({ title: 'Message Sent!', description: "Thanks for reaching out. I'll get back to you soon." });
      form.reset();
    } else {
      toast({ variant: 'destructive', title: 'Uh oh! Something went wrong.', description: result.message });
    }
  }

  return (
    <section id="contact">
      <div className="section-title">
        <p>Contact</p>
        <h2>Get In Touch</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold">Find Me</h3>
            <p className="text-muted-foreground">
                Please feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
             <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h4 className="font-bold">Location</h4>
                        <p className="text-muted-foreground">{profile.location}</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                        <h4 className="font-bold">Email</h4>
                        <a href={`mailto:${profile.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">{profile.contact.email}</a>
                    </div>
                </div>
            </div>
            <h4 className="text-xl font-bold pt-4 border-t mt-8">Follow Me</h4>
            <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <Button key={social.name} variant="outline" size="icon" className="rounded-full" asChild>
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </Button>
                ))}
            </div>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} className="bg-card border-border h-12" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input placeholder="Your Email" {...field} className="bg-card border-border h-12" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                     <FormLabel>Message</FormLabel>
                    <FormControl><Textarea placeholder="Tell me more about your needs..." className="min-h-[120px] bg-card border-border" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" disabled={isSubmitting} className="rounded-full">
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
