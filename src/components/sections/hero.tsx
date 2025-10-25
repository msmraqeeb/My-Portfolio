'use client';
import Image from 'next/image';
import { profile } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const profileImage = PlaceHolderImages.find((img) => img.id === profile.image);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {profileImage && (
          <Image
            src={profileImage.imageUrl}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>
      <div className="container relative z-10">
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Hi, I am <span className="text-primary">{profile.name}</span>
            </h1>
            <div className="mt-4 text-2xl md:text-3xl font-semibold text-muted-foreground flex items-center justify-center lg:justify-center gap-2">
              I am a
              <span className="text-primary">
                <Typewriter
                  options={{
                    strings: profile.roles,
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-primary",
                    cursorClassName: "text-primary typing-cursor"
                  }}
                />
              </span>
            </div>
            
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              {profile.bio}
            </p>
            
            <div className="mt-8 flex justify-center items-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#portfolio">My Work</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="/alex-doe-cv.pdf" download>Download CV</a>
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
}
