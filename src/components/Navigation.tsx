import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 sm:py-3 glassmorphism backdrop-blur-lg shadow-md'
          : 'py-3 sm:py-4 md:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-display font-bold text-white flex items-center"
        >
          <span className="text-gradient">Jeffrey</span>
          <span className="ml-1">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm lg:text-base relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-neon-blue after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-neon-blue text-white px-3 py-2 rounded-md hover:bg-neon-blue/90 transition-colors duration-300 text-xs sm:text-sm inline-flex"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            className="text-white focus:outline-none p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-black via-gray-900 to-gray-800 backdrop-blur-xl"
          >
            <div className="min-h-screen flex flex-col pt-20 pb-8 px-6 overflow-y-auto">
              <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg sm:text-xl font-medium text-white hover:text-neon-blue transition-colors duration-300 py-3 w-auto"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-neon-blue text-white px-6 py-3 rounded-md hover:bg-neon-blue/90 transition-colors duration-300 text-base sm:text-lg inline-flex"
                  onClick={closeMobileMenu}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
