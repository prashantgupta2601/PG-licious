'use client';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
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
            <Link href="/custom-cake" className="hidden md:inline-flex items-center justify-center rounded-full bg-secondary-container px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary-container/80">
              Custom Cake
            </Link>
            <Link href="/order" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-container shadow-md hover:shadow-lg">
              Order Now
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
