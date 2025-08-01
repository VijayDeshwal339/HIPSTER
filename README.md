# ThemeSwitch - Dynamic React Theme Switcher

A modern, responsive React application showcasing dynamic theming capabilities with three distinct themes, real-time product browsing, and seamless user experience across all devices.

## 🚀 Live Demo

https://hipster-one.vercel.app/

## ✨ Features

### 🎨 Dynamic Theming System
- **3 Unique Themes**: Minimalist, Professional Dark, and Colorful Creative
- **Real-time Theme Switching**: Instant theme changes with smooth transitions
- **Theme Persistence**: Remembers your theme preference across sessions
- **Comprehensive Styling**: Colors, typography, layouts, and spacing all adapt

### 🛍️ Product Showcase
- **20+ Products**: Real product data from Fake Store API
- **Advanced Search**: Real-time search through titles and descriptions
- **Smart Filtering**: Filter by categories with dynamic category detection
- **Flexible Sorting**: Sort by name, price, or category
- **View Modes**: Toggle between grid and list layouts

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Adaptive Layouts**: Different layouts for different themes
- **Touch-Friendly**: Mobile-optimized navigation and interactions
- **Progressive Enhancement**: Enhanced features on larger screens

### 🎯 User Experience
- **Smooth Animations**: Micro-interactions and hover effects
- **Loading States**: Elegant loading indicators
- **Error Handling**: Graceful fallbacks for failed images
- **Accessibility**: ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **API**: Fake Store API
- **Deployment**: Vercel

## 🏗️ Architecture

### Theme System
```typescript
interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: { primary: string; secondary: string };
    accent: string;
    border: string;
  };
  layout: {
    type: 'standard' | 'sidebar' | 'grid';
    spacing: 'compact' | 'normal' | 'relaxed';
  };
  typography: {
    fontFamily: string;
    headingSize: string;
    bodySize: string;
  };
}
```

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Responsive navigation header
│   ├── Layout.tsx      # Main layout wrapper
│   ├── ProductCard.tsx # Product display component
│   └── Sidebar.tsx     # Theme-aware sidebar
├── context/            # React Context providers
│   └── ThemeContext.tsx # Theme management
├── config/             # Configuration files
│   └── themes.ts       # Theme definitions
├── hooks/              # Custom React hooks
│   └── useApi.ts       # API data fetching
├── pages/              # Route components
│   ├── Home.tsx        # Product showcase page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact form page
├── types/              # TypeScript definitions
│   └── index.ts        # Shared interfaces
└── App.tsx             # Main application component
```

## 🎨 Available Themes

### 1. Minimalist Theme
- **Colors**: Clean blues and grays
- **Layout**: Standard grid layout
- **Typography**: Inter font family
- **Spacing**: Normal spacing
- **Best For**: Professional, clean interfaces

### 2. Professional Dark Theme
- **Colors**: Dark background with gold accents
- **Layout**: Sidebar navigation
- **Typography**: Playfair Display serif font
- **Spacing**: Compact spacing
- **Best For**: Premium, sophisticated applications

### 3. Colorful Creative Theme
- **Colors**: Vibrant pinks and purples
- **Layout**: Enhanced grid with larger cards
- **Typography**: Pacifico cursive font
- **Spacing**: Relaxed spacing
- **Best For**: Creative, playful interfaces

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VijayDeshwal339/HIPSTER.git
   cd HIPSTER
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

This application is deployed on Vercel with automatic deployments from the main branch.


## 🙏 Acknowledgments

- **Fake Store API** for providing product data
- **Pexels** for fallback product images
- **Lucide React** for beautiful icons
- **Tailwind CSS** for utility-first styling
- **React Team** for the amazing framework

## 📞 Contact

- **Website**: https://hipster-one.vercel.app/
- **Email**: deshwalamit339@gmail.com
- **GitHub**: https://github.com/VijayDeshwal339

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
