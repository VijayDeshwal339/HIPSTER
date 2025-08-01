import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, isTransitioning } = useTheme();

  const getLayoutClasses = () => {
    switch (theme.layout.type) {
      case 'sidebar':
        return 'flex pt-20';
      case 'grid':
        return 'pt-20 min-h-screen';
      default:
        return 'pt-20 min-h-screen';
    }
  };

  return (
    <div
      className={`transition-all duration-500 ${isTransitioning ? 'opacity-75' : 'opacity-100'}`}
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text.primary,
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Header />
      
      <div className={getLayoutClasses()}>
        {theme.layout.type === 'sidebar' && <Sidebar />}
        
        <main className={theme.layout.type === 'sidebar' ? 'flex-1 ml-0 lg:ml-64' : 'w-full'}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;