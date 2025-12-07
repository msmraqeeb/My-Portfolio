import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GitFork, Terminal, Figma, Slack, AtSign, Settings } from 'lucide-react';

const tools = [
  {
    name: 'VS Code',
    icon: <Terminal className="h-10 w-10 text-primary" />,
    description: 'My go-to editor for code.',
  },
  {
    name: 'Git & GitHub',
    icon: <GitFork className="h-10 w-10 text-primary" />,
    description: 'For version control and collaboration.',
  },
  {
    name: 'Figma',
    icon: <Figma className="h-10 w-10 text-primary" />,
    description: 'For design mockups and UI/UX.',
  },
  {
    name: 'Slack',
    icon: <Slack className="h-10 w-10 text-primary" />,
    description: 'For team communication.',
  },
  {
    name: 'Postman',
    icon: <AtSign className="h-10 w-10 text-primary" />,
    description: 'For API testing and development.',
  },
  {
    name: 'Jira',
    icon: <Settings className="h-10 w-10 text-primary" />,
    description: 'For project management and tracking.',
  },
];

export default function Tools() {
  return (
    <section id="tools" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
              MY TOOLS
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              My Development Arsenal
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The tools and software I use to bring projects to life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
          {tools.map(tool => (
            <Card key={tool.name} className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-2">
              <CardHeader className="p-0">
                {tool.icon}
                <CardTitle className="mt-4 font-headline">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
