import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/50 dark:bg-card">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Technical Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A snapshot of the technologies and tools I work with.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="group flex flex-col items-center justify-center p-4 text-center transition-transform duration-300 hover:scale-105 hover:bg-primary/5 dark:hover:bg-primary/10"
            >
              <CardContent className="p-0">
                <skill.icon className="h-10 w-10 mb-3 text-primary transition-colors group-hover:text-primary" />
                <p className="font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
