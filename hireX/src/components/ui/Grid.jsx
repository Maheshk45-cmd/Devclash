import { cn } from '../../utils/cn'

export default function Grid({ className, children, columns = 'auto' }) {
  const columnClasses = {
    auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    two: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
    three: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    four: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div
      className={cn(
        'grid gap-5 md:gap-6 lg:gap-7',
        columnClasses[columns],
        className,
      )}
    >
      {children}
    </div>
  )
}