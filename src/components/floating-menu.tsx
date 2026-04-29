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
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:bottom-auto lg:left-auto lg:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 z-50 w-[90%] max-w-fit lg:w-auto">
        <div className="flex flex-row lg:flex-col items-center gap-2 sm:gap-4 rounded-full glass-card p-2 sm:p-3 shadow-2xl border-white/5 overflow-x-auto no-scrollbar max-w-full">
          {menuItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-center h-10 w-10 lg:h-12 lg:w-12 rounded-full transition-all duration-300 flex-shrink-0 [&>svg]:h-5 [&>svg]:w-5 lg:[&>svg]:h-6 lg:[&>svg]:w-6 ${activeSection === item.href
                      ? 'bg-white text-black scale-110 shadow-lg'
                      : 'hover:bg-white/10 hover:text-white text-muted-foreground'
                    }`}
                >
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="top" className="lg:hidden bg-white text-black font-bold">
                <p>{item.label}</p>
              </TooltipContent>
              <TooltipContent side="left" className="hidden lg:block bg-white text-black font-bold">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
