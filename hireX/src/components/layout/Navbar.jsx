import { useState } from 'react'
import { navLinks } from '../../lib/constants'
import Avatar from '../ui/Avatar'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Divider from '../ui/Divider'
import Input from '../ui/Input'
import Toggle from '../ui/Toggle'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-app-border/40 bg-app-bg/80 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="#/" className="inline-flex items-center gap-2 group">
            <Avatar name="HireX" />
            <span className="text-lg font-bold text-app-fg group-hover:text-app-muted transition-colors">
              HireX
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            className="inline-flex rounded-lg border border-app-border/50 px-4 py-2.5 text-sm font-semibold text-app-fg hover:bg-white/5 md:hidden transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-app-muted/80 hover:text-app-fg transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-app-fg/70 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Desktop search */}
          <div className="hidden w-full max-w-xs lg:block">
            <Input placeholder="Search talent, events..." size="sm" />
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Toggle />
            <a href="#/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </a>
            <a href="#/signup">
              <Button size="sm">Signup</Button>
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mt-4 rounded-lg border border-app-border/30 bg-surface/50 p-4 backdrop-blur-sm md:hidden">
            <div className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg border border-app-border/20 px-4 py-3 font-medium text-app-fg hover:bg-surface hover:border-app-border/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Divider className="my-4" />
            <div className="space-y-3">
              <Input placeholder="Search..." size="sm" />
              <div className="flex items-center gap-2">
                <Toggle className="flex-1" />
                <a href="#/login" className="flex-1">
                  <Button variant="ghost" size="sm" className="w-full">
                    Login
                  </Button>
                </a>
                <a href="#/signup" className="flex-1">
                  <Button size="sm" className="w-full">
                    Signup
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}