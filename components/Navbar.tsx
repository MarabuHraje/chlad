import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Flower2, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Úvod', path: '/' },
    { name: 'Květinářství', path: '/kvetinarstvi' },
    { name: 'Kavárna & Cukrárna', path: '/kavarna' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Flower2 className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-500 ease-out" />
            <Coffee className="w-4 h-4 text-secondary absolute -bottom-1 -right-1 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className={`text-2xl font-bold tracking-wide font-serif ${isScrolled ? 'text-stone-800' : 'text-stone-900'}`}>
            Petra
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-sm tracking-wide uppercase transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === link.path ? 'text-primary after:w-full' : 'text-stone-600 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/kontakt" 
            className="px-6 py-2.5 bg-primary text-white rounded-full hover:bg-green-700 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium tracking-wide flex items-center gap-2"
          >
            <Mail size={16} />
            Kontaktovat
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-700 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-stone-100 animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-primary' : 'text-stone-700 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/kontakt" 
              className="mt-4 w-full text-center px-5 py-3 bg-primary text-white rounded-lg block"
            >
              Kontaktovat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;