'use client';
import React, { useState } from 'react';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

function AccordionItem({ title, children, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-outline-variant/30 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-serif text-lg font-bold text-primary">{title}</span>
        <span className={`transform transition-transform duration-300 text-secondary ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-on-surface-variant text-base leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items }: { items: {title: string, content: string}[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/40 shadow-sm">
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          title={item.title} 
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}
