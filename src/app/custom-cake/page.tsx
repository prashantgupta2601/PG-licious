'use client';

import React, { useState, useEffect } from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/lib/store';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';

const BASES = [
  { id: 'sponge', name: 'Vanilla Sponge', price: 20 },
  { id: 'chocolate', name: 'Rich Chocolate', price: 25 },
  { id: 'redvelvet', name: 'Red Velvet', price: 30 },
];

const SIZES = [
  { id: 'small', name: '6" (Serves 6-8)', multiplier: 1 },
  { id: 'medium', name: '8" (Serves 12-16)', multiplier: 1.5 },
  { id: 'large', name: '10" (Serves 20-24)', multiplier: 2 },
];

const TOPPINGS = [
  { id: 'berries', name: 'Fresh Berries', price: 8 },
  { id: 'macarons', name: 'Macarons', price: 12 },
  { id: 'goldleaf', name: 'Edible Gold Leaf', price: 15 },
  { id: 'chocolate-drip', name: 'Chocolate Drip', price: 5 },
];

export default function CustomCakeBuilder() {
  const [base, setBase] = useState(BASES[0]);
  const [size, setSize] = useState(SIZES[0]);
  const [selectedToppings, setSelectedToppings] = useState<typeof TOPPINGS>([]);
  const [message, setMessage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const { addItem } = useCartStore();

  useEffect(() => {
    const basePrice = base.price * size.multiplier;
    const toppingsPrice = selectedToppings.reduce((sum, t) => sum + t.price, 0);
    setTotalPrice(basePrice + toppingsPrice);
  }, [base, size, selectedToppings]);

  const toggleTopping = (topping: typeof TOPPINGS[0]) => {
    setSelectedToppings(prev => 
      prev.find(t => t.id === topping.id)
        ? prev.filter(t => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const handleAddToCart = () => {
    addItem({
      id: `custom-${Date.now()}`,
      name: `Custom ${size.name} ${base.name} Cake`,
      price: totalPrice,
      quantity: 1,
      imageUrl: '/images/custom_cake.png',
    });
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Design Your Dream Cake</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
            Choose your flavors, sizes, and toppings to create a bespoke masterpiece for your special occasion.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <StaggerContainer className="lg:col-span-8 space-y-8">
          {/* Base Selection */}
          <StaggerItem>
            <Card className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">1. Choose Your Base</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BASES.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setBase(b)}
                    className={`p-4 rounded-2xl border-2 transition-all text-left ${base.id === b.id ? 'border-primary bg-primary/5 shadow-md' : 'border-outline-variant/30 hover:border-secondary bg-white/40'}`}
                  >
                    <div className="font-bold text-primary">{b.name}</div>
                    <div className="text-secondary font-semibold">+${b.price}</div>
                  </button>
                ))}
              </div>
            </Card>
          </StaggerItem>

          {/* Size Selection */}
          <StaggerItem>
            <Card className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">2. Select Size</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SIZES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSize(s)}
                    className={`p-4 rounded-2xl border-2 transition-all text-left ${size.id === s.id ? 'border-primary bg-primary/5 shadow-md' : 'border-outline-variant/30 hover:border-secondary bg-white/40'}`}
                  >
                    <div className="font-bold text-primary">{s.name}</div>
                    <div className="text-sm text-on-surface-variant">Base x{s.multiplier}</div>
                  </button>
                ))}
              </div>
            </Card>
          </StaggerItem>

          {/* Toppings Selection */}
          <StaggerItem>
            <Card className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">3. Premium Toppings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TOPPINGS.map(t => {
                  const isSelected = selectedToppings.some(st => st.id === t.id);
                  return (
                    <button
                      key={t.id}
                      onClick={() => toggleTopping(t)}
                      className={`p-4 rounded-2xl border-2 transition-all flex justify-between items-center ${isSelected ? 'border-primary bg-primary/5 shadow-md' : 'border-outline-variant/30 hover:border-secondary bg-white/40'}`}
                    >
                      <span className="font-bold text-primary">{t.name}</span>
                      <span className="text-secondary font-semibold">+${t.price}</span>
                    </button>
                  )
                })}
              </div>
            </Card>
          </StaggerItem>

          {/* Custom Message */}
          <StaggerItem>
            <Card className="p-8">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">4. Custom Message</h2>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Happy Birthday, Emma! (Optional)"
                className="w-full bg-[#f5f5dc] border border-outline-variant rounded-xl px-4 py-3 text-base text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors min-h-[100px] resize-y"
              />
            </Card>
          </StaggerItem>
        </StaggerContainer>

        {/* Order Summary */}
        <div className="lg:col-span-4 sticky top-28">
          <FadeIn delay={0.4}>
            <Card className="p-6">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Order Summary</h2>
              
              <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-surface-container">
                <Image src="/images/custom_cake.png" alt="Custom Cake" fill className="object-cover" />
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-on-surface">
                  <span>{base.name} ({size.name})</span>
                  <span className="font-semibold">${(base.price * size.multiplier).toFixed(2)}</span>
                </div>
                
                {selectedToppings.length > 0 && (
                  <div className="space-y-2 border-t border-outline-variant/30 pt-4">
                    <p className="text-sm font-semibold text-on-surface-variant">Toppings:</p>
                    {selectedToppings.map(t => (
                      <div key={t.id} className="flex justify-between text-sm text-on-surface">
                        <span>+ {t.name}</span>
                        <span>${t.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {message && (
                  <div className="border-t border-outline-variant/30 pt-4">
                    <p className="text-sm font-semibold text-on-surface-variant mb-1">Message:</p>
                    <p className="text-sm italic text-on-surface">"{message}"</p>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-primary/20 pt-4 mb-8 flex justify-between items-end">
                <span className="text-lg font-bold text-primary">Total Estimated</span>
                <span className="text-3xl font-serif font-bold text-secondary">${totalPrice.toFixed(2)}</span>
              </div>

              <Button size="lg" className="w-full" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </Card>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
