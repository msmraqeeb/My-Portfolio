import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AiOptimizer from '@/components/ai-optimizer';

const aboutImage = PlaceHolderImages.find(img => img.id === 'avatar');
const bio = "Hello! I'm a passionate and results-oriented developer with a keen eye for design. With a background in both front-end and back-end technologies, I specialize in crafting seamless and engaging web applications from concept to deployment. My philosophy is to build products that are not only powerful and scalable but also intuitive and enjoyable for the end-user. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square border-4 border-primary shadow-lg"
              />
            )}
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                About Me
              </h2>
              <AiOptimizer initialContent={bio} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
