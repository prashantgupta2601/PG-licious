'use client';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function PricingPage() {
  const tiers = [
    {
      name: "Regular Cakes",
      price: "From $45",
      desc: "Perfect for a sophisticated afternoon tea or a casual gathering. Simple, elegant, and uncompromisingly delicious.",
      features: ["Classic signature flavors", "Standard elegant finish", "48-hour notice required"],
      cta: "Order Now",
      highlight: false
    },
    {
      name: "Birthday Cakes",
      price: "From $85",
      desc: "Elevate your milestones with a creation that is as unique as the celebrant. Detailed piping and bespoke color palettes.",
      features: ["Custom flavor pairings", "Bespoke color palettes", "Personalized cake topper", "72-hour notice required"],
      cta: "Customize",
      highlight: true
    },
    {
      name: "Wedding Cakes",
      price: "Custom Quote",
      desc: "A masterpiece designed exclusively for your special day. Experience uncompromising luxury and service.",
      features: ["Private tasting session", "White-glove delivery", "Full venue setup", "Consultation with Elara"],
      cta: "Inquire Now",
      highlight: false
    }
  ];

  return (
    <main className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Cake Pricing
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light">
            Discover the perfect centerpiece for your occasion. Our pricing reflects the artisanal quality and meticulous craftsmanship baked into every tier.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tiers.map((tier, i) => (
          <StaggerItem key={i}>
            <Card className={`relative p-10 h-full flex flex-col border-2 ${tier.highlight ? 'border-secondary bg-secondary/5' : 'border-white/50 bg-white/40'}`}>
              {tier.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-secondary mb-6">{tier.price}</div>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                {tier.desc}
              </p>
              
              <ul className="space-y-4 mb-10 mt-auto">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-on-surface-variant">
                    <span className="text-secondary font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href={tier.cta === "Customize" ? "/custom-cake" : "/order"}
                className={`w-full py-4 rounded-xl text-center font-bold transition-all ${
                  tier.highlight 
                    ? 'bg-secondary text-white hover:bg-secondary/90 shadow-lg' 
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {tier.cta}
              </Link>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Services Section */}
      <section className="mt-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn className="flex gap-6 p-8 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50">
            <div className="text-4xl">☕</div>
            <div>
              <h4 className="text-xl font-serif font-bold text-primary mb-2">Private Tasting Session</h4>
              <p className="text-on-surface-variant">Sample our finest pairings in a dedicated consultation room with our master pastry chefs.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="flex gap-6 p-8 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/50">
            <div className="text-4xl">🚚</div>
            <div>
              <h4 className="text-xl font-serif font-bold text-primary mb-2">White-Glove Delivery</h4>
              <p className="text-on-surface-variant">Professional climate-controlled transport and flawless venue setup by our specialist team.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
