import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building2 } from "lucide-react";

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

const experience = [
  {
    period: "Jan 2025 - Present",
    title: "Head of Creative Lead",
    company: "Regnum Resource Ltd.",
    description: [
      "Directed and managed the overall creative vision and output across all digital, print, and broadcast media.",
      "Lead brainstorming sessions and creative strategy meetings to develop original content ideas aligned with brand and business goals.",
      "Supervised the creation of video, audio, graphic, and written content for marketing campaigns, social media, and e-commerce platforms."
    ],
  },
  {
    period: "Mar 2024 - Dec 2024",
    title: "RJ & News Anchor",
    company: "Capital FM 94.8",
    description: [
        "Hosted live radio programs with engaging on-air presence, delivering music, talk segments, and audience interactions in a dynamic and professional manner.",
        "Anchored news bulletins, breaking news updates, and special reports with clarity, accuracy, and journalistic integrity.",
        "Researched, scripted, and presented current affairs, feature stories, and special segments tailored to target audiences."
    ]
  },
  {
    period: "Sep 2020 - Dec 2024",
    title: "IT & E-Commerce Project Manager",
    company: "Radiant International",
    description: [
      "Manage E-commerce website (KidsParadise.com.bd) & lead the team of E-commerce",
      "SEO, Facebook Content writing & Digital Marketing on Facebook by product/post promotion, making product banner promotion etc.",
      "Providing overall support to E-commerce site"
    ]
  }
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
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-1 gap-16">
          <div>
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
          
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Building2 className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold font-headline">My Experience</h3>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-[35px] top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
              {experience.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-transparent"></div>
                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card ring-4 ring-primary">
                        <Building2 className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow rounded-lg bg-card p-6 shadow-sm">
                    <p className="mb-2 text-sm text-muted-foreground">{item.period}</p>
                    <h4 className="text-xl font-bold font-headline mb-1">{item.title}</h4>
                    <p className="text-primary font-semibold mb-3">{item.company}</p>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      {Array.isArray(item.description) ? (
                        item.description.map((desc, i) => <li key={i}>{desc}</li>)
                      ) : (
                        <li>{item.description}</li>
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
