import Image from 'next/image';
import { profile } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Hero() {
  const profileImage = PlaceHolderImages.find((img) => img.id === profile.image);

  return (
    <section id="about" className="container">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 items-center">
        <div className="flex justify-center md:order-last">
          <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-primary/10 shadow-lg">
            {profileImage && (
              <AvatarImage
                src={profileImage.imageUrl}
                alt={profile.name}
                data-ai-hint={profileImage.imageHint}
              />
            )}
            <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="col-span-2 text-center md:text-left">
          <span className="text-primary font-semibold">Hello, I'm</span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground/80 to-primary">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-2xl font-medium text-muted-foreground tracking-tight">
            {profile.title}
          </h2>
          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
            {profile.bio}
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
