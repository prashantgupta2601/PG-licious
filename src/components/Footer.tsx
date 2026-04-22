import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-serif text-2xl font-bold mb-4">PG-licious</h2>
            <p className="text-white/80 font-sans">Indulgent Sophistication. The finest artisanal bakery experience.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/features" className="text-white/80 hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/order" className="text-white/80 hover:text-white transition-colors">Order Tracking</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 font-sans mb-4">Subscribe for sweet updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="bg-white/10 rounded-l-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary text-white" />
              <button type="submit" className="bg-secondary text-primary px-4 py-2 rounded-r-full font-bold hover:bg-white transition-colors">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} PG-licious Bakery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
