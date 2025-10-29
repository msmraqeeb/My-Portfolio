'use client';

import { profile } from '@/lib/data';
import { Button } from '../ui/button';

export default function About() {
  return (
    <section id="about">
      <div className="section-title">
        <p>About Me</p>
        <h2>Know Me More</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2">
          <h3 className="text-xl font-bold mb-4">
            I'm <span className="text-primary">{profile.name}</span>, a Living Creative Leader
          </h3>
          <p className="text-muted-foreground mb-6 text-base">
            {profile.about.description}
          </p>
        </div>
        <div className="lg:col-span-1 space-y-4 text-base">
          {profile.about.details.map((detail) => (
            <div key={detail.label} className="border-b border-border pb-2">
              <span className="font-bold">{detail.label}:</span>
              <span className="text-muted-foreground ml-2">{detail.value}</span>
            </div>
          ))}
          <Button asChild size="lg" className="rounded-full w-full mt-6">
            <a href="/home/user/studio/Shakil-Mahmud-CV.pdf" download>Download CV</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
