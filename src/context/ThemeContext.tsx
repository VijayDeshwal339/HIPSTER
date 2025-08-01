import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Theme } from '../types';
import { themes, defaultTheme } from '../config/themes';

interface ThemeContextType {
  currentTheme: string;
  theme: Theme;
  switchTheme: (themeKey: string) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const switchTheme = (themeKey: string) => {
    if (themes[themeKey] && themeKey !== currentTheme) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentTheme(themeKey);
        localStorage.setItem('selectedTheme', themeKey);
        setTimeout(() => setIsTransitioning(false), 300);
      }, 150);
    }
  };

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, switchTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};