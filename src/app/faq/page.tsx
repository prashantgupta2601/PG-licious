'use client';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Accordion } from '@/components/ui/Accordion';
import Link from 'next/link';

export default function FaqPage() {
  const faqItems = [
    {
      title: "How much notice do you require for custom cakes?",
      content: "To ensure we can dedicate the meticulous attention to detail your celebration deserves, we request a minimum of two weeks' notice for signature cakes and four weeks for tiered or complex custom designs. During peak wedding and holiday seasons, earlier booking is highly recommended."
    },
    {
      title: "Do you offer gluten-free or vegan options?",
      content: "Yes, our patisserie crafts a selection of exquisite gluten-free and vegan indulgences daily. While we take extraordinary precautions to prevent cross-contamination, please note our kitchen processes wheat, dairy, and nuts. For severe allergies, please consult with our head pastry chef."
    },
    {
      title: "What are the care instructions for my pastries?",
      content: "For the optimal sensory experience, we recommend enjoying our creations on the day of purchase. Macarons and mousse-based items should be refrigerated and brought to room temperature 20 minutes before serving. Croissants and baked tarts are best kept at room temperature in their artisan packaging."
    },
    {
      title: "Do you offer delivery services?",
      content: "We provide white-glove delivery service for tiered cakes and catering orders exceeding $300 within a 15-mile radius. Delivery includes professional setup to ensure your dessert presentation is flawless. Standard courier delivery is also available for smaller gift boxes."
    },
    {
      title: "Can I schedule a cake tasting?",
      content: "Absolutely. We invite you to experience a curated tasting consultation for weddings and major events. Our tasting boxes feature up to four flavor profiles of your choice and include a 45-minute design consultation with our lead decorator. Tastings require an appointment."
    }
  ];

  return (
    <main className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed">
            Find answers to your sweetest questions. From custom cake orders to our delicate patisserie care instructions.
          </p>
        </FadeIn>
      </div>

      <section className="max-w-3xl mx-auto mb-32">
        <FadeIn delay={0.2}>
          <Accordion items={faqItems} />
        </FadeIn>
      </section>

      {/* Still have questions */}
      <section className="text-center bg-white/40 backdrop-blur-md rounded-[3rem] p-16 max-w-5xl mx-auto border border-white/50 shadow-xl">
        <FadeIn>
          <h2 className="text-4xl font-serif font-bold text-primary mb-6 italic">Still have questions?</h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-2xl mx-auto">
            We&apos;re here to help you make your celebration perfect. Reach out to our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary-container transition-all shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/order" 
              className="bg-white text-secondary border-2 border-secondary px-10 py-4 rounded-xl font-bold hover:bg-secondary/5 transition-all"
            >
              Order Online
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
