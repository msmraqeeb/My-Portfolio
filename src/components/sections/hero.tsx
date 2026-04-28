import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TypingAnimation from '@/components/typing-animation';
import { Sparkles, ArrowRight } from 'lucide-react';
import TextReveal from '@/components/text-reveal';

export default function Hero() {
  return (
    <section id="home" className="w-full pt-12 lg:pt-24">
      <div className="flex flex-col items-start space-y-10">
        {/* Intro Label */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-muted-foreground text-sm font-medium">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>Introduction</span>
        </div>

        {/* Headline */}
        <div className="space-y-6 max-w-3xl">
          <TextReveal 
            as="h1"
            text="Hello! 👋 I Am Shakil Mahmud"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] font-headline"
          />
          <div className="flex flex-col space-y-4">
             <TypingAnimation />
             <TextReveal 
               text="My passion lies in crafting elegant, straightforward digital experiences. It's a love for simplicity, pure and simple." 
               className="text-xl leading-relaxed max-w-xl" 
             />
          </div>
        </div>

        {/* Badges/Skills */}
        <div className="flex flex-wrap gap-3">
          {["Software Engineer", "Full Stack Developer", "Next.js Specialist", "UI/UX Design", "Brand Identity"].map((skill, i) => (
            <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-6 py-2 rounded-full text-sm font-medium transition-all">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl pt-10">
          <div className="glass-card p-10 rounded-[2.5rem] space-y-4 group hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-2 text-muted-foreground">
               <span className="w-2 h-2 bg-primary rounded-full" />
               <span className="text-sm font-medium uppercase tracking-wider">Years of Experience</span>
            </div>
            <div className="flex items-baseline gap-1">
               <h3 className="text-7xl font-bold font-headline group-hover:text-primary transition-colors">12</h3>
               <span className="text-4xl font-bold text-primary">+</span>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[2.5rem] space-y-4 group hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-2 text-muted-foreground">
               <span className="w-2 h-2 bg-primary rounded-full" />
               <span className="text-sm font-medium uppercase tracking-wider">Success Rate</span>
            </div>
            <div className="flex items-baseline gap-1">
               <h3 className="text-7xl font-bold font-headline group-hover:text-primary transition-colors">98</h3>
               <span className="text-4xl font-bold text-primary">%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
