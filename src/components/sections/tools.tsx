import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const tools = [
  {
    id: 'tool-1',
    title: 'QuickScribe AI',
    description: 'QuickScribe AI — a web-based tool that automatically converts spoken or recorded patient conversations into structured medical documentation (i.e. ready-to-sign clinical notes).',
    tags: ['Next'],
    link: 'https://quickscribeai.vercel.app/',
  },
  {
    id: 'tool-2',
    title: 'Euro IT Accounts',
    description: 'Euro IT Accounts is a simple, web-based financial tracking app designed to help users manage expenses, income, and account records efficiently.',
    tags: ['Next'],
    link: 'https://euro-it-accounts.vercel.app/',
  },
  {
    id: 'tool-3',
    title: 'ShakBot',
    description: 'ShakBot is an AI-powered chatbot web app built and hosted by Shakil, providing conversational interactions or automated responses directly in the browser. It’s a lightweight, user-facing bot interface accessible online via the Vercel platform.',
    tags: ['Next'],
    link: 'https://shakbot.vercel.app/',
  },
];

export default function Tools() {
  return (
    <section id="tools" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
            MY TOOLS
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            My Custom-Built Tools
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the custom tools I've built to solve real-world problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {tools.map(tool => {
            const toolImage = PlaceHolderImages.find(img => img.id === tool.id);
            return (
              <Card key={tool.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <Link href={tool.link} target="_blank" rel="noopener noreferrer" className="block">
                  <CardHeader className="p-0">
                    {toolImage && (
                      <Image
                        src={toolImage.imageUrl}
                        alt={toolImage.description}
                        data-ai-hint={toolImage.imageHint}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto aspect-video"
                      />
                    )}
                  </CardHeader>
                  <div className="p-6">
                    <CardTitle className="font-headline text-2xl flex items-center justify-between">
                      {tool.title}
                      <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </CardTitle>
                    <CardDescription className="mt-2">{tool.description}</CardDescription>
                  </div>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
