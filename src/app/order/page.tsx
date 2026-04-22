'use client';

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";
import { ProductCard } from "@/components/ui/ProductCard";
import { useCartStore } from "@/lib/store";

export default function OrderPage() {
  const { addItem } = useCartStore();

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Our Menu</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Order our signature cakes and pastries directly to your doorstep.</p>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StaggerItem>
          <ProductCard 
            title="Velvet Raspberry Rose" 
            description="Layers of delicate vanilla sponge with a vibrant raspberry coulis and soft rose-infused mascarpone cream."
            price={12.50}
            imageUrl="/images/custom_cake.png"
            onAddToCart={() => addItem({ id: '1', name: 'Velvet Raspberry Rose', price: 12.50, quantity: 1, imageUrl: '/images/custom_cake.png' })}
          />
        </StaggerItem>
        <StaggerItem>
          <ProductCard 
            title="Midnight Chocolate Ganache" 
            description="Intense dark chocolate mousse with a crunchy hazelnut praline base and a mirror-like ganache glaze."
            price={14.00}
            imageUrl="/images/hero_image.png"
            onAddToCart={() => addItem({ id: '2', name: 'Midnight Chocolate Ganache', price: 14.00, quantity: 1, imageUrl: '/images/hero_image.png' })}
          />
        </StaggerItem>
        <StaggerItem>
          <ProductCard 
            title="Pistachio Éclair" 
            description="Classic choux pastry generously filled with a rich roasted pistachio cream and finished with crushed nuts."
            price={8.50}
            imageUrl="/images/custom_cake.png"
            onAddToCart={() => addItem({ id: '3', name: 'Pistachio Éclair', price: 8.50, quantity: 1, imageUrl: '/images/custom_cake.png' })}
          />
        </StaggerItem>
      </StaggerContainer>
    </main>
  );
}
