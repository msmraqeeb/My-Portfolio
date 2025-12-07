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
    title: 'Heckya',
    description: 'Heckya is a creative agency offering events, public-relations, social-media management, web & graphic design, and videography services.',
    tags: ['Wix'],
    link: 'https://heckya.ca/',
  },
  {
    id: 'project-5',
    title: 'Kids Paradise',
    description: 'Kids Paradise is an online store (with a physical shop in Dhaka) selling baby products, children’s clothes, toys, and related kids-items.',
    tags: ['Wordpress'],
    link: 'https://kidsparadise.com.bd/',
  },
  {
    id: 'project-6',
    title: 'CorneliusDavisJr',
    description: 'CorneliusDavisJr.com — a website offering financial coaching, planning, and advice services, with blog content and options like one-on-one coaching, home-buyer support, and comprehensive financial plans.',
    tags: ['Wordpress'],
    link: 'https://corneliusdavisjr.com/',
  },
  {
    id: 'project-7',
    title: 'PaxPro',
    description: 'PaxPro — a security-services company offering tailored protection: personnel security, building & event security, traffic control, transport security, and more.',
    tags: ['Wordpress'],
    link: 'https://paxpro.eu/',
  },
  {
    id: 'project-8',
    title: 'One Flower',
    description: 'One Flower — an online shop offering indoor/outdoor plants, flower bouquets, landscaping products and services.',
    tags: ['Wordpress'],
    link: 'https://oneflowerae.com/',
  },
  {
    id: 'project-9',
    title: 'Asayel Birds & Fish Aquariums',
    description: 'Asayel — I’m unable to determine a clear description: the site seems inaccessible or lacks enough public content to confidently characterize.',
    tags: ['Wordpress'],
    link: 'https://asayel.site/',
  },
  {
    id: 'project-10',
    title: 'A Reflection Within',
    description: 'A Reflection Within (areflectionwithin.com) — A site for a healing & personal-transformation service offering life-coaching, hypnosis, Reiki, mindset work, and other holistic healing resources.',
    tags: ['Wordpress'],
    link: 'https://areflectionwithin.com/',
  },
  {
    id: 'project-11',
    title: 'Priority Real Estate Ltd.',
    description: 'Priority Real Estate Ltd.  — A real-estate firm in Bangladesh providing residential and commercial property services, including apartments and office spaces.',
    tags: ['Wordpress'],
    link: 'https://priorityrealestatebd.com/',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
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
