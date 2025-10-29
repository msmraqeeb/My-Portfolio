import { resume } from '@/lib/data';
import { GraduationCap, Briefcase } from 'lucide-react';

const ResumeItem = ({ icon: Icon, year, title, institution, description }: { icon: React.ElementType, year: string, title: string, institution: string, description: string | string[] }) => (
  <div className="group relative flex gap-x-8">
      <div className="relative">
          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card border-2 border-primary text-primary">
              <Icon className="h-5 w-5" />
          </div>
          <div className="absolute top-10 left-1/2 w-px h-full bg-border group-last:hidden"></div>
      </div>
      <div className="flex-1 rounded-lg bg-card p-5 transition-transform duration-300 group-hover:scale-[1.02] shadow-sm border">
          <p className="text-xs text-muted-foreground mb-2">{year}</p>
          <h3 className="text-lg font-bold mb-1">{title}</h3>
          <p className="text-primary font-medium mb-3 text-sm">{institution}</p>
          {Array.isArray(description) ? (
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
      </div>
  </div>
);

export default function Resume() {
  return (
    <section id="resume">
      <div className="section-title">
        <p>Resume</p>
        <h2>A summary of My Resume</h2>
      </div>

      <div className="grid grid-cols-1 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
             <GraduationCap className="h-6 w-6 text-primary" /> My Education
          </h3>
          <div className="space-y-8">
            {resume.education.map((item, index) => (
              <ResumeItem key={index} icon={GraduationCap} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" /> My Experience
          </h3>
          <div className="space-y-8">
            {resume.experience.map((item, index) => (
              <ResumeItem key={index} icon={Briefcase} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
