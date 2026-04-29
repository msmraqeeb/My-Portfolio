import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import TextReveal from "@/components/text-reveal";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
            ABOUT ME
          </Badge>
          <TextReveal 
            as="h2"
            text="KNOW ME MORE"
            className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline justify-center"
          />
          <TextReveal 
            text="Here's a bit about my background and what motivates me."
            className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed justify-center"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12 items-center">
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <TextReveal 
              as="h3"
              text="I'm Shakil Mahmud, a Living Creative Leader"
              className="text-2xl sm:text-3xl font-bold"
            />
            <TextReveal 
              text="I am a passionate developer with a knack for creating elegant, efficient, and user-friendly digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life from concept to deployment. My goal is to always build products that provide pixel-perfect, performant experiences. By hiring me you can utilize my multi section skills so that your team will boost than before." 
              className="text-base sm:text-lg" 
            />
          </div>
          <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start">
            <ul className="space-y-4 text-base sm:text-lg w-full">
              <li className="border-b border-border pb-2 flex flex-wrap gap-2">
                <span className="font-semibold">Name:</span> 
                <TextReveal text="Shakil Mahmud" as="span" />
              </li>
              <li className="border-b border-border pb-2 flex flex-wrap gap-2">
                <span className="font-semibold">Email:</span> 
                <TextReveal text="msmraqeeb@gmail.com" as="span" className="text-primary hover:underline" />
              </li>
              <li className="flex flex-wrap gap-2">
                <span className="font-semibold">From:</span> 
                <TextReveal text="Dhaka, Bangladesh" as="span" />
              </li>
            </ul>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              <a href="/Md._Shakil_Mahmud_CV.pdf" download="Md._Shakil_Mahmud_CV.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
