'use client';
import Image from 'next/image';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/about_hero_patisserie_1776946757000.png"
          alt="Our Story"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
              For over three generations, we have pursued perfection in every fold of dough and whisk of cream.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              The Art of Soft Minimalism
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                We believe that true luxury lies in restraint. Our creations are an homage to the essential elements of baking: time, temperature, and the finest natural ingredients sourced globally.
              </p>
              <p>
                Every pastry that leaves our kitchen is a testament to mindful preparation. We eschew artificial enhancements in favor of deep, complex flavors that develop slowly, reflecting our philosophy of indulgent sophistication.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/about_hero_patisserie_1776946757000.png" 
              alt="Minimalist Baking"
              fill
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-surface-container/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-on-surface-variant text-lg">Tracing the path of our passion, from humble beginnings to a sanctuary of sweetness.</p>
          </FadeIn>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { year: "The First Oven", desc: "Our founder opened the doors to a modest boulangerie, introducing signature sourdoughs." },
              { year: "The Entremet Era", desc: "Shift focus to highly technical, layered mousse cakes." },
              { year: "Master Chocolatier", desc: "Expanding our repertoire to include artisanal, single-origin chocolate bonbons." },
              { year: "Indulgent Sophistication", desc: "A reimagined space blending modern glassmorphic aesthetics with timeless traditions." }
            ].map((item, i) => (
              <StaggerItem key={i} className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-bold text-secondary mb-3">{item.year}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">The Visionary Minds</h2>
            <p className="text-on-surface-variant text-lg">Meet the experts shaping our culinary landscape.</p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Elara Vance",
              role: "Executive Pastry Chef",
              bio: "Bringing two decades of classical French training, Elara orchestrates the delicate balance of flavors in our signature collections.",
              img: "/master_chef_elara_1776946779406.png"
            },
            {
              name: "Julian Thorne",
              role: "Head of Boulangerie",
              bio: "Julian is the custodian of our mother dough, ensuring every loaf achieves the perfect crust and an airy, soulful crumb.",
              img: "/baker_julian_1776946795633.png"
            },
            {
              name: "Amara Lin",
              role: "Master Chocolatier",
              bio: "Amara transforms single-origin cacao into sculptural, melt-in-your-mouth art pieces that define modern indulgence.",
              img: "/master_chef_elara_1776946779406.png" // Reusing due to quota
            }
          ].map((member, i) => (
            <StaggerItem key={i} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-secondary font-medium mb-4">{member.role}</p>
              <p className="text-on-surface-variant leading-relaxed">{member.bio}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </main>
  );
}
