import { cn } from '../../utils/cn'

export default function Card({ className, children, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-surface/50 border-app-border/40',
    elevated: 'bg-surface/70 border-app-border/50 shadow-lg shadow-black/5 dark:shadow-black/20',
    gradient: 'bg-gradient-to-br from-surface to-surface/50 border-app-border/30',
  }

  return (
    <article
      className={cn(
        'relative rounded-xl border p-5 md:p-6 overflow-hidden backdrop-blur-sm',
        'before:absolute before:inset-0 before:pointer-events-none',
        'before:bg-[image:repeating-linear-gradient(0deg,_var(--grid-fg)_0,_var(--grid-fg)_1px,_transparent_0,_transparent_20px),repeating-linear-gradient(90deg,_var(--grid-fg)_0,_var(--grid-fg)_1px,_transparent_0,_transparent_20px)]',
        'before:[--grid-fg:var(--color-black)]/3 dark:before:[--grid-fg:var(--color-white)]/5',
        variants[variant],
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </article>
  )
}