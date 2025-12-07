'use server';

/**
 * @fileOverview An AI agent that optimizes content layout for portfolio websites, ensuring readability and professional presentation across devices.
 *
 * - optimizeContentLayout - A function that takes content as input and returns optimized content.
 * - OptimizeContentLayoutInput - The input type for the optimizeContentLayout function.
 * - OptimizeContentLayoutOutput - The return type for the optimizeContentLayout function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeContentLayoutInputSchema = z.object({
  content: z.string().describe('The content of the portfolio to be optimized.'),
  deviceType: z
    .string()
    .describe('The type of device the content will be displayed on (e.g., desktop, tablet, mobile).'),
  stylePreferences: z
    .string()
    .optional()
    .describe('Optional style preferences to guide the layout optimization.'),
});
export type OptimizeContentLayoutInput = z.infer<typeof OptimizeContentLayoutInputSchema>;

const OptimizeContentLayoutOutputSchema = z.object({
  optimizedContent: z.string().describe('The content optimized for the specified device and style.'),
});
export type OptimizeContentLayoutOutput = z.infer<typeof OptimizeContentLayoutOutputSchema>;

export async function optimizeContentLayout(input: OptimizeContentLayoutInput): Promise<OptimizeContentLayoutOutput> {
  return optimizeContentLayoutFlow(input);
}

const optimizeContentLayoutPrompt = ai.definePrompt({
  name: 'optimizeContentLayoutPrompt',
  input: {schema: OptimizeContentLayoutInputSchema},
  output: {schema: OptimizeContentLayoutOutputSchema},
  prompt: `You are an expert web designer specializing in optimizing content layout for portfolio websites.

You will receive content, the type of device it will be displayed on, and optional style preferences. You will then optimize the content for the specified device and style, ensuring optimal layout and readability.

Content: {{{content}}}
Device Type: {{{deviceType}}}
Style Preferences: {{{stylePreferences}}}

Optimize the content to be visually appealing and easy to read on the specified device, adhering to any provided style preferences.`,
});

const optimizeContentLayoutFlow = ai.defineFlow(
  {
    name: 'optimizeContentLayoutFlow',
    inputSchema: OptimizeContentLayoutInputSchema,
    outputSchema: OptimizeContentLayoutOutputSchema,
  },
  async input => {
    const {output} = await optimizeContentLayoutPrompt(input);
    return output!;
  }
);
