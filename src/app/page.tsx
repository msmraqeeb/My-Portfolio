import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Resume from '@/components/sections/resume';
import Projects from '@/components/sections/projects';
import Tools from '@/components/sections/tools';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container px-4 sm:px-6 lg:px-8">
        <About />
        <Services />
        <Resume />
        <Projects />
        <Tools />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
