'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      title: 'Collections', 
      href: '#',
      submenu: [
        { title: 'Rings', href: '#' },
        { title: 'Necklaces', href: '#' },
        { title: 'Earrings', href: '#' },
        { title: 'Bracelets', href: '#' }
      ]
    },
    { title: 'Bridal', href: '#' },
    { title: 'Diamonds', href: '#' },
    { title: 'About', href: '#' },
    { title: 'Contact', href: '#' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-20">
          <Image src="/logo.jpg" alt="Rshree Logo" width={150} height={10} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <Link 
                href={link.href}
                className={`font-medium text-sm ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                } hover:text-gold transition-colors flex items-center`}
              >
                {link.title}
                {link.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>
              
              {link.submenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="py-2">
                    {link.submenu.map((subItem, idx) => (
                      <Link 
                        key={idx} 
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-charcoal hover:bg-cream hover:text-gold transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Icon Navigation */}
        {/* <div className="hidden lg:flex items-center space-x-6">
          <button className={`${isScrolled ? 'text-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`${isScrolled ? 'text-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
            <User className="w-5 h-5" />
          </button>
          <button className={`${isScrolled ? 'text-charcoal' : 'text-white'} hover:text-gold transition-colors relative`}>
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden relative z-20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-10 lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    <Link 
                      href={link.href}
                      className="text-lg font-medium text-charcoal block py-2 border-b border-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                    
                    {link.submenu && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.submenu.map((subItem, idx) => (
                          <Link 
                            key={idx} 
                            href={subItem.href}
                            className="text-sm text-charcoal block py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* <div className="flex justify-center space-x-8 mt-8">
                <button className="text-charcoal">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-charcoal">
                  <User className="w-5 h-5" />
                </button>
                <button className="text-charcoal relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-gold text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
                </button>
              </div> */}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};