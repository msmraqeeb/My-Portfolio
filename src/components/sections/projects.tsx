import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'Lakewood Of Strathmore',
    description: 'Live in Lakewood is a website promoting a modern lakeside residential community featuring waterfront homes, nature amenities, and an active outdoor lifestyle.',
    tags: ['Wix'],
    link: 'https://liveinlakewood.ca/',
  },
  {
    id: 'project-2',
    title: 'InVEST USA',
    description: 'InVEST USA is a U.S.-based nonprofit whose website describes their mission as providing free body armor to first responders — police officers, firefighters, and emergency personnel — at no cost to them or their agencies.',
    tags: ['Custom'],
    link: 'https://investusa.org/',
  },
  {
    id: 'project-3',
    title: 'iShip Inc.',
    description: 'iShip Inc. is a freight-forwarding and logistics company that offers global shipping services, especially vehicle and cargo transport from the USA via ocean freight, container or RORO shipping, customs clearance, and inland transportation.',
    tags: ['Wordpress'],
    link: 'https://ishipinc.com/',
  },
  {
    id: 'project-4',
    title: 'E-commerce Storefront',
    description: 'A high-performance online store with a custom headless CMS, designed for a seamless shopping experience.',
    tags: ['Shopify', 'Next.js', 'GraphQL'],
    link: '#',
  },
  {
    id: 'project-5',
    title: 'AI Chatbot Integration',
    description: 'An intelligent chatbot for customer support, integrated with a live-chat feature and knowledge base.',
    tags: ['GenAI', 'Next.js', 'Vercel'],
    link: '#',
  },
  {
    id: 'project-6',
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    tags: ['React', 'Node.js', 'Websockets'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 lg:px-32 xl:px-48">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud to have worked on.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {projects.map(project => {
            const projectImage = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <CardHeader className="p-0">
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        data-ai-hint={projectImage.imageHint}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto aspect-video"
                      />
                    )}
                  </CardHeader>
                  <div className="p-6">
                    <CardTitle className="font-headline text-2xl flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </CardTitle>
                    <CardDescription className="mt-2">{project.description}</CardDescription>
                  </div>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
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
