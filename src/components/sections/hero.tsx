import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import TypingAnimation from '@/components/typing-animation';

const heroImage = { imageUrl: '/images/Shakil-Mahmud.jpeg', description: 'Shakil Mahmud' };

export default function Hero() {
  return (
    <section id="home" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[280px] h-[420px] sm:w-[350px] sm:h-[525px] bg-primary/20 rounded-3xl transform -rotate-12 transition-all duration-300"></div>
            <div className="absolute w-[280px] h-[420px] sm:w-[350px] sm:h-[525px] bg-secondary rounded-3xl transform rotate-12 transition-all duration-300"></div>
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={320}
                height={480}
                className="rounded-2xl object-cover aspect-[3/4] z-10 shadow-2xl"
                priority
              />
            )}
          </div>
          <div className="flex flex-col items-start space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
              Software Engineer
            </Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-headline">
                Hello! 👋 I Am <br />
                <span className="text-primary">Shakil Mahmud</span>
              </h1>
              <TypingAnimation />
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-lg">
              I'm a passionate and creative full-stack developer, dedicated to
              building beautiful and functional web experiences. I can boost your
              business to the next success level through social media marketing.
              You can hire me for your voice artist in your advertisement. A
              whole package I can offer you.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
