import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none py-1 px-3">
            ABOUT ME
          </Badge>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
            KNOW ME MORE
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here's a bit about my background and what motivates me.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12 items-center">
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">
              I'm <span className="text-primary">Shakil Mahmud</span>, a Living Creative Leader
            </h3>
            <p className="text-muted-foreground md:text-lg">
              I am a passionate developer with a knack for creating elegant, efficient, and user-friendly digital experiences. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life from concept to deployment. My goal is to always build products that provide pixel-perfect, performant experiences. By hiring me you can utilize my multi section skills so that your team will boost than before.
            </p>
          </div>
          <div className="lg:col-span-2 space-y-6 flex flex-col items-center lg:items-start">
            <ul className="space-y-4 text-lg">
              <li className="border-b border-border pb-2">
                <span className="font-semibold">Name:</span> Shakil Mahmud
              </li>
              <li className="border-b border-border pb-2">
                <span className="font-semibold">Email:</span> <a href="mailto:msmraqeeb@gmail.com" className="text-primary hover:underline">msmraqeeb@gmail.com</a>
              </li>
              <li>
                <span className="font-semibold">From:</span> Dhaka, Bangladesh
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
