'use client';
import { useCartStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-white/50 backdrop-blur-md">
              <h2 className="font-serif text-2xl font-bold text-primary">Your Order</h2>
              <button onClick={() => setIsOpen(false)} className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center text-on-surface-variant mt-10">
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-white/60 p-4 rounded-2xl shadow-sm border border-white/50">
                    <div className="flex-1">
                      <h4 className="font-bold text-primary">{item.name}</h4>
                      <div className="text-secondary font-semibold">${item.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-variant text-primary hover:bg-secondary-container transition-colors">-</button>
                      <span className="w-4 text-center font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-variant text-primary hover:bg-secondary-container transition-colors">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="p-2 text-error hover:bg-error-container rounded-full transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 bg-white border-t border-outline-variant/30">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-lg text-on-surface-variant">Subtotal</span>
                <span className="font-serif text-2xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full shadow-lg" size="lg" disabled={items.length === 0}>
                Proceed to Checkout
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
