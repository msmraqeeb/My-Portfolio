'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleContactFormSubmission } from '@/actions/contact';
import { Loader2, Send, Bot } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitted(false);
    const result = await handleContactFormSubmission(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setSubmitted(true);
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.message,
      });
    }
  }

  return (
     <Card className="glass-card w-full max-w-lg mx-auto shadow-2xl">
        <CardHeader>
          <div className='flex items-center gap-3'>
             <div className='relative'>
                 <Avatar className='h-12 w-12'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="Alex Doe" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className='absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background' />
            </div>
            <div>
                 <CardTitle className="text-xl font-headline">Alex Doe</CardTitle>
                 <p className="text-sm text-muted-foreground">Ready to help</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className='h-8 w-8 border-2 border-primary'>
                  <AvatarImage src="https://github.com/shadcn.png" alt="Alex Doe" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">Hey there! Got a project, a question, or just want to connect? Drop me a message below.</p>
                </div>
              </div>

              {submitted && (
                 <div className="flex items-start gap-3 justify-start">
                    <Avatar className='h-8 w-8 border-2 border-primary'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Alex Doe" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%] animate-in fade-in-50 slide-in-from-bottom-2">
                      <p className="text-sm">Thanks for your message! I've received it and will get back to you as soon as possible. Have a great day!</p>
                    </div>
                 </div>
              )}

              {!submitted && (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                          <FormItem>
                              <FormControl>
                              <Input placeholder="Your Name" {...field} className="bg-background/70" />
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
                              <FormControl>
                              <Input placeholder="your.email@example.com" {...field} className="bg-background/70" />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                          )}
                      />
                      <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                          <FormItem>
                          <FormControl>
                              <Textarea placeholder="Type your message..." className="min-h-[80px] bg-background/70" {...field} />
                          </FormControl>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          ) : (
                              <Send className="mr-2 h-4 w-4" />
                          )}
                          Send Message
                      </Button>
                  </form>
                </Form>
              )}
            </div>
        </CardContent>
    </Card>
  );
}

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline shimmer-text">Get in Touch</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have a project in mind or just want to say hello? Let's chat.
                    </p>
                </div>
                <div className="mt-12">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
