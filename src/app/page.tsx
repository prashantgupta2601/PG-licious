'use client';
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { useCartStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { addItem } = useCartStore();

  return (
    <main className="min-h-screen pt-20">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface">
          <Image 
            src="/images/hero_image.png" 
            alt="PG-licious luxury bakery" 
            fill 
            className="object-cover opacity-60 mix-blend-multiply" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight drop-shadow-sm">
              Indulgent <span className="text-secondary">Sophistication</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-xl md:text-2xl text-primary font-medium mb-10 max-w-2xl mx-auto drop-shadow-sm bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              Experience the finest artisanal pastries and bespoke cakes crafted with passion and elegance.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex justify-center gap-4">
            <Link href="/order">
              <Button size="lg">Explore Menu</Button>
            </Link>
            <Link href="/custom-cake">
              <Button variant="glass" size="lg">Design Custom Cake</Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Signature Creations</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Discover our most loved delicate pastries and luxurious cakes, baked fresh daily.</p>
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
      </section>
    </main>
  );
}
