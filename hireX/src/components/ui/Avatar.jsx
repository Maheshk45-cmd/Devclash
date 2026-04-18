import { cn } from '../../utils/cn'

export default function Avatar({ name, className }) {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-lg border-2 border-app-border bg-gradient-to-br from-app-fg to-app-fg/70 text-[12px] font-bold tracking-wider text-app-bg shadow-sm',
        className,
      )}
      aria-label={name}
      title={name}
    >
      {initials}
    </div>
  )
}