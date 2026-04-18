import React from 'react';
import { cn } from '../../utils/cn';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-sans font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    secondary: "bg-gray-200 text-black hover:bg-gray-300 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700",
    outline: "border geometric-border hover:bg-black/5 dark:hover:bg-white/10",
    ghost: "hover:bg-black/5 dark:hover:bg-white/10",
  };

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
