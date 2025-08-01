export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  discount: number;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
    };
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