import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/30 dark:bg-card/30">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Technical Skills</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A snapshot of the technologies and tools I work with.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="glass-card group flex flex-col items-center justify-center p-4 text-center transition-all duration-300 hover:!scale-110 hover:bg-primary/10 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms`, animation: `float 8s ease-in-out ${index * 0.5}s infinite` }}
            >
              <CardContent className="p-0 flex flex-col items-center justify-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                </div>
                <p className="font-semibold">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
