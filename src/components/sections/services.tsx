import { Badge } from "@/components/ui/badge";
import { LayoutGrid, CodeXml, BarChart, Megaphone, Paintbrush, Clapperboard } from "lucide-react";

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
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Business Analysis",
    description: "Analyzing business needs and providing data-driven insights to improve processes and strategies.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: "Digital Marketing",
    description: "Implementing effective online marketing strategies to boost brand visibility and engagement.",
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-primary" />,
    title: "Brand Identity",
    description: "Designing unique and memorable brand identities, logos, and marketing materials.",
  },
  {
    icon: <Clapperboard className="h-8 w-8 text-primary" />,
    title: "Video Editing",
    description: "Producing professional and compelling video content for various marketing needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
            WHAT I DO?
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            MY SERVICES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">{service.icon}</div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold font-headline mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
