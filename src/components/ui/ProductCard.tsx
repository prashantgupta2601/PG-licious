import React from 'react';
import Image from 'next/image';
import { Card } from './Card';
import { Button } from './Button';

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  onAddToCart?: () => void;
};

export function ProductCard({ title, description, price, imageUrl, onAddToCart }: ProductCardProps) {
  return (
    <Card className="flex flex-col group transition-transform duration-300 hover:-translate-y-1">
      <div className="relative w-full aspect-square p-4 pb-0 overflow-hidden">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-serif text-xl font-bold text-primary">{title}</h3>
          <span className="font-sans font-bold text-lg text-secondary">${price.toFixed(2)}</span>
        </div>
        <p className="text-on-surface-variant text-sm mb-6 flex-grow">{description}</p>
        <Button variant="glass" className="w-full" onClick={onAddToCart}>Add to Order</Button>
      </div>
    </Card>
  );
}
