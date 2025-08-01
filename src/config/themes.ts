import type { Theme } from '../types';

export const themes: Record<string, Theme> = {
  theme1: {
    name: 'Minimalist',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: {
        primary: '#1e293b',
        secondary: '#64748b',
      },
      accent: '#3b82f6',
      border: '#e2e8f0',
    },
    layout: {
      type: 'standard',
      spacing: 'normal',
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      headingSize: 'text-3xl',
      bodySize: 'text-base',
    },
  },
  theme2: {
    name: 'Professional Dark',
    colors: {
      primary: '#f59e0b',
      secondary: '#6b7280',
      background: '#111827',
      surface: '#1f2937',
      text: {
        primary: '#f9fafb',
        secondary: '#d1d5db',
      },
      accent: '#fbbf24',
      border: '#374151',
    },
    layout: {
      type: 'sidebar',
      spacing: 'compact',
    },
    typography: {
      fontFamily: 'Playfair Display, serif',
      headingSize: 'text-4xl',
      bodySize: 'text-lg',
    },
  },
  theme3: {
    name: 'Colorful Creative',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      background: '#fef7ff',
      surface: '#ffffff',
      text: {
        primary: '#581c87',
        secondary: '#7c3aed',
      },
      accent: '#f97316',
      border: '#e879f9',
    },
    layout: {
      type: 'grid',
      spacing: 'relaxed',
    },
    typography: {
      fontFamily: 'Pacifico, cursive',
      headingSize: 'text-5xl',
      bodySize: 'text-xl',
    },
  },
};

export const defaultTheme = 'theme1';