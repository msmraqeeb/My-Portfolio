'use client';
import Image from 'next/image';
import { profile } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { Hand } from 'lucide-react';

export default function Hero() {
  const profileImage = PlaceHolderImages.find((img) => img.id === profile.image);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
       <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background"></div>
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="order-2 md:order-2 text-center md:text-left">
                <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-semibold mb-4">
                  Software Engineer
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight flex items-center gap-4 justify-center md:justify-start">
                  Hello! <Hand className="h-9 w-9 text-yellow-400 rotate-[20deg]" /> I Am
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary mt-2">
                    {profile.name}
                </h2>
                
                <div className="mt-4 text-xl md:text-2xl font-semibold text-muted-foreground flex items-center justify-center md:justify-start gap-2">
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
                
                <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base text-muted-foreground">
                    {profile.bio}
                </p>
                
                <div className="mt-8 flex justify-center md:justify-start items-center gap-4">
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </div>
            </div>
             <div className="order-1 md:order-1 flex justify-center items-center h-full">
                {profileImage && (
                  <div className="relative w-[300px] h-[420px] sm:w-[350px] sm:h-[490px] lg:w-[400px] lg:h-[560px]">
                    <div className="absolute inset-0 bg-primary/80 rounded-3xl -rotate-6 transform"></div>
                     <div className="absolute inset-0 bg-card rounded-3xl rotate-6 transform"></div>
                    <Image
                        src={profileImage.imageUrl}
                        alt={profile.name}
                        fill
                        className="rounded-3xl object-cover border-8 border-background shadow-2xl relative z-10"
                        priority
                        data-ai-hint={profileImage.imageHint}
                    />
                  </div>
                )}
            </div>
          </div>
      </div>
    </section>
  );
}
