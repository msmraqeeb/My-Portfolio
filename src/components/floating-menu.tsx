"use client";

import Link from 'next/link';
import { Home, User, Briefcase, Award, Code, Wrench, Mail, HardHat } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const menuItems = [
  { href: '#home', label: 'Home', icon: <Home className="h-6 w-6" /> },
  { href: '#about', label: 'About', icon: <User className="h-6 w-6" /> },
  { href: '#services', label: 'Services', icon: <Briefcase className="h-6 w-6" /> },
  { href: '#resume', label: 'Resume', icon: <Award className="h-6 w-6" /> },
  { href: '#skills', label: 'Skills', icon: <Code className="h-6 w-6" /> },
  { href: '#projects', label: 'Portfolio', icon: <Wrench className="h-6 w-6" /> },
  { href: '#tools', label: 'My Tools', icon: <HardHat className="h-6 w-6" /> },
  { href: '#contact', label: 'Contact', icon: <Mail className="h-6 w-6" /> },
];

export default function FloatingMenu() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname !== '/') {
    return null;
  }

  return (
    <TooltipProvider>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 rounded-full bg-card border p-2 shadow-lg">
          {menuItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`flex items-center justify-center h-10 w-10 rounded-full transition-colors ${activeSection === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent hover:text-accent-foreground text-muted-foreground'
                    }`}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
