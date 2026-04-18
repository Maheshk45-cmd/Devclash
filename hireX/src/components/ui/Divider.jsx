import { cn } from '../../utils/cn'

export default function Divider({ className, variant = 'default' }) {
  const variants = {
    default: 'border-t border-app-border/40',
    dashed: 'border-t border-dashed border-app-border/50',
    dotted: 'border-t border-dotted border-app-border/50',
    accent: 'border-t-2 border-app-fg/25',
  }

  return <hr className={cn('w-full', variants[variant], className)} />
}