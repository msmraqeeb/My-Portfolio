import Link from 'next/link';
import { BrainCircuit, Briefcase, Code, Home, Mail } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#contact', label: 'Contact', icon: Mail },
  { href: '/curate', label: 'AI Curator', icon: BrainCircuit },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">Artisan Portfolio</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary text-foreground/80 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0 glass-card">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Artisan Portfolio</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-muted-foreground hover:text-primary text-lg"
                    >
                        {link.label}
                    </Link>
                    ))}
                </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
