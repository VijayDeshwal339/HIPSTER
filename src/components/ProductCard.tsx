import React from 'react';
import { useTheme } from '../context/ThemeContext';
import type { Product } from '../types';
import { Tag, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { theme } = useTheme();
  const [imageError, setImageError] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const getPlaceholderImage = () => {
    return `https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`;
  };

  const getCardClasses = () => {
    const baseTransition = 'transition-all duration-300';
    
    if (viewMode === 'list') {
      return `${baseTransition} p-4 rounded-lg shadow-sm hover:shadow-md border flex flex-col sm:flex-row gap-4`;
    }
    
    switch (theme.layout.type) {
      case 'grid':
        return `${baseTransition} p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105`;
      case 'sidebar':
        return `${baseTransition} p-4 rounded-lg shadow-md hover:shadow-lg`;
      default:
        return `${baseTransition} p-4 rounded-lg shadow-sm hover:shadow-md border`;
    }
  };

  if (viewMode === 'list') {
    return (
      <div
        className={getCardClasses()}
        style={{
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        }}
      >
        <div className="w-full sm:w-32 h-32 flex-shrink-0">
          <div className="relative w-full h-full">
            {imageLoading && (
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-lg"
                style={{ backgroundColor: theme.colors.surface }}
              >
                <div className="animate-pulse w-8 h-8 rounded-full" style={{ backgroundColor: theme.colors.border }}></div>
              </div>
            )}
            <img
              src={imageError ? getPlaceholderImage() : product.image}
              alt={product.title}
              className="w-full h-full object-cover rounded-lg"
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{ display: imageLoading ? 'none' : 'block' }}
            />
          </div>
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <h3
              className="font-bold text-lg line-clamp-2"
              style={{
                color: theme.colors.text.primary,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              {product.title}
            </h3>
            
            <div className="flex items-center space-x-2 flex-shrink-0">
              <span
                className="text-xl font-bold"
                style={{ color: theme.colors.primary }}
              >
                ${product.price}
              </span>
              {product.discount > 0 && (
                <div className="flex items-center space-x-1">
                  <Tag
                    className="w-4 h-4"
                    style={{ color: theme.colors.accent }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: theme.colors.accent }}
                  >
                    {product.discount}% OFF
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <p
            className="text-sm line-clamp-2"
            style={{ color: theme.colors.text.secondary }}
          >
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <span
              className="text-sm px-2 py-1 rounded-full"
              style={{
                backgroundColor: theme.colors.primary + '20',
                color: theme.colors.primary,
              }}
            >
              {product.category}
            </span>
            
            <button
              className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 transform hover:scale-105"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
              }}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={getCardClasses()}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
      }}
    >
      <div className="aspect-w-1 aspect-h-1 mb-4">
        <div className="relative w-full h-48">
          {imageLoading && (
            <div 
              className="absolute inset-0 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: theme.colors.surface }}
            >
              <div className="animate-pulse w-12 h-12 rounded-full" style={{ backgroundColor: theme.colors.border }}></div>
            </div>
          )}
          <img
            src={imageError ? getPlaceholderImage() : product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg"
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        </div>
      </div>
      
      <div className="space-y-3">
        <span
          className="text-xs px-2 py-1 rounded-full inline-block"
          style={{
            backgroundColor: theme.colors.secondary + '20',
            color: theme.colors.secondary,
          }}
        >
          {product.category}
        </span>
        
        <h3
          className={`font-bold ${theme.layout.type === 'grid' ? 'text-xl' : 'text-lg'} line-clamp-2`}
          style={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          {product.title}
        </h3>
        
        <p
          className={`${theme.typography.bodySize} line-clamp-3`}
          style={{ color: theme.colors.text.secondary }}
        >
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className="text-2xl font-bold"
              style={{ color: theme.colors.primary }}
            >
              ${product.price}
            </span>
            {product.discount > 0 && (
              <div className="flex items-center space-x-1">
                <Tag
                  className="w-4 h-4"
                  style={{ color: theme.colors.accent }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: theme.colors.accent }}
                >
                  {product.discount}% OFF
                </span>
              </div>
            )}
          </div>
          
          <button
            className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 transform hover:scale-105"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;