import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, DatabaseZap, Cloud, Paintbrush, Server, GitBranch } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  {
    name: 'Frontend',
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    description: 'React, Next.js, TypeScript, Tailwind CSS',
  },
  {
    name: 'Backend',
    icon: <Server className="h-10 w-10 text-primary" />,
    description: 'Node.js, Express, Firebase',
  },
  {
    name: 'Databases',
    icon: <DatabaseZap className="h-10 w-10 text-primary" />,
    description: 'PostgreSQL, MongoDB, Firestore',
  },
  {
    name: 'DevOps',
    icon: <Cloud className="h-10 w-10 text-primary" />,
    description: 'Docker, Vercel, Google Cloud',
  },
  {
    name: 'Design',
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    description: 'Figma, UI/UX Principles',
  },
  {
    name: 'Tooling',
    icon: <GitBranch className="h-10 w-10 text-primary" />,
    description: 'Git, Webpack, Jest',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
              MY SKILLS
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              My Technical Toolkit
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into the technologies and tools I use. I'm always learning and adapting to new things.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
          {skills.map(skill => (
            <Card key={skill.name} className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-2">
              <CardHeader className="p-0">
                {skill.icon}
                <CardTitle className="mt-4 font-headline">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
