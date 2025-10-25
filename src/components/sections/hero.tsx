import Image from 'next/image';
import { profile } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const profileImage = PlaceHolderImages.find((img) => img.id === profile.image);

  return (
    <section id="about" className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-last">
          <div className="relative animate-float max-w-xs px-2.5 lg:max-w-none mx-auto">
             <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-primary/20 shadow-lg mx-auto">
                {profileImage && (
                <AvatarImage
                    src={profileImage.imageUrl}
                    alt={profile.name}
                    data-ai-hint={profileImage.imageHint}
                />
                )}
                <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl font-headline shimmer-text">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-muted-foreground tracking-tight">
            {profile.title}
          </h2>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
            {profile.bio}
          </p>
          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">
                View My Work <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
