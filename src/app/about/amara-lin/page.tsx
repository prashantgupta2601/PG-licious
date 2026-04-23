'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';

export default function AmaraLinPage() {
  return (
    <main className="min-h-screen bg-[#1b1810] text-white selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_KQPLgXgfuUlOdRD9GhPLwfDK7dTV2JNDEJMgaKfCJkSXikBVpd5FpOJ275qemIGoS_axXKfgTLnXAslGOrX8sPZXUC722lINIrMrPg-n8jio8xobzIoS27AHzC6PcUgLxEHjEGqixRZXx7hBhoSp8Kqxl3YU_VPLh42s_-fqBE5lto1w7bYOf8IkNeW68trz58ilFpEDBjCr88mfMAS9Rhq_szye9EhuyBD7Q2vBhEnqNk4huVUzVDZFiDksQW-pIB6DUMBlPI"
          alt="Amara Lin"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b1810] via-[#1b1810]/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link href="/about" className="inline-flex items-center text-white/60 hover:text-white mb-12 transition-colors group">
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            Back to Team
          </Link>
          
          <FadeIn>
            <span className="text-secondary font-medium tracking-[0.2em] uppercase mb-4 block">Master Chocolatier</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Amara <br /> <span className="text-secondary">Lin</span>
            </h1>
            <p className="text-xl text-white/80 max-w-xl font-light leading-relaxed mb-12 italic">
              "Chocolate is a medium of emotion. Every piece is a sculpture of time, origin, and deep indulgence."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-8 border-l-4 border-secondary pl-6">The Philosophy of Cacao</h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg font-light">
              <p>
                Amara's journey into the world of chocolate began in the rainforests of Ecuador, where she first understood the profound relationship between the soil, the tree, and the final tempered snap.
              </p>
              <p>
                With a background in fine arts and a certification as a Grand Cru taster, Amara approaches chocolate not just as a confection, but as a sculptural experience. She focuses on single-origin cacao, allowing the unique terroir of each region to speak through her creations.
              </p>
              <p>
                At PG-licious, she orchestrates our chocolate collection, from technical entremets to our signature hand-painted bonbons that have become a sanctuary for connoisseurs.
              </p>
            </div>
          </FadeIn>
          
          <StaggerContainer className="space-y-12">
            <StaggerItem className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-serif font-bold text-secondary mb-4">Signature Approach</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Utilizing low-temperature roasting and long-duration conching to preserve volatile aromatics that are often lost in industrial processes.
              </p>
            </StaggerItem>
            
            <StaggerItem className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-serif font-bold text-secondary mb-4">Acclaimed Creations</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Known for the "Elysian Truffle" — a 72% Venezuelan dark chocolate infused with rare wild honey and a hint of smoked sea salt.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Visual Gallery / Detail Section */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold mb-16">The Chocolatier's Craft</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sourcing", desc: "Direct-trade relationships with small-scale farmers in Madagascar and Peru." },
              { title: "Tempering", desc: "Precision marble-slab tempering to achieve the perfect crystalline structure." },
              { title: "Sculpting", desc: "Each piece is hand-decorated with organic pigments and edible gold." }
            ].map((item, i) => (
              <StaggerItem key={i} className="group">
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 bg-[#2a251a] flex items-center justify-center">
                   <div className="text-secondary opacity-20 transform group-hover:scale-110 transition-transform duration-700">
                      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
                   </div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl font-serif font-bold mb-8">Experience Amara's Collection</h2>
          <Link href="/menu" className="bg-secondary text-white px-12 py-4 rounded-full font-serif text-lg hover:bg-secondary/90 transition-all shadow-xl hover:shadow-secondary/20">
            View Chocolate Menu
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
