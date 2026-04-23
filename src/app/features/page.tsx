'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';
import { Card } from '@/components/ui/Card';

export default function FeaturesPage() {
  const features = [
    {
      title: "Bespoke Masterpieces",
      desc: "Edible art tailored to your exact specifications. Every tier is a canvas of flavor and structural elegance.",
      icon: "✨"
    },
    {
      title: "Fresh Ingredients",
      desc: "We source only the finest seasonal produce, single-origin chocolates, and organic dairy for unparalleled depth of flavor.",
      icon: "🍓"
    },
    {
      title: "Fast, Pristine Delivery",
      desc: "Our temperature-controlled courier network ensures your delicate pastries arrive in flawless condition.",
      icon: "🚚"
    },
    {
      title: "Premium Quality",
      desc: "Uncompromising attention to detail. Classical French techniques combined with modern innovation.",
      icon: "🏅"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8">
            Our Craft
          </h1>
          <p className="text-xl text-on-surface-variant max-w-3xl mx-auto font-light leading-relaxed">
            Discover the pillars of our craft. From hand-selected artisanal ingredients to bespoke creations delivered with care, experience the pinnacle of luxury patisserie.
          </p>
        </FadeIn>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <FadeIn delay={0.2} className="relative h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero_image.png"
            alt="Artisanal Bakery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-12 left-12">
            <h2 className="text-3xl font-serif text-white font-bold drop-shadow-md">Elevating the everyday through the art of pastry.</h2>
          </div>
        </FadeIn>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <Card className="p-10 h-full flex flex-col items-start gap-6 hover:translate-y-[-8px] transition-all duration-300">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-lg">{feature.desc}</p>
                  </div>
                  {feature.title === "Fast, Pristine Delivery" && (
                    <Link 
                      href="/shipping" 
                      className="mt-auto flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all"
                    >
                      View Delivery Zones <span>→</span>
                    </Link>
                  )}
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 italic">
            Join us in celebrating life&apos;s sweetest moments.
          </h2>
          <Link 
            href="/order" 
            className="inline-block bg-primary text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-primary-container transition-colors shadow-xl"
          >
            Explore Our Menu
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
