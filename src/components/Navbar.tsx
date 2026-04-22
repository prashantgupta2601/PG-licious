import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[12px] bg-white/60 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl font-bold text-primary">
              PG-licious
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-on-surface hover:text-primary transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-on-surface hover:text-primary transition-colors font-medium">About</Link>
            <Link href="/features" className="text-on-surface hover:text-primary transition-colors font-medium">Features</Link>
            <Link href="/pricing" className="text-on-surface hover:text-primary transition-colors font-medium">Pricing</Link>
            <Link href="/blog" className="text-on-surface hover:text-primary transition-colors font-medium">Blog</Link>
            <Link href="/contact" className="text-on-surface hover:text-primary transition-colors font-medium">Contact</Link>
            <Link href="/faq" className="text-on-surface hover:text-primary transition-colors font-medium">FAQ</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/custom-cake" className="hidden md:inline-flex items-center justify-center rounded-full bg-secondary-container px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary-container/80">
              Custom Cake
            </Link>
            <Link href="/order" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-container">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
