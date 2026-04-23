'use client';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: "Mastering the Flawless Ganache",
      excerpt: "Our head pastry chef reveals the secrets to a silky, rich finish for any tart or cake.",
      category: "Technique",
      date: "Oct 24, 2024",
      img: "/about_hero_patisserie_1776946757000.png"
    },
    {
      title: "Sourdough Starter 101",
      excerpt: "Everything you need to know to nurture your wild yeast and achieve that perfect rise and tangy flavor.",
      category: "Baking",
      date: "Oct 18, 2024",
      img: "/images/hero_image.png"
    },
    {
      title: "The Art of the Macaron",
      excerpt: "Troubleshooting the elusive 'feet' and achieving a perfectly smooth shell.",
      category: "Patisserie",
      date: "Oct 12, 2024",
      img: "/images/custom_cake.png"
    },
    {
      title: "Summer Berry Tart",
      excerpt: "A crisp pâte sucrée shell filled with vanilla bean pastry cream and seasonal jewels.",
      category: "Recipes",
      date: "Oct 05, 2024",
      img: "/about_hero_patisserie_1776946757000.png"
    },
    {
      title: "Lamination Magic",
      excerpt: "How we achieve those hundreds of buttery layers in our signature croissants every morning.",
      category: "Process",
      date: "Sep 28, 2024",
      img: "/images/hero_image.png"
    }
  ];

  return (
    <main className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
            Bakery Blog
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            Stories, recipes, and sweet inspiration from the heart of our kitchen to yours.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {posts.map((post, i) => (
          <StaggerItem key={i}>
            <Card className="group h-full overflow-hidden flex flex-col hover:translate-y-[-4px] transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-secondary">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-on-surface-variant/60 mb-3">{post.date}</div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${i}`}
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                >
                  Read More <span>→</span>
                </Link>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Newsletter */}
      <section className="mt-32 max-w-4xl mx-auto bg-primary text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Image src="/images/hero_image.png" alt="pattern" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold mb-4">Join Our Sweet Circle</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto text-lg">Receive seasonal recipes, masterclass invitations, and a taste of what&apos;s baking.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
