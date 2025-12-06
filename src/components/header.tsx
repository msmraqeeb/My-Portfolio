'use client';
import Link from 'next/link';
import { Home, User, Briefcase, Sun, Moon, Code, Award, Wrench, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: Code },
  { href: '#resume', label: 'Resume', icon: Award },
  { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '#tools', label: 'Tools', icon: Wrench },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      const sections = navLinks
        .map(link => (link.href.startsWith('#') ? document.getElementById(link.href.substring(1)) : null))
        .filter(Boolean);
        
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection = 'home';
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          currentSection = section.id;
          break;
        }
      }
      
      const homeElement = document.getElementById('home');
      if (homeElement && window.scrollY < homeElement.offsetTop) {
        currentSection = 'home';
      }

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        const lastSectionId = sections[sections.length - 1]?.id;
        if (lastSectionId) {
            const lastSectionElement = document.getElementById(lastSectionId);
            if(lastSectionElement && window.scrollY + window.innerHeight >= lastSectionElement.offsetTop) {
                 currentSection = lastSectionId;
            }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  const NavContent = () => (
      <nav className="flex items-center gap-1 sm:gap-2">
        {navLinks.map((link) => {
            const isActive = activeSection === (link.href.startsWith('#') ? link.href.substring(1) : '');
            return (
                <div key={link.label} className="relative flex flex-col items-center gap-1">
                    <Button 
                        asChild 
                        variant='ghost'
                        size="icon"
                        className={cn(
                            "relative w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 ease-in-out",
                            isActive ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-primary/20",
                        )}
                    >
                        <Link
                            href={link.href}
                            title={link.label}
                        >
                            <link.icon className="h-5 w-5" />
                        </Link>
                    </Button>
                     {isActive && <div className="absolute -bottom-2 w-1.5 h-1.5 bg-primary rounded-full"></div>}
                </div>
            )
        })}
      </nav>
  );

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full w-12 h-12 bg-card/60 backdrop-blur-xl border border-white/10"
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

       <header className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-card p-2 rounded-full">
            <NavContent />
        </div>
      </header>
    </>
  );
}
