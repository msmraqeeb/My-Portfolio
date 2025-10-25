import { resume } from '@/lib/data';
import { GraduationCap, Briefcase } from 'lucide-react';

const ResumeItem = ({ year, title, institution, description }: { year: string, title: string, institution: string, description: string }) => (
  <div className="relative pl-8 py-2 border-l-2 border-primary/20">
    <div className="absolute -left-[9px] top-3 h-4 w-4 rounded-full bg-primary border-2 border-background"></div>
    <div className="mb-1">
      <span className="inline-block text-sm text-muted-foreground">{year}</span>
    </div>
    <h3 className="text-xl font-semibold">
      {title}
    </h3>
    <p className="text-primary mb-2">{institution}</p>
    <p className="text-muted-foreground mt-2">{description}</p>
  </div>
);

export default function Resume() {
  return (
    <section id="resume">
      <div className="section-title">
        <p>Resume</p>
        <h2>A summary of My Resume</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
             <GraduationCap className="h-7 w-7 text-primary" /> My Education
          </h3>
          <div className="space-y-8">
            {resume.education.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="h-7 w-7 text-primary" /> My Experience
          </h3>
          <div className="space-y-8">
            {resume.experience.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
