import React from 'react';

export function Card({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`bg-white/60 backdrop-blur-[12px] border border-white/30 rounded-3xl shadow-[0_8px_32px_rgba(62,39,35,0.08)] overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
