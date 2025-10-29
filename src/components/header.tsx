'use client';

import Link from 'next/link';
import { Home, User, Briefcase, Mail, Sun, Moon, Menu, X, Code, Award, Github, Linkedin, Facebook, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from './ui/sheet';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { profile } from '@/lib/data';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: Code },
  { href: '#resume', label: 'Resume', icon: Award },
  { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '/websites', label: 'Websites', icon: Globe },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/msmraqeeb' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/msmraqeeb/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/shakilmahmud.rj/' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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

      // Check if scrolled to the bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            currentSection = 'contact';
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavContent = ({isMobile = false}) => (
    <>
      {isMobile && <div className={cn("text-center mb-8")}>
        <Link href="/" className="inline-block text-2xl font-bold text-primary">
          {profile.name}
        </Link>
      </div>}

      <nav className="flex flex-col items-center gap-4 px-2">
        {navLinks.map((link) => {
            const isActive = activeSection === (link.href.startsWith('#') ? link.href.substring(1) : new URL(link.href, 'http://localhost').pathname.substring(1));
            return (
                <Button 
                    asChild 
                    variant={isActive ? 'default' : 'ghost'} 
                    className={cn(
                        "rounded-full transition-all duration-300 ease-in-out flex items-center justify-center",
                        isActive ? 'w-32' : 'w-12 h-12',
                        !isMobile && 'hover:bg-primary/10'
                    )}
                    key={link.label}>
                    <Link
                        href={link.href}
                        title={link.label}
                    >
                        <link.icon className={cn("h-6 w-6 transition-all", { "mr-2": isActive })} />
                        {isActive && <span>{link.label}</span>}
                    </Link>
                </Button>
            )
        })}
      </nav>
      
      { isMobile && <div className="p-4 mt-8 border-t border-border">
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="outline" size="icon" className="rounded-full" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      }
    </>
  );

  return (
    <>
      {/* Desktop Floating Nav */}
       <header className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-card/50 backdrop-blur-sm border border-border p-3 rounded-full">
            <NavContent />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Shakil Mahmud
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] bg-card p-0">
                  <SheetHeader className="p-4 border-b">
                     <SheetTitle className="text-left text-lg font-semibold">Menu</SheetTitle>
                     <SheetClose asChild>
                        <Button variant="ghost" size="icon" className="absolute right-2 top-2">
                           <X className="h-6 w-6" />
                        </Button>
                     </SheetClose>
                  </SheetHeader>
                  <div className="p-4">
                    <NavContent isMobile={true} />
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
