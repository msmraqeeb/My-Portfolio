'use client';
import Image from 'next/image';
import Link from 'next/link';
import { portfolio } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '../ui/card';
import { useMemo } from 'react';

export default function Tools() {
  const appProjects = useMemo(() => {
    return portfolio.filter(item => item.category === 'App');
  }, []);

  return (
    <section id="tools">
      <div className="section-title">
        <p>My Apps</p>
        <h2>My Featured Applications</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
        {appProjects.map((item) => {
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
                  <h3 className="font-bold text-base">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
