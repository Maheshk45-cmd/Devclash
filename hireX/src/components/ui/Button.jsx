import { cn } from '../../utils/cn'

const variants = {
  primary:
    'bg-gradient-to-r from-app-fg to-app-fg/90 text-app-bg border-app-fg hover:from-app-fg/95 hover:to-app-fg/80 shadow-md hover:shadow-lg active:shadow-sm',
  secondary:
    'bg-app-border text-app-fg border-app-border/50 hover:bg-app-border/80 hover:border-app-border',
  outline:
    'bg-transparent text-app-fg border-2 border-app-fg/30 hover:bg-app-fg/5 hover:border-app-fg/50',
  ghost:
    'bg-transparent text-app-fg border border-transparent hover:border-app-border hover:bg-white/5 dark:hover:bg-white/5',
  danger:
    'bg-red-600 text-white border-red-600 hover:bg-red-700 shadow-md hover:shadow-lg active:shadow-sm',
}

export default function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  size = 'md',
  ...props
}) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-[10px]',
    md: 'px-5 py-2.5 text-[12px]',
    lg: 'px-6 py-3 text-sm',
  }

  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg border font-bold uppercase tracking-[0.12em] transition-all duration-200',
        sizeClasses[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}