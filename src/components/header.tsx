'use client';

import Link from 'next/link';
import { Home, User, Briefcase, Mail, Sun, Moon, Menu, X, Code, Award, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { profile } from '@/lib/data';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#services', label: 'Services', icon: Code },
  { href: '#resume', label: 'Resume', icon: Award },
  { href: '#portfolio', label: 'Portfolio', icon: Briefcase },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      const scrollPosition = window.scrollY + 100;

      let currentSection = 'home';
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          currentSection = section.id;
          break;
        }
      }
      // Check if scrolled to the bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        currentSection = 'contact';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = ({isMobile = false}) => (
    <>
      <div className={cn("text-center", {"mb-8": !isMobile})}>
        <Link href="/" className="inline-block text-2xl font-bold text-primary mb-8">
          {profile.name}
        </Link>
      </div>

      <nav className="flex flex-col items-start gap-4 px-4">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              'flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary w-full p-2 rounded-md',
              activeSection === link.href.substring(1) ? 'text-primary bg-primary/10' : 'text-muted-foreground'
            )}
          >
            <link.icon className="h-5 w-5" />
            <span>{link.label}</span>
          </Link>
        ))}
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
      {/* Desktop Sidebar */}
      <header className="fixed top-0 left-0 z-50 h-full w-72 hidden lg:flex flex-col justify-between p-6 bg-card border-r">
        <div>
          <NavContent />
        </div>
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button key={social.name} variant="outline" size="icon" className="rounded-full" asChild>
                  <Link href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Shakil Mahmud</p>
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
                  <div className="p-4 flex justify-end">
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                       </Button>
                    </SheetClose>
                  </div>
                  <NavContent isMobile={true} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
