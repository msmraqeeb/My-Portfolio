'use server';

/**
 * @fileOverview An AI tool that reviews project details and suggests optimal tags and categories.
 *
 * - aiPortfolioCurator - A function that handles the portfolio curation process.
 * - AIPortfolioCuratorInput - The input type for the aiPortfolioCurator function.
 * - AIPortfolioCuratorOutput - The return type for the aiPortfolioCurator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPortfolioCuratorInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  projectDescription: z.string().describe('A detailed description of the project.'),
  technologiesUsed: z.array(z.string()).describe('An array of technologies used in the project.'),
});
export type AIPortfolioCuratorInput = z.infer<typeof AIPortfolioCuratorInputSchema>;

const AIPortfolioCuratorOutputSchema = z.object({
  suggestedTags: z.array(z.string()).describe('An array of suggested tags for the project.'),
  suggestedCategories: z.array(z.string()).describe('An array of suggested categories for the project.'),
  reasoning: z.string().describe('The AI reasoning behind the suggested tags and categories.'),
});
export type AIPortfolioCuratorOutput = z.infer<typeof AIPortfolioCuratorOutputSchema>;

export async function aiPortfolioCurator(input: AIPortfolioCuratorInput): Promise<AIPortfolioCuratorOutput> {
  return aiPortfolioCuratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPortfolioCuratorPrompt',
  input: {schema: AIPortfolioCuratorInputSchema},
  output: {schema: AIPortfolioCuratorOutputSchema},
  prompt: `You are an expert portfolio curator, skilled at optimizing the presentation and discoverability of projects.

  Review the following project details and suggest optimal tags and categories to enhance its presentation.

  Project Title: {{{projectTitle}}}
  Project Description: {{{projectDescription}}}
  Technologies Used: {{#each technologiesUsed}}{{{this}}}, {{/each}}

  Provide the suggested tags, categories, and a brief explanation of your reasoning.

  Output format: JSON object with "suggestedTags", "suggestedCategories", and "reasoning" keys. The tags and categories should be an array of strings.
  `,
});

const aiPortfolioCuratorFlow = ai.defineFlow(
  {
    name: 'aiPortfolioCuratorFlow',
    inputSchema: AIPortfolioCuratorInputSchema,
    outputSchema: AIPortfolioCuratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
