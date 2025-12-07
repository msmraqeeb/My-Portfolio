import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Resume from '@/components/sections/resume';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Tools from '@/components/sections/tools';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Resume />
        <Skills />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
