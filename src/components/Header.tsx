import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../config/themes';
import { Menu, Palette, X } from 'lucide-react';

const Header: React.FC = () => {
  const { theme, currentTheme, switchTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchTheme(event.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
        color: theme.colors.text.primary,
      }}
    >
      <div className="border-b" style={{ borderColor: theme.colors.border }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Palette 
                className="w-6 h-6 sm:w-8 sm:h-8" 
                style={{ color: theme.colors.primary }}
              />
              <h1
                className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
                style={{ 
                  fontFamily: theme.typography.fontFamily,
                  color: theme.colors.primary 
                }}
              >
                ThemeSwitch
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors duration-200 hover:opacity-80 ${
                    location.pathname === item.path ? 'font-semibold' : ''
                  }`}
                  style={{
                    color: location.pathname === item.path 
                      ? theme.colors.primary 
                      : theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Theme Selector and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Theme Selector - Hidden on small screens */}
              <select
                value={currentTheme}
                onChange={handleThemeChange}
                className="hidden sm:block px-2 py-1 sm:px-3 sm:py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200 text-sm"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                {Object.entries(themes).map(([key, themeOption]) => (
                  <option key={key} value={key}>
                    {themeOption.name}
                  </option>
                ))}
              </select>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:opacity-80"
                style={{
                  color: theme.colors.text.primary,
                  backgroundColor: theme.colors.surface,
                }}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div 
              className="lg:hidden mt-4 pb-4 border-t"
              style={{ borderColor: theme.colors.border }}
            >
              <nav className="flex flex-col space-y-3 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`px-4 py-2 rounded-lg transition-colors duration-200 hover:opacity-80 ${
                      location.pathname === item.path ? 'font-semibold' : ''
                    }`}
                    style={{
                      color: location.pathname === item.path 
                        ? theme.colors.primary 
                        : theme.colors.text.secondary,
                      backgroundColor: location.pathname === item.path 
                        ? theme.colors.primary + '10' 
                        : 'transparent',
                      fontFamily: theme.typography.fontFamily,
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile Theme Selector */}
              <div className="mt-4 px-4 sm:hidden">
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: theme.colors.text.primary }}
                >
                  Theme
                </label>
                <select
                  value={currentTheme}
                  onChange={handleThemeChange}
                  className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.border,
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {Object.entries(themes).map(([key, themeOption]) => (
                    <option key={key} value={key}>
                      {themeOption.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;