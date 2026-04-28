"use client";

import Link from 'next/link';
import { Home, User, Briefcase, Award, Code, Wrench, Mail, HardHat } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

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
  const lenis = useLenis();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, {
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

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
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center gap-4 rounded-full glass-card p-3 shadow-2xl border-white/5">
          {menuItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ${activeSection === item.href
                      ? 'bg-white text-black scale-110 shadow-lg'
                      : 'hover:bg-white/10 hover:text-white text-muted-foreground'
                    }`}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-white text-black font-bold">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
