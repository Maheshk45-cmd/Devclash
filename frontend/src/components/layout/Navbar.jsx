import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { Button } from '../shared/Button';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const NAV_ITEMS = [
  { label: 'Network', path: '/network' },
  { label: 'Events', path: '/events' },
  { label: 'Services', path: '/services' },
  { label: 'Business', path: '/business' },
  { label: 'Companies', path: '/companies' }
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between h-14 px-2 py-2 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg rounded-full geometric-border border-zinc-200 dark:border-zinc-800">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0 pl-2">
          <NavLink to="/" className="flex items-center justify-center w-10 h-10 bg-black dark:bg-white rounded-full transition-transform hover:scale-105">
            <span className="text-white dark:text-black font-display font-medium text-lg leading-none mt-0.5">H</span>
          </NavLink>
        </div>

        {/* Center: Pills */}
        <nav className="hidden md:flex items-center space-x-1 px-4">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors",
                isActive 
                  ? "bg-gradient-to-r from-[#FF7A00] to-[#FFB347] text-black" 
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              )}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-2 pr-2">
          <Button variant="ghost" onClick={toggleTheme} className="w-10 h-10 px-0 rounded-full flex items-center justify-center geometric-border">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <NavLink to="/login">
            <Button variant="outline" className="hidden md:inline-flex uppercase font-mono tracking-wider font-bold">
              Login
            </Button>
          </NavLink>
          <NavLink to="/signup">
             <Button variant="primary" className="uppercase font-mono tracking-wider font-bold">
               Signup
             </Button>
          </NavLink>
          <Button variant="secondary" size="sm" className="md:hidden w-10 h-10 px-0 rounded-full flex items-center justify-center">
            <Menu size={16} />
          </Button>
        </div>

      </div>
    </div>
  );
}

