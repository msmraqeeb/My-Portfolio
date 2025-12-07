import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "2009 - 2012",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Stamford University",
    description: "Focused on web design and software development, with a curriculum covering data structures, algorithms, and database management. Gathered practical skills on social media integration and digital marketing strategies through various projects.",
  },
  {
    period: "2006 - 2008",
    degree: "Higher Secondary Certificate (H.S.C)",
    institution: "Notre Dame College",
    description: "Completed my higher secondary education with a focus on science. Specialized in various science projects and achieved a top result in the board examinations.",
  },
  {
    period: "2005 - 2006",
    degree: "Secondary School Certificate (S.S.C)",
    institution: "Motijheel Model & College",
    description: "Completed secondary education with a concentration in the science group, building a strong foundation in physics, chemistry, and mathematics.",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6 lg:px-32 xl:px-48">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
            RESUME
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            A SUMMARY OF MY RESUME
          </h2>
        </div>
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold font-headline">My Education</h3>
          </div>
          <div className="relative pl-6">
            <div className="absolute left-[35px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
            {education.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-transparent"></div>
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card ring-4 ring-primary">
                      <GraduationCap className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="flex-grow rounded-lg bg-card p-6 shadow-sm">
                  <p className="mb-2 text-sm text-muted-foreground">{item.period}</p>
                  <h4 className="text-xl font-bold font-headline mb-1">{item.degree}</h4>
                  <p className="text-primary font-semibold mb-3">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
