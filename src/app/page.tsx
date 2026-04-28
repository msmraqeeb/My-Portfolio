import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Resume from '@/components/sections/resume';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Tools from '@/components/sections/tools';
import Contact from '@/components/sections/contact';
import LeftSidebar from '@/components/left-sidebar';
import ScrollReveal from '@/components/scroll-reveal';

export default function Home() {
  return (
    <div className="min-h-screen relative selection:bg-primary/30">
      {/* Background Video */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/video3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay to ensure text readability */}
      </div>
      
      <div className="flex flex-col lg:flex-row min-h-screen relative">
        
        {/* Left Fixed Sidebar Column */}
        <aside className="w-full lg:w-[450px] lg:fixed lg:left-0 lg:top-0 lg:h-screen p-4 lg:p-8 z-40">
          <LeftSidebar />
        </aside>

        {/* Right Scrollable Content Column */}
        <main className="flex-1 w-full lg:ml-[450px] px-4 md:px-8 lg:px-16 space-y-20 lg:space-y-40 pb-20">
          <Hero />
          <About />
          <Services />
          <Resume />
          <Skills />
          <Projects />
          <Tools />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
