import { Badge } from '@/components/ui/badge';
import { GitFork, Terminal, Figma, Slack, AtSign, Settings } from 'lucide-react';

const tools = [
  {
    icon: <Terminal className="h-8 w-8 text-primary" />,
    name: 'VS Code',
    description: 'My go-to editor for code.',
  },
  {
    icon: <GitFork className="h-8 w-8 text-primary" />,
    name: 'Git & GitHub',
    description: 'For version control and collaboration.',
  },
  {
    icon: <Figma className="h-8 w-8 text-primary" />,
    name: 'Figma',
    description: 'For design mockups and UI/UX.',
  },
  {
    icon: <Slack className="h-8 w-8 text-primary" />,
    name: 'Slack',
    description: 'For team communication.',
  },
  {
    icon: <AtSign className="h-8 w-8 text-primary" />,
    name: 'Postman',
    description: 'For API testing and development.',
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    name: 'Jira',
    description: 'For project management and tracking.',
  },
];

export default function Tools() {
  return (
    <section id="tools" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
            MY TOOLS
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            My Development Arsenal
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The tools and software I use to bring projects to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-start space-x-6">
               <div className="flex-shrink-0">{tool.icon}</div>
               <div className="flex-grow">
                <h3 className="text-xl font-bold font-headline mb-2">{tool.name}</h3>
                <p className="text-muted-foreground">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
