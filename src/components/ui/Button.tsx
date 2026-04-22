import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
};

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-container shadow-md',
    secondary: 'bg-secondary text-white hover:bg-secondary-container shadow-md',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
    glass: 'bg-white/60 backdrop-blur-md border border-secondary text-primary hover:bg-white/80 shadow-sm'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
