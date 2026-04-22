'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { CartDrawer } from './CartDrawer';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const { toggleCart, items } = useCartStore();
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 z-50 w-full backdrop-blur-[12px] bg-white/70 border-b border-white/30 shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="font-serif text-2xl font-bold text-primary flex items-center gap-2">
                <img src="/images/bakery_logo.png" alt="PG-licious" className="w-8 h-8 object-contain" />
                PG-licious
              </Link>
            </motion.div>
            <nav className="hidden md:flex gap-8">
              {['Home', 'About', 'Features', 'Pricing', 'Blog', 'Contact', 'FAQ'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-on-surface hover:text-primary transition-colors font-medium">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <Link href="/custom-cake" className="hidden lg:inline-flex items-center justify-center rounded-full bg-secondary-container px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary-container/80">
                Custom Cake
              </Link>
              <button 
                onClick={toggleCart} 
                className="relative p-2 text-primary hover:bg-secondary-container rounded-full transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-error rounded-full">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>
      <CartDrawer />
    </>
  );
}
