import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-organic ${
      scrolled 
        ? 'card-organic shadow-organic-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <nav className="container-organic py-6">
        <div className="flex justify-between items-center">
          {/* Logo with Organic Design */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}>
              <Heart className="text-white" size={20} />
            </div>
            <div className="text-2xl font-bold text-gradient-organic" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Mohammed Farhan
            </div>
          </div>
          
          {/* Desktop Navigation with Natural Design */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-purple-600 transition-organic font-medium text-lg relative group"
              >
                {link.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-organic group-hover:w-full" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}></div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button with Organic Design */}
          <button
            className="md:hidden p-3 rounded-2xl transition-bounce hover:scale-110"
            style={{
              background: scrolled 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={scrolled ? 'text-white' : 'text-purple-600'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-white' : 'text-purple-600'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation with Natural Design */}
        {isOpen && (
          <div className="md:hidden mt-8 py-6 border-t border-gray-200">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-600 transition-organic font-medium text-lg flex items-center gap-3 p-3 rounded-2xl hover:bg-purple-50"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles size={16} className="text-purple-400" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;