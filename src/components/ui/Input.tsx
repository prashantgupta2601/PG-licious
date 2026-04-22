import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, className = '', id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1 w-full relative">
      <label htmlFor={inputId} className="text-xs font-semibold tracking-wider text-on-surface-variant uppercase ml-2">
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full bg-[#f5f5dc] border border-outline-variant rounded-xl px-4 py-3 text-base text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}
