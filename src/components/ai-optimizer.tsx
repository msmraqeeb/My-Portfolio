"use client";

import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { optimizeContentLayout } from '@/ai/flows/optimize-content-layout';
import { Button } from './ui/button';
import { Wand2, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type AiOptimizerProps = {
  initialContent: string;
};

export default function AiOptimizer({ initialContent }: AiOptimizerProps) {
  const [content, setContent] = useState(initialContent);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleOptimize = async () => {
    setIsLoading(true);
    try {
      const result = await optimizeContentLayout({
        content: initialContent,
        deviceType: isMobile ? 'mobile' : 'desktop',
        stylePreferences: 'sleek, minimalist, professional',
      });
      if (result.optimizedContent) {
        setContent(result.optimizedContent);
        toast({
          title: 'Content Optimized',
          description: 'The content has been enhanced by AI.',
        });
      }
    } catch (error) {
      console.error('AI optimization failed:', error);
      toast({
        title: 'Optimization Failed',
        description: 'Could not optimize content at this time.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <div
        className="text-muted-foreground md:text-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="mt-6 flex items-center gap-4">
        <Button onClick={handleOptimize} disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          {isLoading ? 'Optimizing...' : 'Optimize with AI'}
        </Button>
      </div>
    </div>
  );
}
