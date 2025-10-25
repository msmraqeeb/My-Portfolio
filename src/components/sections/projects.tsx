import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Featured Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of my work. See something you like? Let's talk.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find((img) => img.id === project.image);
            return (
              <Card key={project.title} className="glass-card flex flex-col overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Link href={project.link}>
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={projectImage.imageHint}
                      />
                    )}
                  </Link>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-headline">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-base text-card-foreground/80">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto text-primary-foreground">
                    <Link href={project.link}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
