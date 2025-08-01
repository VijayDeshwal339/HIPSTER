import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@themeswitch.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: '123 Design Street, Creative City, CC 12345',
      description: 'Come say hello at our office',
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
          Get In Touch
        </h1>
        <p
          className={`${theme.typography.bodySize} max-w-2xl mx-auto leading-relaxed`}
          style={{ color: theme.colors.text.secondary }}
        >
          Have questions about ThemeSwitch? Want to collaborate or just say hello? 
          We'd love to hear from you. Drop us a message and we'll get back to you soon.
        </p>
      </section>

      {/* Contact Info */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <div
              key={index}
              className={`p-6 rounded-xl text-center space-y-4 transition-all duration-300 ${
                theme.layout.type === 'grid' 
                  ? 'hover:shadow-lg transform hover:scale-105' 
                  : 'hover:shadow-md'
              }`}
              style={{ backgroundColor: theme.colors.surface }}
            >
              <div className="flex justify-center">
                <Icon
                  className="w-10 h-10"
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
                {info.title}
              </h3>
              <p
                className="font-medium"
                style={{ color: theme.colors.primary }}
              >
                {info.value}
              </p>
              <p
                className={theme.typography.bodySize}
                style={{ color: theme.colors.text.secondary }}
              >
                {info.description}
              </p>
            </div>
          );
        })}
      </section>

      {/* Contact Form */}
      <section
        className="p-8 rounded-2xl"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <h2
          className="text-2xl font-bold mb-8 text-center"
          style={{
            color: theme.colors.text.primary,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          Send Us a Message
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-200"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text.primary,
                }}
              />
            </div>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.text.primary }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-200"
                style={{
                  backgroundColor: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text.primary,
                }}
              />
            </div>
          </div>
          
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2"
              style={{ color: theme.colors.text.primary }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-200"
              style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.border,
                color: theme.colors.text.primary,
              }}
            />
          </div>
          
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: theme.colors.text.primary }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-200 resize-none"
              style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.border,
                color: theme.colors.text.primary,
              }}
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 transform hover:scale-105"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.background,
              }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;