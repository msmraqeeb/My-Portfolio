import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'project-1',
    title: 'Data Analytics Platform',
    description: 'A comprehensive platform for real-time data visualization and business intelligence, helping teams make informed decisions.',
    tags: ['Next.js', 'React', 'D3.js'],
  },
  {
    id: 'project-2',
    title: 'SaaS Dashboard UI',
    description: 'A sleek and modern user interface for a software-as-a-service application, focusing on usability and a clean aesthetic.',
    tags: ['UI/UX', 'Figma', 'Tailwind'],
  },
  {
    id: 'project-3',
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile application for personal finance management, built with a focus on user experience.',
    tags: ['React Native', 'Firebase', 'Security'],
  },
  {
    id: 'project-4',
    title: 'E-commerce Storefront',
    description: 'A high-performance online store with a custom headless CMS, designed for a seamless shopping experience.',
    tags: ['Shopify', 'Next.js', 'GraphQL'],
  },
  {
    id: 'project-5',
    title: 'AI Chatbot Integration',
    description: 'An intelligent chatbot for customer support, integrated with a live-chat feature and knowledge base.',
    tags: ['GenAI', 'Next.js', 'Vercel'],
  },
  {
    id: 'project-6',
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    tags: ['React', 'Node.js', 'Websockets'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
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
                <Link href="#" className="block">
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