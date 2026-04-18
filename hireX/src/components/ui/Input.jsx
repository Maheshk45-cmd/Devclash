import { cn } from '../../utils/cn'

export default function Input({ className, variant = 'default', size = 'md', ...props }) {
  const variants = {
    default:
      'bg-surface/60 border border-app-border/50 text-app-fg placeholder:text-app-muted/70 focus:border-app-fg/35 focus:ring-2 focus:ring-app-fg/10 focus:bg-surface',
    subtle:
      'bg-transparent border-b border-app-border/30 text-app-fg placeholder:text-app-muted/60 focus:border-app-fg/35 focus:bg-white/3',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
  }

  return (
    <input
      className={cn(
        'w-full rounded-lg outline-none transition-all duration-200 tracking-wide font-medium',
        sizeClasses[size],
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}