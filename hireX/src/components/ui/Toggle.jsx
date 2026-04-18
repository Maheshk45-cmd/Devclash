import { useTheme } from '../../hooks/useTheme'
import Button from './Button'

export default function Toggle({ className }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const nextLabel = isDark ? '☀️ Light' : '🌙 Dark'

  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {nextLabel}
    </Button>
  )
}