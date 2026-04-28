import { Badge } from "@/components/ui/badge";
import { LayoutGrid, CodeXml, BarChart, Megaphone, Pencil, Clapperboard, PenTool, ShoppingBag, Mic } from "lucide-react";
import TextReveal from "@/components/text-reveal";

const services = [
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    title: "Web Design",
    description: "Crafting visually stunning and user-friendly website designs that leave a lasting impression.",
  },
  {
    icon: <CodeXml className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites using modern technologies.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Graphics Design",
    description: "Creating compelling visual concepts that communicate ideas to inspire, inform, and captivate consumers.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Digital Marketing",
    description: "Implementing effective online marketing strategies to boost brand visibility and engagement.",
  },
  {
    icon: <Pencil className="h-8 w-8 text-primary" />,
    title: "Content Creation",
    description: "Developing engaging and high-quality content tailored to your target audience to drive growth and connection.",
  },
  {
    icon: <Clapperboard className="h-8 w-8 text-primary" />,
    title: "Video Editing",
    description: "Producing professional and compelling video content for various marketing needs.",
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "Full E-Commerce Solution",
    description: "Developing comprehensive, end-to-end online stores with secure payment gateways, inventory management, and optimal user experiences.",
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: "Voice Over",
    description: "Providing professional voice over services with clear, engaging audio for commercials, narrations, and promotional content.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
            WHAT I DO?
          </Badge>
          <TextReveal 
            as="h2"
            text="MY SERVICES"
            className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline justify-center"
          />
          <TextReveal 
            text="I provide a wide range of creative and technical services to help your business succeed." 
            className="text-center justify-center max-w-[900px] mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">{service.icon}</div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold font-headline mb-2">{service.title}</h3>
                <TextReveal text={service.description} className="text-sm md:text-base" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
