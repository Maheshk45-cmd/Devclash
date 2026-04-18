export default function PageWrapper({ children }) {
  return (
    <div
      className="relative min-h-screen border-x border-app-border/30 bg-app-bg text-app-fg"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            var(--grid-fg, rgba(0,0,0,0.03)),
            var(--grid-fg, rgba(0,0,0,0.03)) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            90deg,
            var(--grid-fg, rgba(0,0,0,0.03)),
            var(--grid-fg, rgba(0,0,0,0.03)) 1px,
            transparent 1px,
            transparent 40px
          )
        `,
        backgroundSize: '100% 40px, 40px 100%',
        backgroundPosition: '0 0, 0 0',
      }}
    >
      <div className="relative">{children}</div>
    </div>
  )
}