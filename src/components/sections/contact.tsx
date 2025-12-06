'use client';

import { profile } from '@/lib/data';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (data) => {
    const subject = encodeURIComponent(`Message from ${data.name} via Portfolio`);
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} <${data.email}>`);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="section-title">
        <p>Contact</p>
        <h2>Get In Touch</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-6">
            <h3 className="text-xl font-bold">Find Me</h3>
            <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Mail className="h-5 w-5" />
                    </div>
                    <div>
                        <h4 className="font-bold">Email</h4>
                        <a href={`mailto:${profile.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {profile.contact.email}
                        </a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Phone className="h-5 w-5" />
                    </div>
                    <div>
                        <h4 className="font-bold">Phone</h4>
                        <a href={`tel:${profile.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {profile.contact.phone}
                        </a>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                        <h4 className="font-bold">Location</h4>
                        <p className="text-muted-foreground text-sm">{profile.location}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Contact Form</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
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
                      <FormControl>
                        <Input placeholder="Your Email" {...field} />
                      </FormControl>
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
                    <FormControl>
                      <Textarea placeholder="Your Message" rows={5} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="rounded-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
