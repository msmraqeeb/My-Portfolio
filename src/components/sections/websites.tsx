'use client';
import Image from 'next/image';
import Link from 'next/link';
import { portfolio } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '../ui/card';

export default function Websites() {
    const webDesignProjects = portfolio.filter(item => item.category === 'Web Design');

  return (
    <section id="websites">
      <div className="section-title">
        <p>Portfolio</p>
        <h2>My Websites</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {webDesignProjects.map((item) => {
          const itemImage = PlaceHolderImages.find((img) => img.id === item.image);
          return (
            <Card key={item.title} className="group relative rounded-lg overflow-hidden border">
              <Link href={item.link} target='_blank' className="block">
                <div className="overflow-hidden">
                  {itemImage && (
                    <Image
                      src={itemImage.imageUrl}
                      alt={item.title}
                      width={600}
                      height={450}
                      className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={itemImage.imageHint}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.link}</p>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
