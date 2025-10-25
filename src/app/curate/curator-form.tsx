'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { aiPortfolioCurator, AIPortfolioCuratorOutput } from '@/ai/flows/ai-portfolio-curator';
import { Loader2, BrainCircuit, Wand2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  projectTitle: z.string().min(5, 'Title must be at least 5 characters.'),
  projectDescription: z.string().min(20, 'Description must be at least 20 characters.'),
  technologiesUsed: z.string().min(2, 'Please list at least one technology.'),
});

type FormData = z.infer<typeof formSchema>;

export default function CuratorForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<AIPortfolioCuratorOutput | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectTitle: '',
      projectDescription: '',
      technologiesUsed: '',
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    setResult(null);
    try {
      const technologiesArray = values.technologiesUsed.split(',').map(tech => tech.trim()).filter(Boolean);
      const output = await aiPortfolioCurator({
        projectTitle: values.projectTitle,
        projectDescription: values.projectDescription,
        technologiesUsed: technologiesArray,
      });
      setResult(output);
    } catch (error) {
      console.error('AI Portfolio Curator Error:', error);
      toast({
        variant: 'destructive',
        title: 'AI Curation Failed',
        description: 'There was an error processing your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2 font-headline'>
            <BrainCircuit className="h-6 w-6" />
            Project Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Artisan E-commerce Platform" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your project's goals, features, and outcomes." {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="technologiesUsed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technologies Used</FormLabel>
                    <FormControl>
                      <Input placeholder="React, Next.js, Stripe, PostgreSQL" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a comma-separated list of technologies.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Curate Project
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isSubmitting && (
        <div className="text-center mt-8">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-2 text-muted-foreground">AI is thinking...</p>
        </div>
      )}

      {result && (
        <Card className="mt-8 animate-in fade-in-50 duration-500">
            <CardHeader>
                <CardTitle className='font-headline'>AI Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Suggested Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        {result.suggestedCategories.map(cat => <Badge key={cat}>{cat}</Badge>)}
                    </div>
                </div>
                <Separator/>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Suggested Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {result.suggestedTags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                </div>
                <Separator/>
                 <div>
                    <h3 className="font-semibold text-lg mb-2">AI Reasoning</h3>
                    <p className="text-muted-foreground bg-muted/50 p-4 rounded-md border">{result.reasoning}</p>
                </div>
            </CardContent>
        </Card>
      )}
    </>
  );
}
