import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProducts } from '../hooks/useApi';
import ProductCard from '../components/ProductCard';
import { Loader2, AlertCircle, Sparkles, Filter, Search, Grid, List } from 'lucide-react';

const Home: React.FC = () => {
  const { theme } = useTheme();
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = React.useState<'name' | 'price' | 'category'>('name');

  // Get unique categories
  const categories = React.useMemo(() => {
    const cats = products.map(product => product.category);
    return ['all', ...Array.from(new Set(cats))];
  }, [products]);

  // Filter and sort products
  const filteredProducts = React.useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, sortBy]);

  const getContainerClasses = () => {
    const baseClasses = 'container mx-auto px-4 py-8';
    switch (theme.layout.spacing) {
      case 'compact':
        return `${baseClasses} max-w-6xl space-y-6`;
      case 'relaxed':
        return `${baseClasses} max-w-7xl space-y-12`;
      default:
        return `${baseClasses} max-w-6xl space-y-8`;
    }
  };

  const getGridClasses = () => {
    const baseClasses = viewMode === 'list' ? 'space-y-4' : '';
    switch (theme.layout.type) {
      case 'grid':
        return viewMode === 'list' 
          ? `${baseClasses}` 
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8';
      case 'sidebar':
        return viewMode === 'list' 
          ? `${baseClasses}` 
          : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6';
      default:
        return viewMode === 'list' 
          ? `${baseClasses}` 
          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
  };

  return (
    <div className={getContainerClasses()}>
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex items-center justify-center space-x-3">
          <Sparkles
            className="w-8 h-8"
            style={{ color: theme.colors.accent }}
          />
          <h1
            className={`${theme.typography.headingSize} font-bold`}
            style={{
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            Welcome to ThemeSwitch
          </h1>
          <Sparkles
            className="w-8 h-8"
            style={{ color: theme.colors.accent }}
          />
        </div>
        
        <p
          className={`${theme.typography.bodySize} max-w-2xl mx-auto leading-relaxed`}
          style={{ color: theme.colors.text.secondary }}
        >
          Experience the power of dynamic theming with our innovative React application. 
          Switch between three unique themes and watch as the entire interface transforms 
          before your eyes, from layout to typography to color schemes.
        </p>
        
        <button
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 transform hover:scale-105"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          Explore Themes
        </button>
      </section>

      {/* Featured Products Section */}
      <section className="space-y-6">
        <h2
          className={`${theme.layout.type === 'grid' ? 'text-4xl' : 'text-3xl'} font-bold text-center`}
          style={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Our Products ({filteredProducts.length})
        </h2>
        
        {/* Search and Filter Controls */}
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: theme.colors.text.secondary }}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-200"
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
                color: theme.colors.text.primary,
              }}
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter 
                className="w-5 h-5"
                style={{ color: theme.colors.text.secondary }}
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
                style={{
                  backgroundColor: theme.colors.surface,
                  borderColor: theme.colors.border,
                  color: theme.colors.text.primary,
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-200"
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
                color: theme.colors.text.primary,
              }}
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
                style={{
                  backgroundColor: viewMode === 'grid' ? theme.colors.primary + '20' : 'transparent',
                  color: theme.colors.primary,
                }}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
                style={{
                  backgroundColor: viewMode === 'list' ? theme.colors.primary + '20' : 'transparent',
                  color: theme.colors.primary,
                }}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2
              className="w-8 h-8 animate-spin"
              style={{ color: theme.colors.primary }}
            />
            <span
              className="ml-3 text-lg"
              style={{ color: theme.colors.text.secondary }}
            >
              Loading products...
            </span>
          </div>
        )}
        
        {error && (
          <div
            className="flex items-center justify-center py-12 px-4 rounded-lg"
            style={{ backgroundColor: theme.colors.surface }}
          >
            <AlertCircle
              className="w-6 h-6 mr-3"
              style={{ color: theme.colors.accent }}
            />
            <span style={{ color: theme.colors.text.primary }}>
              Error loading products: {error}
            </span>
          </div>
        )}
        
        {!loading && !error && filteredProducts.length > 0 && (
          <div className={getGridClasses()}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        )}
        
        {!loading && !error && filteredProducts.length === 0 && products.length > 0 && (
          <div className="text-center py-12">
            <p
              className="text-lg"
              style={{ color: theme.colors.text.secondary }}
            >
              No products found matching your criteria.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;