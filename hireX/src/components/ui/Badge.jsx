import { cn } from '../../utils/cn'

export default function Badge({ className, children, variant = 'default' }) {
  const variants = {
    default: 'bg-app-fg/8 text-app-fg border-app-fg/20',
    success: 'bg-green-500/10 text-green-600 border-green-500/30 dark:text-green-400',
    warning: 'bg-amber-500/10 text-amber-600 border-amber-500/30 dark:text-amber-400',
    error: 'bg-red-500/10 text-red-600 border-red-500/30 dark:text-red-400',
    muted: 'bg-app-border text-app-muted border-app-border',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-bold uppercase tracking-[0.12em]',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}