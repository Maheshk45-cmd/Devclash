import Container from '../ui/Container'

export default function Footer() {
  return (
    <footer className="border-t border-app-border/30 bg-surface/30 py-10 md:py-12">
      <Container className="flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-app-muted">
            © {new Date().getFullYear()} <span className="font-bold text-app-fg">HireX</span>. Built for verified growth.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-app-muted hover:text-app-fg transition-colors">
              Privacy
            </a>
            <a href="#" className="text-app-muted hover:text-app-fg transition-colors">
              Terms
            </a>
            <a href="#" className="text-app-muted hover:text-app-fg transition-colors">
              Support
            </a>
          </div>
        </div>
        <div className="text-xs text-app-muted/60 space-y-1">
          <p>Made with precision. Designed for excellence.</p>
        </div>
      </Container>
    </footer>
  )
}