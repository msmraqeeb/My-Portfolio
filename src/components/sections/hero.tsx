import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Creative Developer & Designer
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Building beautiful, functional, and user-centric digital experiences.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
