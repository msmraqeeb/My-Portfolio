'use client';
import Image from 'next/image';
import Link from 'next/link';
import { portfolio } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const nonAppPortfolio = useMemo(() => portfolio.filter(p => p.category !== 'Tools'), []);

  const filters = useMemo(() => {
    const allCategories = nonAppPortfolio.map(item => item.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, [nonAppPortfolio]);

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === 'All') {
      return nonAppPortfolio;
    }
    return nonAppPortfolio.filter(item => item.category === activeFilter);
  }, [activeFilter, nonAppPortfolio]);

  return (
    <section id="portfolio">
      <div className="section-title">
        <p>Portfolio</p>        
        <h2>My Work</h2>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-10">
        {filters.map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? 'default' : 'outline'}
            onClick={() => setActiveFilter(filter)}
            className={cn(
                "rounded-full capitalize transition-all text-xs",
                activeFilter === filter ? 'bg-primary text-primary-foreground' : 'bg-card'
            )}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPortfolio.map((item) => {
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
