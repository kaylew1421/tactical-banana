
import React, { useState, useEffect } from 'react';

const BananaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.8,4.16c-2-1.89-4.73-2.67-7.44-2.1c-1.55.33-2.99,1.1-4.2,2.15C3.7,5.5,2.12,7.57,2.2,9.66 c0.07,1.83,1.25,3.61,2.53,4.92c2.03,2.08,4.8,3.2,7.56,2.94c0.67-0.06,1.34-0.19,1.99-0.39c2.23-0.7,4.2-2.3,5.3-4.46 c0.97-1.9,1.15-4.14,0.39-6.2C19.3,5.6,18.17,4.8,16.8,4.16z M16.79,10.61c-0.89,1.7-2.38,2.93-4.18,3.48 c-0.58,0.18-1.18,0.29-1.78,0.33c-2.28,0.22-4.59-0.69-6.32-2.4c-1-1-1.92-2.39-2.02-3.86c-0.06-1.5,1.11-3.1,2.39-4.11 c1.02-0.8,2.21-1.42,3.52-1.68c2.25-0.48,4.55,0.2,6.23,1.79c1.09,1.03,1.91,2.4,1.88,3.87C18.18,8.88,17.61,9.81,16.79,10.61z"/>
  </svg>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { href: '#profile', label: 'Profile' },
    { href: '#skills', label: 'Skills' },
    { href: '#missions', label: 'Missions' },
    { href: '#map', label: 'Map' },
    { href: '#intel', label: 'Intel' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors">
            <BananaIcon className="w-8 h-8"/>
            <span className="text-xl font-bold tracking-wider uppercase">Tactical Banana</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-yellow-400 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;