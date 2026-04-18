import React from 'react';
import { cn } from '../../utils/cn';

export function FormInput({ label, id, className, error, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-2 text-left", className)}>
      {label && (
        <label htmlFor={id} className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "h-12 px-4 bg-transparent geometric-border rounded-xl font-mono text-sm placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[#FF7A00] transition-colors",
          error ? "border-red-500" : "border-zinc-300 dark:border-zinc-700"
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-mono mt-1">{error}</span>}
    </div>
  );
}
