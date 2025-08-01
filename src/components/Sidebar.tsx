import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Home, User, Mail, Star, ShoppingBag, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { theme } = useTheme();
  const location = useLocation();

  const sidebarItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  const additionalItems = [
    { label: 'Featured', icon: Star },
    { label: 'Products', icon: ShoppingBag },
    { label: 'Settings', icon: Settings },
  ];

  if (theme.layout.type !== 'sidebar') return null;

  return (
    <aside
      className="fixed left-0 top-20 h-full w-64 hidden lg:block transition-all duration-300 border-r"
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
      }}
    >
      <div className="p-6">
        <nav className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive ? 'font-semibold' : 'hover:opacity-80'
                }`}
                style={{
                  backgroundColor: isActive ? theme.colors.primary + '20' : 'transparent',
                  color: isActive ? theme.colors.primary : theme.colors.text.secondary,
                }}
              >
                <Icon className="w-5 h-5" />
                <span style={{ fontFamily: theme.typography.fontFamily }}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t" style={{ borderColor: theme.colors.border }}>
          <h3
            className="text-sm font-semibold mb-4 px-4"
            style={{ color: theme.colors.text.secondary }}
          >
            Additional
          </h3>
          <nav className="space-y-2">
            {additionalItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 hover:opacity-80 w-full text-left"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <Icon className="w-5 h-5" />
                  <span style={{ fontFamily: theme.typography.fontFamily }}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;