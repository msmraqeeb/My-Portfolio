"use client";

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Github, Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LeftSidebar() {
  return (
    <div className="w-full h-full flex flex-col gap-8 p-8 glass-card rounded-[2.5rem] overflow-hidden relative group border-white/5">
      {/* Profile Image Section */}
      <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group/img">
        <Image
          src="/images/Shakil-Mahmud.jpeg"
          alt="Shakil Mahmud"
          fill
          className="object-cover object-top transition-all duration-700 scale-105 group-hover/img:scale-100 group-hover/img:grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        
        {/* Signature Name */}
        <div className="absolute bottom-6 left-8 right-8 text-center sm:text-left">
          <h2 className="text-4xl font-signature text-white drop-shadow-2xl whitespace-nowrap">
            Shakil Mahmud
          </h2>
        </div>
      </div>

      {/* Contact/Bio Section */}
      <div className="space-y-6 flex-grow">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white tracking-tight break-all">msmraqeeb@gmail.com</h3>
          <p className="text-muted-foreground flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-primary" />
            Based in Dhaka, Bangladesh
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4">
          {[
            { icon: <Github className="h-6 w-6" />, href: "https://github.com/msmraqeeb" },
            { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/msmraqeeb/" },
            { icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/shakilmahmud.rj/" },
            { icon: <Instagram className="h-6 w-6" />, href: "https://instagram.com/rj_shakil.mahmud" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all text-muted-foreground hover:text-primary shadow-lg"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Action Button */}
      <div className="mt-auto">
        <Button asChild size="lg" className="w-full py-8 rounded-full bg-[#111111] border border-white/10 text-white hover:bg-white/5 group/btn transition-all duration-300 shadow-none">
          <Link href="#contact" className="flex items-center justify-between w-full px-4 font-medium text-lg">
            <span>Get Started</span>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center transition-transform group-hover/btn:rotate-45">
               <ArrowUpRight className="h-6 w-6 text-black" />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
}
