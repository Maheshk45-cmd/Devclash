/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        'app-bg': {
          light: '#f8f8f5',
          dark: '#1a1a1a', // Charcoal
          DEFAULT: 'var(--color-bg)',
        },
        'app-fg': {
          light: '#1f1f1f',
          dark: '#f5f5f5',
          DEFAULT: 'var(--color-fg)',
        },
        'app-border': {
          light: '#e5e5e5',
          dark: '#333333',
          DEFAULT: 'var(--color-border)',
        },
        'app-muted': {
          light: '#737373',
          dark: '#a0a0a0',
          DEFAULT: 'var(--color-muted)',
        },
        'app-accent': {
          light: '#2f2f2f',
          dark: '#d4d4d4',
          DEFAULT: 'var(--color-accent)',
        },
        surface: {
          light: 'rgba(0, 0, 0, 0.02)',
          dark: 'rgba(255, 255, 255, 0.05)',
          DEFAULT: 'var(--color-surface)',
        },
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      fontSize: {
        xs: ['10px', { lineHeight: '1.4' }],
        sm: ['12px', { lineHeight: '1.5' }],
        base: ['14px', { lineHeight: '1.6' }],
        lg: ['16px', { lineHeight: '1.6' }],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        normal: '400',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [],
}
