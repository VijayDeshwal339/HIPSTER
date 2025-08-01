import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Users, Target, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by developers, for developers. Join our growing community of theme enthusiasts.',
    },
    {
      icon: Target,
      title: 'Precision Design',
      description: 'Every pixel matters. Our themes are crafted with attention to detail and user experience.',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for innovation in UI/UX design and development excellence.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Passionate about creating beautiful, functional interfaces that users love.',
    },
  ];

  const getContainerClasses = () => {
    const baseClasses = 'container mx-auto px-4 py-8';
    switch (theme.layout.spacing) {
      case 'compact':
        return `${baseClasses} max-w-4xl space-y-8`;
      case 'relaxed':
        return `${baseClasses} max-w-6xl space-y-16`;
      default:
        return `${baseClasses} max-w-5xl space-y-12`;
    }
  };

  return (
    <div className={getContainerClasses()}>
      {/* Header */}
      <section className="text-center space-y-6">
        <h1
          className={`${theme.typography.headingSize} font-bold`}
          style={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          About ThemeSwitch
        </h1>
        <p
          className={`${theme.typography.bodySize} max-w-3xl mx-auto leading-relaxed`}
          style={{ color: theme.colors.text.secondary }}
        >
          ThemeSwitch is more than just a demonstration—it's a showcase of what's possible 
          when design meets technology. Our application demonstrates the power of dynamic 
          theming in modern web applications.
        </p>
      </section>

      {/* Story Section */}
      <section
        className="p-8 rounded-2xl"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Our Story
        </h2>
        <div className="space-y-4">
          <p
            className={theme.typography.bodySize}
            style={{ color: theme.colors.text.secondary }}
          >
            In today's digital landscape, personalization is key. Users expect applications 
            that adapt to their preferences, not just in functionality but in appearance and feel. 
            ThemeSwitch was born from this understanding.
          </p>
          <p
            className={theme.typography.bodySize}
            style={{ color: theme.colors.text.secondary }}
          >
            We believe that great design should be accessible, dynamic, and user-centric. 
            Our three distinct themes—Minimalist, Professional Dark, and Colorful Creative—each 
            tell a different story and cater to different moods and use cases.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <h2
          className="text-3xl font-bold text-center"
          style={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          What Makes Us Different
        </h2>
        
        <div className={
          theme.layout.type === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 gap-8'
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
        }>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-xl text-center space-y-4 transition-all duration-300 hover:shadow-lg ${
                  theme.layout.type === 'grid' ? 'transform hover:scale-105' : ''
                }`}
                style={{ backgroundColor: theme.colors.surface }}
              >
                <div className="flex justify-center">
                  <Icon
                    className="w-12 h-12"
                    style={{ color: theme.colors.primary }}
                  />
                </div>
                <h3
                  className="text-xl font-semibold"
                  style={{
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className={theme.typography.bodySize}
                  style={{ color: theme.colors.text.secondary }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="text-center p-8 rounded-2xl"
        style={{
          backgroundColor: theme.colors.primary + '10',
          border: `1px solid ${theme.colors.primary}20`,
        }}
      >
        <h2
          className="text-2xl font-bold mb-4"
          style={{
            color: theme.colors.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Ready to Transform Your Experience?
        </h2>
        <p
          className={`${theme.typography.bodySize} mb-6`}
          style={{ color: theme.colors.text.secondary }}
        >
          Try switching between our themes using the dropdown in the header. 
          Watch as the entire interface adapts to your choice.
        </p>
        <button
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 transform hover:scale-105"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;